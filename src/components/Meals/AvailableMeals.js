import styles from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const mealsList = Data().map((meal) => {
    return <MealItem key={meal.id} {...meal} />;
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

function Data() {
  return [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
}

export default AvailableMeals;
