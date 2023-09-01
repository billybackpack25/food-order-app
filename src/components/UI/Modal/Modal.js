import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = ({ onClick }) => (
  <div className={styles.backdrop} onClick={onClick}></div>
);

const ModalOverlay = ({ children, onClose }) => (
  <div className={styles.modal}>
    <header>
      <button onClick={onClose}>x</button>
    </header>
    <div className={styles.content}>{children}</div>
  </div>
);

const Modal = ({ children, onClose, isOpen }) => {
  if (isOpen)
    return (
      <>
        {createPortal(<Backdrop onClick={onClose} />, document.body)}
        {createPortal(
          <ModalOverlay onClose={onClose}>
            {React.cloneElement(children, { onClose })}
          </ModalOverlay>,
          document.body
        )}
      </>
    );
  return <></>;
};

Modal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
