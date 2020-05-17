import React, { Component } from "react";
import Image from "./images/store.jpg";
import "./css/Store.css";
//components
import { withRouter } from "react-router-dom";

const url = "http://127.0.0.1:8000/api/log";

class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
    };
  }
  componentDidMount() {
    return fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ logs: result.data });
          console.log(this.state.store);
        },
        (error) => {}
      );
  }
  render() {
    let data = this.state.logs;
    let logs = null;
    if (data != null) {
      logs = data.map((log) => (
        <tr>
          <th scope="row">{log.logId}</th>
          <td>{log.Nombre}</td>
          <td>{log.created_at}</td>
        </tr>
      ));
    }
    return (
      <div className="col-sm-12">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Petición</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>
          <tbody>{logs}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(Log);
