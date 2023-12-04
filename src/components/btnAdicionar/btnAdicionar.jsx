import React, { useState } from "react";
import plus from "../../assets/icons/plus.png";
import { ToastContainer, toast } from 'react-toastify';
import "./btnAdicionar.css";

function BtnAdicionar() {
  const [openModal, setOpenModal] = useState(false);

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  function handleSalvar() {
    // Verifica se todos os campos estão preenchidos
    if (nome === "" || valor === "" || descricao === "") {
      // Mostra uma mensagem de erro
      toast.warning("Preencha todos os campos!");
      return;
    }
  
    // Verifica se o valor é um número
    if (isNaN(parseFloat(valor))) {
      toast.warning("O campo 'Valor' deve ser um número!");
      return;
    }
  
    // Cria um objeto com os dados do formulário
    const dados = {
      nome: nome,
      valor: parseFloat(valor), // Converte o valor para um número
      descricao: descricao,
      categoria: categoria,
    };
  
    // Envia os dados para a API
    fetch("https://funny-handkerchief-newt.cyclic.app/criar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro ao salvar o item");
        }
        return resposta.json();
      })
      .then((dados) => {
        // Faz alguma coisa com os dados retornados da API
        toast.success("Item salvo com sucesso!");
      })
      .catch((erro) => {
        console.error(erro);
        toast.error("Erro ao salvar o item. Tente novamente mais tarde.");
      });
  }

  

  return (
    <>
      <div className="container-botao">
        <button className="botao-add" onClick={() => setOpenModal(true)}>
          <img src={plus} alt="plus" className="plus" />
          <span className="botao-txt">Adicionar Item</span>
        </button>
      </div>
      {openModal && (
        <>
          <div className="popup">
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
          />
            <div className="container-add">
              <div className="top">
                <h1>Novo item</h1>
                <button
                  onClick={() => setOpenModal(false)}
                  className="add-sair">
                  ✕
                </button>
              </div>
              <div className="add-form">
                <div className="form-item">
                  <h3>Nome do Item:</h3>
                  <input type="text" placeholder="Ex: X-Tudo" 
                  onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className="form-item">
                  <h3>Valor:</h3>
                  <input type="text" placeholder="R$" 
                  onChange={(e) => setValor(e.target.value)}/>
                </div>
                <div className="form-item">
                  <h3>Descrição:</h3>
                  <input
                    type="text"
                    className="descricao"
                    placeholder="Ex: Pão, Hamburguer, etc."
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </div>
                <div className="form-item">
                  <h3>Categoria: </h3>
                  <select
                    name={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className="categoria"
                  >
                    <option value="lanches">Lanches</option>
                    <option value="salgados">Salgados</option>
                    <option value="bebidas">Bebidas</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>
              <div className="botoes-add">
                {/* retornando um array com as opcoes (nome, valor, descricao e categoria) */}
                {/* <button onClick={() => {console.log([nome, valor, descricao, categoria])}}>Salvar</button> */}
                <button onClick={() => handleSalvar()}>Salvar</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default BtnAdicionar;
