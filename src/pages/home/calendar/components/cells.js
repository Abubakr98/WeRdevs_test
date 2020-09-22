import React from 'react';
import { connect } from 'react-redux';
import {
  format,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  toDate,
  startOfWeek,
  isSameDay,
  endOfWeek,
  addDays,
} from 'date-fns';

const Cells = ({
  currentDate,
  selectedDate,
  setSelectedDate,
  changeModalVisibility,
  ...props
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const dateFormat = 'dd  ';
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  const onDateClick = (day) => {
    setSelectedDate(day);
    changeModalVisibility();
    props.setModalData(format(day, 'MMMM do eeee'));
  };
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      let today = '';
      if (format(day, 'MMMM yyyy dd') === format(new Date(), 'MMMM yyyy dd'))
        today = 'today';
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className={`column cell ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? `selected ${today}`
              : `${today}`
          }`}
          key={day}
          onClick={() => onDateClick(toDate(cloneDay))}
        >
          <span className='number'>{formattedDate}</span>
          <span className='bg'>{/* {formattedDate} */}</span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className='row' key={day}>
        {' '}
        {days}{' '}
      </div>
    );
    days = [];
  }
  return <div className='body'>{rows}</div>;
};

const mapState = (state) => {
  return {
    modal: state.modal,
  };
};
const mapDispatch = ({ modal: { setModalData, changeModalVisibility } }) => ({
  setModalData: (data) => setModalData(data),
  changeModalVisibility: () => changeModalVisibility(),
});
export default connect(mapState, mapDispatch)(Cells);
