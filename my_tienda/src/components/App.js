import React from "react";
import "./global/css/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Componentes
import Home from "../pages/Home";
import Product from "../pages/Product";
import RegisterStore from "../pages/RegisterStore";
import UpdateStore from "../pages/UpdateStore";
import RegisterProduct from "../pages/RegisterProduct";
import UpdateProduct from "../pages/UpdateProduct";
import Logs from "../pages/Logs";

function App() {
  return (
    <div className="container mt-4">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:storeId" component={Product} />
          <Route exact path="/registroTienda" component={RegisterStore} />
          <Route exact path="/tienda/:storeId" component={UpdateStore} />
          <Route exact path="/registroProducto/:storeId" component={RegisterProduct} />
          <Route exact path="/editarProducto/:productId" component={UpdateProduct} />
          <Route exact path="/logs" component={Logs} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
