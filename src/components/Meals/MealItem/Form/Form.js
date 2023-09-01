import PropTypes from 'prop-types';

import Input from '../../../UI/Input/Input';
import styles from './Form.module.css';
import { useRef, useState } from 'react';

const Form = ({ id, onAddToCart }) => {
  const inputRef = useRef(null);
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setIsValid(false);
      return;
    }

    onAddToCart(+enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Form;
