import React, { Component } from "react";
import Image from "./images/store.jpg";
import "./css/Store.css";
//components
import Product from "./Product";
import { withRouter } from "react-router-dom";

const url = "http://127.0.0.1:8000/api/tienda";



class Store extends Component {

  constructor(props) {
    super(props);
    this.state = {
      store: [],
    };
  }
  activateRoute(){
    let {history}= this.props;
    history.push("/products");
  }
  componentDidMount() {
    return fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ store: result.data.stores });
          console.log(this.state.store);
        },
        (error) => {}
      );
  }
  render() {
    let data = this.state.store;
    let stores = data.map((store) => (
      <div className="card  mb-3 shadow-lg">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={Image} className="card-img" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Codigo: {store.ID}</h5>
              <p className="card-text">Nombre: {store.Nombre}</p>
              <p className="card-text">
                <small className="text-muted">
                  Fecha de Apertura: {store.FechaApertura}
                </small>
              </p>
              <button className="btn btn-danger">Eliminar</button>
              <button className="btn btn-primary ml-2">Editar</button>
              <button className="btn btn-success ml-2" onClick={()=>this.activateRoute()}>Ver</button>
            </div>
          </div>
        </div>
      </div>
    ));
    return <div className="Store">{stores}</div>;
  }
}

export default withRouter(Store);
