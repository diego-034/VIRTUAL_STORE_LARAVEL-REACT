import React, { Component } from "react";
import "./css/ButtonStore.css";
import { withRouter } from "react-router-dom";


class ButtonCancelStore extends Component {
  activateRoute(){
    let { history } = this.props;
    history.push("/");
  }
  render(){
    return (
       <button className="btn btn-danger mt-4 ml-3" onClick={()=>this.activateRoute()}>Atrás</button>
    );
  }
}

export default withRouter(ButtonCancelStore);
