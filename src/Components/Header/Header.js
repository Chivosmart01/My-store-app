import React, { useState } from "react";

import CartItemsModal from "../Main/CartItemsModal/CartItemsModal"
import styles from "./Header.module.css";

const Header = () => {
    // const openModal = false
    [modal, setModal] = useState()

    const openModalHandler = () => {
        setModal(true)
    }

  return (
    <header className={styles.header}>
      <div className={styles.brandname}>
        <h1>ReactMeals</h1>
      </div>
      <div className={styles.cart}>
        <h5 onClick = {openModalHandler} >Your cart</h5>
        <div className ={styles.cartNumber}>
          <p>0</p>
        </div>
      </div>
     {openModal &&  <CartItemsModal />}
      {/* <CartItemsModal /> */}
    </header>
  );
};

export default Header;
