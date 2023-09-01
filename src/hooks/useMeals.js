import { useCallback, useEffect } from 'react';
import useHttp from './useHttp';

const baseUrl = process.env.REACT_APP_FIREBASE_DATABASE;
const url = `${baseUrl}/meals.json`;
// const deleteUrl = `${baseUrl}/meals/:id.json`;

const useMeals = ({ retrieveOnLoad = false, meals, setMeals } = {}) => {
  const { error, isLoading, call } = useHttp();

  const transform = (data) => data.meals;

  const getMeals = useCallback(async () => {
    const data = await call({ url, transform });
    setMeals(data);
    return data;
  }, [call, setMeals]);

  useEffect(() => {
    if (retrieveOnLoad && !meals) getMeals();
  }, [retrieveOnLoad, getMeals, meals]);

  return {
    getMeals,
    error,
    isLoading,
  };
};

export default useMeals;
