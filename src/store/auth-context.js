import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({
  outputAmountCart: "",
  addToCart:addToCart,
});

export const AuthContextProvider = (props) => {
  const [outputAmountCart, setOutputAmountCart] = useState("");

  const inputHandler = (e) => {
    const inputValue = e.target.value;
    setOutputAmountCart(inputValue);
  };

  const addToCart = () => {
    console.log(outputAmountCart);

    const outPutValues = {
      name: mealLists.name,
      description: mealLists.description,
      amount: outputAmountCart,
      price: mealLists.price,
    };
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
