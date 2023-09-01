import { useState } from 'react';
import CartModal from './components/Cart/CartModal';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import { CartProvider } from './store/cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <CartModal isOpen={cartIsShown} onClose={hideCartHandler} />
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
