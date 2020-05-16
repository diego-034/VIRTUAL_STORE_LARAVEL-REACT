import React, { Component } from "react";
import "./css/ButtonStore.css";
import { withRouter } from "react-router-dom";


class ButtonProduct extends Component {
  activateRoute(){
    let { history } = this.props;
    history.push("/registroProducto/"+this.props.match.params.storeId);
  }
  render(){
    return (
      <div className="Button mt-3">
       <button className="btn btn-primary" onClick={()=>this.activateRoute()}>Agregar Producto</button>
      </div>
    );
  }
}

export default withRouter(ButtonProduct);
