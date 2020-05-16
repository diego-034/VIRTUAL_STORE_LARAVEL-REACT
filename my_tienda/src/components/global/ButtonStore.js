import React, { Component } from "react";
import "./css/ButtonStore.css";
import { withRouter } from "react-router-dom";

class ButtonStore extends Component {
  activateRoute(){
    let { history } = this.props;
    history.push("/registroTienda");
  }
  render(){
    return (
      <div className="Button mt-3">
       <button className="btn btn-primary" onClick={()=> this.activateRoute()}>Agregar Tienda</button>
      </div>
    );
  }
  
}

export default withRouter(ButtonStore);
