import { ReactNode } from 'react';
import { Door } from './Door';

const days = [...Array(25).keys()].map((i) => i + 1); // [1, ..., 25]

type DadventCalendarProps = {
  children?: ReactNode;
};

export const DadventCalendar = ({ children }: DadventCalendarProps) => {
  const today = new Date().getDate();

  // TODO: throwing a "global not defined" error on SSR
  // const forceUpdate = useForceUpdate();
  // useVisibilityChange({
  //   onShow: forceUpdate,
  // });

  return (
    <div className="App">
      <h1>Dadvent Calendar</h1>
      <h2>by 12 year old Revel Carlberg West</h2>

      <div className="container">
        {days.map((day) => (
          <Door key={day} today={today} day={day} />
        ))}
      </div>

      {children}
    </div>
  );
};
