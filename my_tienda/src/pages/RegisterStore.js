import React, { Component } from "react";
import Image from "../components/global/images/store.jpg";
import "../components/global/css/RegisterStore.css";
//Componentes

class RegisterStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
     name : null,
     date: null
    };
  }
  addStore(){
    let nameData = document.getElementById('name').value;
    let dateData = document.getElementById('date').value;
    if(nameData !== undefined && dateData !==  0){
      this.setState({
        name:nameData,
        date: dateData
      });
      alert(this.state.name+this.state.date);
      document.getElementById('name').value = null;
    document.getElementById('date').value = 0;
    }
    
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
                <input className="form-control" id="name"/>
                </div>
                <div className="form-group">
                <label className="card-text size">Fecha de Apertura:</label>
                <input className="form-control" type="date" id="date"/>
                </div>
                <button className="btn btn-success mt-4" onClick={()=> this.addStore()}>Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterStore;
