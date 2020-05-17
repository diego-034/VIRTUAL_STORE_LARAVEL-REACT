import React, { Component } from "react";
import "./css/ButtonStore.css";
import { withRouter } from "react-router-dom";


class ButtonCancelProduct extends Component {
  activateRoute(){
    let { history } = this.props;
    history.push("/products/"+this.props.match.params.storeId);
  }
  render(){
    return (
       <button className="btn btn-danger mt-4 ml-3" onClick={()=>this.activateRoute()}>Cancelar</button>
    );
  }
}

export default withRouter(ButtonCancelProduct);
