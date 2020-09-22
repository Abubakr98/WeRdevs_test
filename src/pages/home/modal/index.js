import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './modal.css';

const Modal = ({ modal, changeModalVisibility }) => {
  const modalHandle = (e) => {
    if (e.target.id === 'modal') {
      changeModalVisibility();
    }
  };
  const { isOpen } = modal;
  const moth = modal.data && modal.data.split(' ').slice(0, 1);
  const day = modal.data && modal.data.split(' ').slice(1, 3).join(' ');
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

Modal.propTypes = {
  modal: PropTypes.object.isRequired,
  changeModalVisibility: PropTypes.func.isRequired,
};
export default connect(mapState, mapDispatch)(Modal);
