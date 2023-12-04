import React from "react";
import CategoriasLog from "../categoriasLog";
import HeaderLog from "../../headerLog/headerLog";
import BtnAdicionar from "../../btnAdicionar/btnAdicionar";
import Btns from "../../btnCrud/btns";


const Lanches = () => {
  
    return (
      <> 
      <HeaderLog/>
      <BtnAdicionar/>  
      <CategoriasLog/>
      <div className="container-lanche">
        <h1>Lanches</h1>
        <div className="card">
          <div className="lanche-txt">
            <h3 id="nome">X-tudo</h3>
            <h4 id="descricao">Pão, Hamburguer, Salada, Bacon e Ovo</h4>
            <h3 id="preco">R$10</h3>
          </div>
        </div>
        <Btns/>
      </div>
      </>
    );
  };

  export default Lanches