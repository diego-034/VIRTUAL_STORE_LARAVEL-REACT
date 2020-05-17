import React, { Component } from "react";
import Image from "../components/global/images/logo.svg";
import "../components/global/css/RegisterProduct.css";
//Componentes
const url = "http://127.0.0.1:8000/api/producto";
class RegisterStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      value: null,
      image: null,
      storeId: null,
    };
  }

  componentDidMount() {
    return fetch(url + "/consult/" + this.props.match.params.productId)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            name: result.data.Nombre,
            description: result.data.Descripcion,
            value: result.data.Valor,
            image: result.data.Imagen,
            storeId: result.data.IdTienda
          });
          //document.getElementById("image").value = this.state.image;
          document.getElementById("name").value = this.state.name;
          document.getElementById("description").value = this.state.description;
          document.getElementById("value").value = this.state.value;

          console.log(this.state);
        },
        (error) => {}
      );
  }
  updateProduct() {
    let imageData = document.getElementById("image").value;
    let nameData = document.getElementById("name").value;
    let descriptionData = document.getElementById("description").value;
    let valueData = document.getElementById("value").value;
    fetch(url+"/"+this.props.match.params.productId, {
        method: "PUT",
        body: JSON.stringify({
          Nombre: nameData,
          Descripcion: descriptionData,
          Valor: valueData,
          Imagen: imageData
        }),
        headers:{
          'Content-Type': 'application/json; charset=UTF-8'
      },
      })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          let { history } = this.props;
          history.push("/products/" + this.state.storeId);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  render() {
    return (
      <div>
        <h1 className="font-weight-bold">Actualizar Producto</h1>
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
                  onClick={() => this.updateProduct()}
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterStore;
