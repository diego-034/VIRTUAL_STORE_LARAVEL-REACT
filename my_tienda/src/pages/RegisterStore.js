import React, { Component } from "react";
import Image from "../components/global/images/store.jpg";
import "../components/global/css/RegisterStore.css";

//Componentes
import ButtonCancel from "../components/global/ButtonCancelStore";

class RegisterStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      date: null,
    };
  }
  addStore() {
    let nameData = document.getElementById("name").value;
    let dateData = document.getElementById("date").value;
    let url = "http://127.0.0.1:8000/api/tienda";
    let data = new FormData();
    data.append("Nombre", nameData);
    data.append("FechaApertura", dateData);
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          let { history } = this.props;
          history.push("/");
        },
        (error) => {
          console.log(error);
        }
      );
  }
  render() {
    return (
      <div>
        <h1 className="font-weight-bold">Registro de Tienda</h1>
        <div className="card width mb-3 shadow-lg mt-4">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Image} className="card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="form-group">
                  <label className="card-text size">Nombre: </label>
                  <input className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label className="card-text size">Fecha de Apertura:</label>
                  <input className="form-control" type="date" id="date" />
                </div>
                <div className="form-group">
                <button
                  className="btn btn-success mt-4"
                  onClick={() => this.addStore()}
                >
                  Agregar
                </button>
                <ButtonCancel/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterStore;
