import React from "react";
//Componentes
import ButtonStore from "../components/global/ButtonStore";
import Product from "../components/global/Product";

function Products(option = null) {
  let title = "Productos";
  let objects = <Product />;
  let button = <ButtonStore />;

  return (
    <div>
      <h1 className="font-weight-bold">{title}</h1>
      <div className="row">
        <div className="col-md-10">{objects}</div>
        <div className="col-md-2">{button}</div>
      </div>
    </div>
  );
}

export default Products;
