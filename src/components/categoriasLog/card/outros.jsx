import React from "react";
import CategoriasLog from "../categoriasLog";
import HeaderLog from "../../headerLog/headerLog";
import BtnAdicionar from "../../btnAdicionar/btnAdicionar";
import Btns from "../../btnCrud/btns";


const Outros = () => {
  return (
    <>
      <HeaderLog />
      <BtnAdicionar />
      <CategoriasLog />
      <div className="container-lanche">
        <h1>Outros</h1>
        <div className="card">
          <div className="lanche-txt">
            <h3 id="nome">Açaí</h3>
            <h4 id="descricao">
              Acompanhamentos: Banana, Granola, Leite em Pó
            </h4>
            <h3 id="preco">R$15</h3>
          </div>
        </div>
        <Btns/>
      </div>
    </>
  );
};

export default Outros;
