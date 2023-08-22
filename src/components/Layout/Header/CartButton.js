import PropTypes from 'prop-types';
import Icon from '../../UI/Icon';

import styles from './CartButton.module.css';
import { useCartContext } from '../../../store/cart';
import { useEffect, useState } from 'react';

const CartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = useCartContext();
  const numOfItems = items.reduce((acc, item) => acc + item.amount, 0);

  const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => setBtnIsHighlighted(false), 300);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnStyles} onClick={onClick}>
      <span>
        <Icon.Cart />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfItems}</span>
    </button>
  );
};

CartButton.defaultProps = {
  onClick: () => null,
};

CartButton.prototype = {
  onClick: PropTypes.func,
};

export default CartButton;
