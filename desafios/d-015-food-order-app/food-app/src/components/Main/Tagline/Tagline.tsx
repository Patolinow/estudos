import styles from "./Tagline.module.css"

const Tagline = ():JSX.Element => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food Delivered For You!</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home. All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default Tagline