import PropTypes from 'prop-types';

import styles from './MealItem.module.css';
import Form from './Form/Form';
import { useCartContext } from '../../../store/cart';
import { toCurrency } from '../../../utils/formatters';

const MealItem = ({ name, description, price, id }) => {
  const { addItem } = useCartContext();

  const addToCartHandler = (amount) => addItem({ id, name, price, amount });

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{toCurrency(price)}</div>
      </div>
      <div>
        <Form id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

MealItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default MealItem;
