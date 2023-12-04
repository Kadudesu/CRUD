import "./categoria.css";
import "./card.css";

import { useState } from "react";

//importando os icones
import iconlanche from "../../assets/icons/icons8-hambúrguer-48.png";
import iconoutros from "../../assets/icons/icons8-mais-64.png";
import iconsalgado from "../../assets/icons/icons8-pão-64.png";
import iconbebidas from "../../assets/icons/icons8-refrigerante-50.png";




function Categorias() {
  const [salgado, setSalgado] = useState(false);
  const [lanche, setLanche] = useState(false);
  const [bebidas, setBebida] = useState(false);
  const [outros, setOutros] = useState(false);

  return (
    <>
      <div className="categoria-container">
        <h1>Categorias:</h1>
        <div className="categoria-itens">
          <button
            className="categoriaBtn"
            onClick={() => {
              setLanche(true)
              setBebida(false)
              setSalgado(false)
              setOutros(false)
            }}
          >
            <img src={iconlanche} alt="lanche" className="icon-categoria" />
            <h4>Lanches</h4>
          </button>
          <button
            className="categoriaBtn"
            onClick={() => {
              setLanche(false)
              setBebida(false)
              setSalgado(true)
              setOutros(false)
            }}          >
            <img src={iconsalgado} alt="lanche" className="icon-categoria" />
            <h4>Salgados</h4>
          </button>
          <button
            className="categoriaBtn"
            onClick={() => {
              setLanche(false)
              setBebida(true)
              setSalgado(false)
              setOutros(false)
            }}          >
            <img src={iconbebidas} alt="lanche" className="icon-categoria" />
            <h4>Bebidas</h4>
          </button>
          <button
            className="categoriaBtn"
            onClick={() => {
              setLanche(false)
              setBebida(false)
              setSalgado(false)
              setOutros(true)
            }}          >
            <img src={iconoutros} alt="lanche" className="icon-categoria" />
            <h4>Outros</h4>
          </button>
        </div>
      </div>
      {lanche && 
        <div className="container-lanche">
        <h1>Lanches</h1>
        <div className="card">
          <div className="lanche-txt">
            <h3 id="nome">X-tudo</h3>
            <h4 id="descricao">Pão, Hamburguer, Salada, Bacon e Ovo</h4>
            <h3 id="preco">R$10</h3>
          </div> 
        </div>

        </div>
      }
      {salgado &&
        <div className='container-lanche'>
        <h1>Salgados</h1>
        <div className='card'>
            <div className='lanche-txt'>
                <h3 id='nome'>Coxinha</h3>
                <h4 id='descricao'>Frango e Catupiry</h4>
                <h3 id='preco'>R$5</h3>
            </div>
        </div>
        </div>
      }
      {bebidas &&
        <div className='container-lanche'>
        <h1>Bebidas</h1>
        <div className='card'>
            <div className='lanche-txt'>
                <h3 id='nome'>Refrigerantes</h3>
                <h4 id='descricao'>Coca Cola, Guaraná, Pepsi</h4>
                <h3 id='preco'>R$5</h3>
            </div>
        </div>
        </div>
      }
      {outros &&
        <div className='container-lanche'>
        <h1>Outros</h1>
        <div className='card'>
            <div className='lanche-txt'>
                <h3 id='nome'>Açaí</h3>
                <h4 id='descricao'>Acompanhamentos: Banana, Granola, Leite em Pó</h4>
                <h3 id='preco'>R$15</h3>
            </div>
        </div>
        </div>
      }
    </>

  );
}




export default Categorias;