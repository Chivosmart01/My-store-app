import React, { useContext } from "react";
// import AuthContext from "./store/auth-context";
import AuthContext from "../../../store/auth-context";
import styles from "./MealList.module.css";

const mealLists = [
  { name: "Sushi", description: "Finest fish and veggies", price: "22.99" },
  { name: "Schnitzel", description: "A german specialty!", price: "16.50" },
  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: "12.99",
  },
  {
    name: "Green Bowl",
    description: "Healthy ...and green...",
    price: "18.99",
  },
];

const MealLists = () => {
  // const [outputAmountCart, setOutputAmountCart] = useState("");

  // const inputHandler = (e) => {
  //   const inputValue = e.target.value;
  //   setOutputAmountCart(inputValue);
  // };

  // const addToCart = () => {
  //   console.log(outputAmountCart);

  //   const outPutValues = {
  //     name: mealLists.name,
  //     description: mealLists.description,
  //     amount: outputAmountCart,
  //     price: mealLists.price,
  //   };
  // };
  const AuthCtx = useContext(AuthContext)

  return (
    <ul className={styles.meals}>
      {mealLists.map((mealList) => (
        <React.Fragment>
          <li className={styles.meal}>
            <div className={styles.mealattr}>
              <h5>{mealList.name}</h5>
              <p>{mealList.description}</p>
              <p className={styles.price}>{mealList.price}</p>
            </div>
            <div>
              <h5>
                Amount <input type="number"   onChange={AuthCtx.inputHandler} />
              </h5>
              <button className={styles.button} onClick={AuthCtx.addToCart}>
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
