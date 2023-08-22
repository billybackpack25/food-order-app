import { forwardRef } from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

const Input = ({ label, input }, ref) => (
  <div className={styles.input}>
    <label htmlFor={input.id}>{label}</label>
    <input type='number' {...input} ref={ref} />
  </div>
);

Input.propTypes = {
  input: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default forwardRef(Input);
