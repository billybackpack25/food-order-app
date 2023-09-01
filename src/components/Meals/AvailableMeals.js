import styles from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';
import { useState } from 'react';
import useMeals from '../../hooks/useMeals';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const { error, isLoading } = useMeals({
    setMeals,
    retrieveOnLoad: true,
  });

  let content = <p>No available meals</p>;

  if (isLoading) content = <p>Loading...</p>;
  if (error) content = <p>Something has gone wrong</p>;

  const mealsList = meals?.map((meal) => {
    return <MealItem key={meal.id} {...meal} />;
  });

  if (!!mealsList?.length) content = mealsList;

  return (
    <section className={styles.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
