import React, { useEffect, useState } from "react";

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

const AuthContext = React.createContext({
  outputAmountCart: "",
  addToCart: () => {},
  inputHandler: () => {},
//   outPutToCartValues: outPutValues,
});

export const AuthContextProvider = (props) => {
  const [outputAmountCart, setOutputAmountCart] = useState("");

  const inputHandler = (e) => {
    const inputValue = e.target.value;
    setOutputAmountCart(inputValue);
  };

  let outPutValues;

  const addToCartHandler = (outPutValues) => {
    console.log(outputAmountCart);

    outPutValues = {
      name: mealLists.name,
      description: mealLists.description,
      amount: outputAmountCart,
      price: mealLists.price,
    };
  };

  return (
    <AuthContext.Provider
      value={{
        outputAmountCart: outputAmountCart,
        addToCart: addToCartHandler,
        inputHandler: inputHandler,
        outPutToCartValues: outPutValues,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
