import { DadventCalendar } from '~/ui/DadventCalendar';
import socialImagePath from '../../public/img/social-image.png';

const title = 'Dadvent Calendar';
const description = 'Dadvent: An Advent Calendar for Dad Jokes.';
const baseOrigin = 'https://dadvent.revelcw.com';
const socialImageUrl = `${baseOrigin}${socialImagePath}`;

export const meta = {
  title,
  description,

  'og:locale': 'en_US',
  'og:description': description,
  'og:title': title,
  'og:site_name': title,
  'og:type': 'website',
  'og:url': baseOrigin,
  'og:image': socialImageUrl,

  'twitter:description': description,
  'twitter:title': title,
  'twitter:card': 'summary_large_image',
  'twitter:url': baseOrigin,
  'twitter:image': socialImageUrl,
  'twitter:site': '@revelcw',
  'twitter:creator': '@revelcw',
};

export default function Index() {
  return <DadventCalendar />;
}
