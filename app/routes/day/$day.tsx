import { CatchBoundaryComponent } from '@remix-run/server-runtime/routeModules';
import {
  json,
  LoaderFunction,
  RouteComponent,
  useLoaderData,
  useNavigate,
} from 'remix';
import { jokes } from '~/data/jokes';
import { Joke } from '~/types/Joke.type';
import { MetaFunction } from '~/types/MetaFunction.type';
import { DayDialog } from '~/ui/DayDialog';
import { toInteger } from '~/utils/toInteger';
import { formatOrdinals } from '~/utils/formatOrdinals';
import { DadventCalendar } from '~/ui/DadventCalendar';
import { Navigate } from '~/ui/Navigate';

const eightHours = 1000 * 60 * 60 * 8;

export const loader: LoaderFunction = ({ params }): Response => {
  const requestDay = toInteger(params.day);
  // this code executes on the server. we don't know the user's time zone, so fudge
  // the current date by 8 hours. the server is maybe/probably in US Eastern time
  const utcDate = new Date(new Date().getTime() - eightHours).getUTCDate();

  const isTooEarly = requestDay > utcDate;
  if (isTooEarly) throw new Response('Too early.', { status: 400 });

  const jokeQA = jokes[requestDay - 1];
  if (!jokeQA) throw new Response('Joke not found.', { status: 404 });

  const joke = { ...jokeQA, day: requestDay };

  return json(joke, {
    headers: {
      'Cache-Control': 'max-age=300, must-revalidate', // cache joke for 5 mins
    },
  });
};

export const meta: MetaFunction<Joke> = ({ data: joke }) => {
  if (!joke) return;

  const title = `Dadvent Calendar for Dec ${formatOrdinals(joke.day)}`;
  const description = joke.q;

  return {
    title,
    'og:title': title,
    'og:site_name': title,
    'twitter:title': title,
    description,
    'og:description': description,
    'twitter:description': description,
  };
};

const Render: RouteComponent = () => {
  const joke = useLoaderData<Joke>();
  const navigate = useNavigate();
  const closeDialog = () => navigate('/');

  return (
    <DadventCalendar>
      <DayDialog joke={joke} onDismiss={closeDialog} />
    </DadventCalendar>
  );
};
export default Render;

export const CatchBoundary: CatchBoundaryComponent = () => <Navigate to="/" />;
