import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { object, string } from 'yup';

import useCheckout from '../../../hooks/useCheckout';
import styles from '../Cart.module.css';

const formInput = {
  name: '',
  street: '',
  city: '',
  postcode: '',
  country: '',
};

const AddressForm = ({ previousStep, nextStep }) => {
  const { checkout, error: httpError, isLoading } = useCheckout();
  const [addressForm, setAddressForm] = useState({ ...formInput });
  const [formError, setFormError] = useState({ ...formInput });

  const onChange = ({ target }) => {
    setAddressForm((prev) => ({ ...prev, [target.name]: target.value }));
    setFormError((prev) => ({ ...prev, [target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = await validateInput(addressForm);

    if (errors) return showErrors(errors);
    console.log(await checkout(addressForm));
    if (!httpError) nextStep();
  };
  console.log('httpError', httpError);

  const showErrors = (errors) => setFormError(errors);

  const getError = (field) => formError[field];

  return (
    <>
      <form className={styles.form} id='addressForm' onSubmit={handleSubmit}>
        <div className={styles.groupInput}>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Full name'
            onChange={onChange}
            aria-invalid={!!getError('name')}
          />
          <Error message={getError('name')} />
        </div>

        <fieldset form='address' name='address' id='address'>
          <div className={styles.groupInput}>
            <label htmlFor='address'>Address:</label>
            <input
              type='text'
              name='street'
              placeholder='No. Street'
              onChange={onChange}
              aria-invalid={!!getError('street')}
            />
            <Error message={getError('street')} />
          </div>
          <div className={styles.groupInput}>
            <input
              type='text'
              name='city'
              placeholder='City'
              onChange={onChange}
              aria-invalid={!!getError('city')}
            />
            <Error message={getError('city')} />
          </div>
          <div className={styles.groupInput}>
            <input
              type='text'
              name='postcode'
              placeholder='Postcode'
              onChange={onChange}
              aria-invalid={!!getError('postcode')}
            />
            <Error message={getError('postcode')} />
          </div>
          <div className={styles.groupInput}>
            <input
              type='text'
              name='country'
              placeholder='Country'
              onChange={onChange}
              aria-invalid={!!getError('country')}
            />
            <Error message={getError('country')} />
          </div>
        </fieldset>
      </form>

      {httpError && <p>something has gone wrong!</p>}
      {isLoading && <p>Preparing your order!</p>}

      <div className={styles.actions}>
        <button
          className={styles['button--alt']}
          onClick={previousStep}
          id='back2cart'
        >
          Back to cart
        </button>
        <button className={styles.button} form='addressForm' type='submit'>
          Checkout
        </button>
      </div>
    </>
  );
};

AddressForm.propTypes = {
  onClose: PropTypes.func,
  nextStep: PropTypes.func,
};

export default AddressForm;

function validateInput(data) {
  const schema = object({
    name: string().required(),
    street: string().required(),
    city: string().required(),
    postcode: string().required(),
    country: string().required(),
  });

  return schema
    .validate(data, { abortEarly: false })
    .then(() => false)
    .catch((err) => {
      return Object.fromEntries(
        err.errors.map((message, idx) => [err.inner[idx].path, message])
      );
    });
}

function Error({ message }) {
  if (message) return <span className={styles.error}>{message}</span>;
}
