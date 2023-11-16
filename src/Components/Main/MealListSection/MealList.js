import React, { useContext, useState } from "react";
import AuthContext from "../../../store/auth-context";
import styles from "./MealList.module.css";
const MealLists = () => {
  const authCtx = useContext(AuthContext);
  // const [cartItems, setCartItems] = useState([]);

  // const addToCartHandler =(mealList) => {
  //   setCartItems((prevState) => [...prevState, mealList]);
  // }
  // console.log(cartItems)

  // console.log(cartItems);
  return (
    <ul className={styles.meals}>
      {authCtx.totalMealLists.map((mealList) => (
        <React.Fragment key={mealList.id}>
          <li className={styles.meal}>
            <div className={styles.mealattr}>
              <h5>{mealList.name}</h5>
              <p>{mealList.description}</p>
              <p className={styles.price}>{mealList.price}</p>
            </div>
            <div>
              <h5>
                Amount <input type="number" onChange={authCtx.onInput} />
              </h5>
              <button
                className={styles.button}
                onClick={() => {
                 authCtx.addToCartHandler(mealList)
                }}
              >
                +Add
              </button>
            </div>
          </li>
          <hr></hr>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MealLists;
