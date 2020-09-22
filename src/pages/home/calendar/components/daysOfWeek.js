import React from 'react'
import PropTypes from 'prop-types';
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

DaysOfWeek.propTypes = {
  currentDate: PropTypes.object.isRequired,
};
export default DaysOfWeek;
