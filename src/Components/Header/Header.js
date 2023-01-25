import React, { useState } from "react";

import CartItemsModal from "../../overlays/CartItemsModal/CartItemsModal"
import styles from "./Header.module.css";

const Header = () => {
  const [modal, setModal] = useState();

  const openModalHandler = () => {
    console.log(true)
    setModal(true);
  };

  const removeModalHandler = () => {
    setModal(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.brandname}>
        <h1>ReactMeals</h1>
      </div>
      <div className={styles.cart}>
        <button onClick={openModalHandler}>Your cart</button>
        <div className={styles.cartNumber}>
          <p>0</p>
        </div>
      </div>
      {modal && <CartItemsModal onRemoveModal={removeModalHandler}/>}
      {/* <CartItemsModal /> */}
    </header>
  );
};

export default Header;
