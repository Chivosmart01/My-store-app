import React from "react";

import styles from "./MealList.module.css";

const MealLists = () => {
  return (
    <ul className={styles.meals}>
      <li className = {styles.meal}>
        <div className = {styles.mealattr}>
          <h5>Sushi</h5>
          <p>Finest fish and veggies</p>
          <p className ={styles.price}>$22.99</p>
        </div>
        <div>
            <h5>Amount <input type ="number"/></h5>
            <button  className ={styles.button}>+Add</button>
        </div>
      </li>
      <hr></hr>
      <li className = {styles.meal}>
        <div className = {styles.mealattr}>
          <h5>Schnitzel</h5>
          <p>A german specialty!</p>
          <p className ={styles.price}>$16.50</p>
        </div>
        <div>
            <h5>Amount <input type ="number"/></h5>
            <button  className ={styles.button}>+Add</button>
        </div>
      </li>
      <hr></hr>
      <li className = {styles.meal}>
        <div className = {styles.mealattr}>
          <h5>Barbecue Burger</h5>
          <p>American, raw, meaty</p>
          <p className ={styles.price}>$12.99</p>
        </div>
        <div>
            <h5>Amount <input className={styles.input} type ="number"/></h5>
            <button  className ={styles.button}>+Add</button>
        </div>
      </li>
      <hr></hr>
      <li className = {styles.meal}>
        <div className = {styles.mealattr}>
          <h5>Green Bowl</h5>
          <p>Healthy ...and green...</p>
          <p className ={styles.price}>$18.99</p>
        </div>
        <div>
            <h5>Amount <input type ="number"/></h5>
            <button className ={styles.button}>+Add</button>
        </div>
      </li>
    </ul>
  );
};

export default MealLists;
