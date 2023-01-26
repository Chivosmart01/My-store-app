import React from "react";

import styles from "./Main.module.css";
import ImageSection from "./ImageSection/ImageSection";
import MealLists from "./MealListSection/MealList";
// import CartItemsModal from "./CartItemsModal/CartItemsModal";

const Main = () => { 
  return (
    <main className={styles.main}>
      {/* <CartItemsModal /> */}
      <ImageSection />
      <MealLists />
    </main>
  );
};

export default Main;
