import React from "react";
import styles from "./ImageSection.module.css";

const ImageSection = () => {
  return (
    <div>
      <section className={styles.section}>
        <article className={styles.article}>
          <h1>Delicious Food, Delivered To You</h1>
          <p>
            Choose your favourite meal from our broad selection of avilable
            meals and enjoy a delicious lunch or dinner at home
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just in-time
            and of course by experienced chefs!
          </p>
        </article>
      </section>
    </div>
  );
};

export default ImageSection;
