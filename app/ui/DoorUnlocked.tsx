import { Link } from 'remix';
import { formatOrdinals } from '~/utils/formatOrdinals';

type DoorUnlockedProps = {
  day: number;
};

export const DoorUnlocked = ({ day }: DoorUnlockedProps) => (
  <Link
    title={`Open door for Dec ${formatOrdinals(day)}`}
    className="door unlocked"
    to={`/day/${day}`}
  >
    <div className="number">{day}</div>
    <div className="bottom">Open</div>
  </Link>
);
