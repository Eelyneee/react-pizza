import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Better Ingredients. Better Pizza.</h2>
      <p>
        Try our pizza today and experience the taste of perfection!
      </p>
      <p>
        Our pizza is freshly baked with top-quality ingredients, resulting in a mouthwatering
        and cheesy delight that is ready to order and hot when you are.
      </p>
    </section>
  );
};

export default MealsSummary;
