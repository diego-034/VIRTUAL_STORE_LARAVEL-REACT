import React from "react";
//Componentes
import ButtonStore from "../components/global/ButtonStore";
import Store from "../components/global/Store";
import ButtonLogs from "../components/global/ButtonLogs";

function Home(option = null) {
  return (
    <div>
      <h1 className="font-weight-bold">Tiendas</h1>
      <div className="row">
        <div className="col-md-10"><Store /></div>
        <div className="col-md-2">
          <ButtonStore />
          <ButtonLogs/>
          </div>

      </div>
    </div>
  );
}
export default Home;
