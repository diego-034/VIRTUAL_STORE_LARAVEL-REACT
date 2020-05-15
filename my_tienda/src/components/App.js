import React from "react";
import logo from "./global/images/logo.svg";
import "./global/css/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Componentes
import Home from "../pages/Home";
import Products from "../pages/Products";

function App() {
  return (
    <div className="container mt-4">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
