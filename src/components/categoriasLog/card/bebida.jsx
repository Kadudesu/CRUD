import React from "react";
import editar from "../../../assets/icons/edit.png";
import excluir from "../../../assets/icons/delete.png";
import CategoriasLog from "../categoriasLog";
import HeaderLog from "../../headerLog/headerLog";
import BtnAdicionar from "../../btnAdicionar/btnAdicionar";
import Btns from "../../btnCrud/btns";

const Bebidas = () => {
  return (
    <>
      <HeaderLog />
      <BtnAdicionar />
      <CategoriasLog />
      <div className="container-lanche">
        <h1>Bebidas</h1>
        <div className="card">
          <div className="lanche-txt">
            <h3 id="nome">Refrigerantes</h3>
            <h4 id="descricao">Coca Cola, Guaraná, Pepsi</h4>
            <h3 id="preco">R$5</h3>
          </div>
        </div>
        <Btns/>
      </div>
    </>
  );
};

export default Bebidas;
