import { useCartContext } from '../../../store/cart';
import { toCurrency } from '../../../utils/formatters';
import styles from '../Cart.module.css';
import CartItem from '../CartItem/CartItem';
import PropTypes from 'prop-types';

const Cart = ({ onClose, nextStep }) => {
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
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{toCurrency(totalAmount)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && (
          <button className={styles.button} onClick={nextStep}>
            Order
          </button>
        )}
      </div>
    </>
  );
};

Cart.propTypes = {
  nextStep: PropTypes.func,
  onClose: PropTypes.func,
};

export default Cart;
