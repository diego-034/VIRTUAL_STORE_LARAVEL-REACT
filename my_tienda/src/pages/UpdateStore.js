import React, { Component } from "react";
import Image from "../components/global/images/store.jpg";
import "../components/global/css/RegisterStore.css";
//Componentes
import ButtonCancel from "../components/global/ButtonCancelStore";

const url = "http://127.0.0.1:8000/api/tienda/";
class UpdateStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      date: null,
    };
  }
  
  componentDidMount() {
    return fetch(url+this.props.match.params.storeId)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState(result.data =! null? { name: result.data.Nombre, date: result.data.FechaApertura}: null);
          console.log(this.state);
          document.getElementById("nameUpdate").value=this.state.name;
          document.getElementById("dateUpdate").value=this.state.date;
        },
        (error) => {}
      );
  }
  updateStore() {
    let nameData = document.getElementById("nameUpdate").value;
    let dateData = document.getElementById("dateUpdate").value;
    fetch(url+this.props.match.params.storeId, {
      method: "PUT",
      body: JSON.stringify({
        Nombre: nameData,
        FechaApertura: dateData
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
        <h1 className="font-weight-bold">Actualizar Tienda</h1>
        <div className="card width mb-3 shadow-lg mt-4">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Image} className="card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="form-group">
                  <label className="card-text size">Nombre: </label>
                  <input className="form-control" id="nameUpdate" />
                </div>
                <div className="form-group">
                  <label className="card-text size">Fecha de Apertura:</label>
                  <input className="form-control" type="date" id="dateUpdate" />
                </div>
                
                <button
                  className="btn btn-success mt-4"
                  onClick={() => this.updateStore()}
                >
                  Actualizar
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
export default UpdateStore;
