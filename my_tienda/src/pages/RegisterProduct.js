import React, { Component } from "react";
import Image from "../components/global/images/logo.svg";
import "../components/global/css/RegisterProduct.css";
//Componentes
import ButtonCancel from "../components/global/ButtonCancelProduct";

class RegisterStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      date: null,
    };
  }
  addProduct() {
    let imageData = document.getElementById("image").files[0];
    let nameData = document.getElementById("name").value;
    let skuData = document.getElementById("SKU").value;
    let descriptionData = document.getElementById("description").value;
    let valueData = document.getElementById("value").value;
    let idStoreData = this.props.match.params.storeId;
    let url = "http://127.0.0.1:8000/api/producto";
    let data = new FormData();    
    console.log(imageData);
    data.append("SKU", skuData);
    data.append("Nombre", nameData);
    data.append("Descripcion", descriptionData);
    data.append("Valor", valueData);
    data.append("Imagen", imageData);
    data.append("IdTienda", idStoreData);
    fetch(url, {
      method: "POST",
      body: data
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          let { history } = this.props;
          history.push("/products/" + this.props.match.params.storeId);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  render() {
    return (
      <div>
        <h1 className="font-weight-bold">Registro de Producto</h1>
        <div className="card width mb-3 shadow-lg mt-4">
          <div className="row no-gutters">
            <div className="col-md-12">
              <div className="col-md-8 mb-3">
                <div className="card-body">
                  <div className="form-group">
                    <label className="card-text size">Imagén: </label>
                    <input className="form" type="file" id="image" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="card-text size">Nombre: </label>
                  <input className="form-control" type="text" id="name" />
                </div>
                <div className="form-group">
                  <label className="card-text size">SKU: </label>
                  <input
                    className="form-control"
                    type="number"
                    min="0"
                    id="SKU"
                  />
                </div>
                <div className="form-group">
                  <label className="card-text size">Descripcion: </label>
                  <input
                    className="form-control"
                    type="text"
                    id="description"
                  />
                </div>
                <div className="form-group">
                  <label className="card-text size">Valor </label>
                  <input
                    className="form-control"
                    type="number"
                    min="0"
                    id="value"
                  />
                </div>
                <button
                  className="btn btn-success mt-4"
                  onClick={() => this.addProduct()}
                >
                  Agregar
                </button>
                <ButtonCancel/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterStore;
