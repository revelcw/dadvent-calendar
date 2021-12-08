import { formatOrdinals } from '~/utils/formatOrdinals';

type DoorLockedProps = {
  day: number;
};

export const DoorLocked = ({ day }: DoorLockedProps) => (
  <div
    title={`Locked. Opens on Dec ${formatOrdinals(day)}`}
    className="door locked"
  >
    <div className="locked-number">{day}</div>
    <img src="/img/lock.svg" alt="locked" />
    <span className="bottom">Locked</span>
  </div>
);
