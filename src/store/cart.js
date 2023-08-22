import { createContext, useContext, useReducer } from 'react';
import { ADD, REMOVE } from './cartActions';
import { produce } from 'immer';

export const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD: {
      const index = draft.items.findIndex(({ id }) => id === action.item.id);

      if (index !== -1) {
        draft.items[index].amount += action.item.amount;
      } else {
        draft.items.push(action.item);
      }

      draft.totalAmount += action.item.price * action.item.amount;
      break;
    }
    case REMOVE: {
      const index = draft.items.findIndex(({ id }) => id === action.id);
      draft.totalAmount -= draft.items[index].price;

      if (draft.items[index].amount === 1) {
        draft.items.splice(index, 1);
      } else {
        draft.items[index].amount -= 1;
      }
      break;
    }
    default:
      break;
  }
}, initialCartState);

export const CartContext = createContext({
  ...initialCartState,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const addItemToCartHandler = (item) => dispatch({ type: ADD, item });

  const removeItemFromCartHandler = (id) => dispatch({ type: REMOVE, id });

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
