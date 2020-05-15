import React, { Component } from "react";
import "./css/Product.css";
import Image from "./images/logo.svg";

const url = "http://127.0.0.1:8000/api/producto";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    return fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ products: result.data.product });
          console.log(this.state.store);
        },
        (error) => {}
      );
  }

  render() {
    let datas = this.state.products;
    let products = datas.map((product) => (
      <div className="card  mb-3 product shadow-lg">
        <img src={Image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Nombre: {product.Nombre}</h5>
          <p className="card-text">SKU: {product.SKU}</p>
          <p className="card-text">Descripcion: {product.Descripcion}</p>
          <p className="card-text">Valor: {product.Valor}</p>
          <p className="card-text">
            <small className="text-muted">Id Tienda: {product.IdTienda}</small>
          </p>
          <button className="btn btn-danger">Eliminar</button>
          <button className="btn btn-primary ml-2">Editar</button>
        </div>
      </div>
    ));
    return <div className="Product">{products}</div>;
  }
}

export default Product;
