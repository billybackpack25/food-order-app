import PropTypes from 'prop-types';

import { useCartContext } from '../../store/cart';
import { toCurrency } from '../../utils/formatters';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const Cart = ({ isOpen, onClose }) => {
  const { items, totalAmount, addItem, removeItem } = useCartContext();
  const hasItems = items.length > 0;

  const itemRemoveHandler = (id) => removeItem(id);
  const itemAddHandler = (item) => addItem(item);

  const cartItems = (
    <ul className={styles['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={itemRemoveHandler.bind(null, item.id)}
          onAdd={itemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{toCurrency(totalAmount)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Cart;
