import { useCallback } from 'react';
import useHttp from './useHttp';
import { useCartContext } from '../store/cart';

const baseUrl = process.env.REACT_APP_FIREBASE_DATABASE;
const url = `${baseUrl}/checkout.json`;
// const deleteUrl = `${baseUrl}/meals/:id.json`;

const useCheckout = () => {
  const { error, isLoading, call } = useHttp();
  const { items, complete, checkoutItems } = useCartContext();

  const transform = (data) => data;

  const checkout = useCallback(
    async (address) => {
      const data = await call({
        url,
        transform,
        config: {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ address, items }),
        },
      });
      checkoutItems(data?.name);
      return data;
    },
    [call, checkoutItems, items]
  );

  return {
    checkout,
    error,
    isLoading,
    complete,
  };
};

export default useCheckout;
