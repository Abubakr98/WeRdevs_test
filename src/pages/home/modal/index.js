import React from 'react';
import { connect } from 'react-redux';

import './modal.css';

const Modal = ({ modal, changeModalVisibility }) => {
  const modalHandle = (e) => {
    console.log(e.target.id);
    if (e.target.id === 'modal') {
      changeModalVisibility();
    }
  };
  const { isOpen } = modal;
  const moth = modal.data && [modal.data.split(' ').slice(0, 1)];
  const day = modal.data && [modal.data.split(' ').slice(1, 2)];
  return (
    <React.Fragment>
      {isOpen && (
        <div onClick={modalHandle} id='modal' className='modal'>
          <div className='modal-body'>
            <div>
              <label htmlFor='moth'>Month</label>
              <br />
              <input type='text' defaultValue={moth} id='moth' />
            </div>
            <div>
              <label htmlFor='day'>Day</label>
              <br />
              <input type='text' defaultValue={day} id='day' />
            </div>
            <div className='close' onClick={() => changeModalVisibility()}>
              &times;
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const mapState = (state) => {
  return {
    modal: state.modal,
  };
};
const mapDispatch = ({ modal: { changeModalVisibility } }) => ({
  changeModalVisibility: (data) => changeModalVisibility(data),
});
export default connect(mapState, mapDispatch)(Modal);
