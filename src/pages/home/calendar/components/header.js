import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';

const Header = ({ setCurrentDate, currentDate }) => {
  const dateFormat = 'MMMM yyyy';
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  return (
    <div className='header row flex-middle'>
      <div className='column col-start'>
        <div className='icon' onClick={prevMonth}>
        {'<'}
        </div>
      </div>
      <div className='column col-center'>
        <span> {format(currentDate, dateFormat)} </span>
      </div>
      <div className='column col-end'>
        <div className='icon' onClick={nextMonth}>
        {'>'}
        </div>
      </div>
    </div>
  );
};

export default Header;
