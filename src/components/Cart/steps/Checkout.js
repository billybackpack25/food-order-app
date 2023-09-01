import React from 'react';
import useCheckout from '../../../hooks/useCheckout';

import styles from '../Cart.module.css';

const Checkout = ({ previousStep, onClose }) => {
  const { complete } = useCheckout();
  return (
    <div>
      <p>You've checked out! ({complete})</p>
      <p>Food is on it's way!</p>
      <div className={styles.actions}>
        <button onClick={previousStep} className={styles['button--alt']}>
          Previous
        </button>
        <button onClick={onClose} className={styles.button}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Checkout;
