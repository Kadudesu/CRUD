import React, { useState } from "react";

const Form = () => {
  const [nomeItem, setNomeItem] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSave = () => {
    // Envia os dados do formulário para a API
    const dados = {
      nomeItem,
      valor,
      descricao,
      categoria,
    };

    // Faz a requisição HTTP
    fetch("https://funny-handkerchief-newt.cyclic.app/criar", {
      method: "POST",
      body: JSON.stringify(dados),
    })
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados); 
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nome do Item"
        onChange={(e) => setNomeItem(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        onChange={(e) => setValor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoria"
        onChange={(e) => setCategoria(e.target.value)}
      />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default Form;
