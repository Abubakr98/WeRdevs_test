import React from 'react'
import { startOfWeek, format, addDays } from 'date-fns';

const DaysOfWeek = ({ currentDate }) => {
  const dateFormat = 'EEEEE';
  const days = [];
  let startDate = startOfWeek(currentDate);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className='column col-center' key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    );
  }
  return <div className='days row'>{days}</div>;
};

export default DaysOfWeek;
