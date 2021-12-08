import { DoorLocked } from './DoorLocked';
import { DoorUnlocked } from './DoorUnlocked';

type DoorProps = {
  day: number;
  today: number;
};

export const Door = ({ day, today }: DoorProps) => {
  const locked = day > today;

  return locked ? <DoorLocked day={day} /> : <DoorUnlocked day={day} />;
};
