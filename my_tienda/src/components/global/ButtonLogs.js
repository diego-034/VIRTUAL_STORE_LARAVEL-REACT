import React, { Component } from "react";
import "./css/ButtonStore.css";
import { withRouter } from "react-router-dom";


class ButtonLogs extends Component {
  activateRoute(){
    let { history } = this.props;
    history.push("/logs");
  }
  render(){
    return (
      <div className="Button mt-3">
       <button className="btn btn-secondary" onClick={()=>this.activateRoute()}>Registro Logs</button>
      </div>
    );
  }
}

export default withRouter(ButtonLogs);
