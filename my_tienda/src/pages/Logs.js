import React from "react";
//Componentes
import ButtonCancel from "../components/global/ButtonCancelStore";
import Log from "../components/global/Log";

function Logs(option = null) {
  return (
    <div>
      <h1 className="font-weight-bold">Logs</h1>
      <div className="row">
        <div className="col-md-10"><Log /></div>
        <div className="col-md-2"><ButtonCancel /></div>
      </div>
    </div>
  );
}
export default Logs;
