import PropTypes from 'prop-types';

import styles from './Header.module.css';
import img from '../../../assets/meals.jpg';
import CartButton from './CartButton';

const Header = ({ onShowCart }) => (
  <>
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <CartButton onClick={onShowCart} />
    </header>
    <div className={styles['main-image']}>
      <img src={img} alt='Long table with lots of delicious food' />
    </div>
  </>
);

Header.propTypes = {
  onShowCart: PropTypes.func,
};

export default Header;
