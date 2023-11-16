import React from "react";
import "./App.css";

import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import AuthContext from "./store/auth-context";

function App() {
  return (
      <div className="app">
        <Header></Header>
        <Main />
      </div>
  );
}

export default App;
