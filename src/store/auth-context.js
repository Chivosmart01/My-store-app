import React, { useState } from "react";
import MealLists from "../Components/Main/MealListSection/MealList";

const AuthContext = React.createContext({
  outputAmountCart: "",
  onAddToCart: () => {},
  onInput: () => {},
  totalMealLists: [],
  outPutToCartValues: {},
  outPutToCartValues: [],
});

export const AuthContextProvider = (props) => {
  const [outputAmountCart, setOutputAmountCart] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const mealLists = [
    {
      id: 1,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "22.99",
    },
    {
      id: 2,
      name: "Schnitzel",
      description: "A german specialty!",
      price: "16.50",
    },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: "12.99",
      id: 3,
    },
    {
      name: "Green Bowl",
      description: "Healthy ...and green...",
      price: "18.99",
      id: 4,
    },
  ];

  const inputHandler = (e) => {
    const inputValue = e.target.value;
    setOutputAmountCart(inputValue);
  };

  // let outPutValues;

  const onAddToCart = (mealList) => {
    // const existingCartItemIndex = cartItems.findIndex(item => mealList.id === cartItems.id)
    // const existingCartItem = cartItems(existingCartItemIndex)
    // let updatedCartItem
    // let updatedCartItems
    // if (existingCartItem) {
    //   updatedCartItem = {
    //     ...existingCartItem,
    //     amount:existingCartItem.amount + mealList.amount
    //   }
    //   updatedCartItems = [...cartItems]
    //   updatedCartItems[existingCartItemIndex] = updatedCartItem

    // }

    setCartItems((prevState) => [...prevState, mealList]);
  };

  console.log(cartItems);
  return (
    <AuthContext.Provider
      value={{
        outputAmountCart: outputAmountCart,
        addToCartHandler: onAddToCart,
        onInput: inputHandler,
        totalMealLists: mealLists,
        outPutToCartValues: cartItems,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
