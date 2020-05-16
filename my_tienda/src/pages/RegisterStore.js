import React from "react";
//Componentes
import ButtonStore from "../components/global/ButtonStore";
import Store from "../components/global/Store";

function RegisterStore() {
  return (
    <div>
      <h1 className="font-weight-bold">Tiendas</h1>
      <div className="row">
        <div className="col-md-10"><Store /></div>
        <div className="col-md-2"><ButtonStore /></div>
      </div>
    </div>
  );
}
export default RegisterStore;
