import React, { Component } from "react";
import "../components/global/css/Product.css";
import Image from "../components/global/images/logo.svg";
import Button from "../components/global/ButtonProduct";

const url = "http://127.0.0.1:8000/api/producto/";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    return fetch(url + this.props.match.params.storeId)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState(
            (result.data = !null ? { products: result.data } : null)
          );
          console.log(this.state.products);
        },
        (error) => {}
      );
  }
  deleteProduct(value) {
    fetch(url + value, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          window.location.reload(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  updateProduct(value) {
    let { history } = this.props;
    history.push("/editarProducto/" + value);
  }
  render() {
    let datas = this.state.products;
    let products = null;
    if (datas != null) {
      products = datas.map((product) => (
        <div className="card  mb-3 product shadow-lg">
          <img src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Nombre: {product.Nombre}</h5>
            <p className="card-text">SKU: {product.SKU}</p>
            <p className="card-text">Descripcion: {product.Descripcion}</p>
            <p className="card-text">Valor: {product.Valor}</p>
            <p className="card-text">
              <small className="text-muted">
                Id Tienda: {product.IdTienda}
              </small>
            </p>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteProduct(product.SKU)}
            >
              Eliminar
            </button>
            <button
              className="btn btn-primary ml-2"
              onClick={() => this.updateProduct(product.SKU)}
            >
              Editar
            </button>
          </div>
        </div>
      ));
    }
    return (
      <div>
        <h1 className="font-weight-bold">Productos</h1>
        <div className="row">
          <div className="col-md-10">{products}</div>
          <div className="col-md-2">
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
