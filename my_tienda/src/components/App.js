import React from "react";
import "./global/css/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Componentes
import Home from "../pages/Home";
import Product from "../pages/Product";

function App() {
  return (
    <div className="container mt-4">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:storeId" component={Product} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
