import React, {useState} from "react";
import CategoriasLog from "../categoriasLog";
import HeaderLog from "../../headerLog/headerLog";
import BtnAdicionar from "../../btnAdicionar/btnAdicionar";
import Btns from "../../btnCrud/btns";


const Salgado = () => {
  
    return (
      <> 
      <HeaderLog/>
      <BtnAdicionar/>  
      <CategoriasLog/>
      <div className="container-lanche">
      <h1>Salgados</h1>
      <div className="card">
        <div className="lanche-txt">
          <h3 id="nome">Coxinha</h3>
          <h4 id="descricao">Frango e Catupiry</h4>
          <h3 id="preco">R$5</h3>
        </div>
      </div>
      <Btns/>
    </div>
    </>
    );
  };

  export default Salgado