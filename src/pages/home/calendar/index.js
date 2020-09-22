import React, { useState } from 'react';

import './calendar.css';
import Header from './components/header';
import DaysOfWeek from './components/daysOfWeek';
import Cells from './components/cells';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className='calendar'>
      <div>
        <Header setCurrentDate={setCurrentDate} currentDate={currentDate} />
      </div>
      <div>
        <Cells
          currentDate={currentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div>{<DaysOfWeek currentDate={currentDate} />}</div>
    </div>
  );
};
export default Calendar;
