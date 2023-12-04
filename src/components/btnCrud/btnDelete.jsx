// import "../btnAdicionar/btnAdicionar.css";
// import HomeLog from "../../pages/homeLog";
// import { useNavigate } from "react-router-dom";

// const BtnDeletar = () => {

//   const nav = useNavigate()

//   return (
//     <>
//     <HomeLog/>
//       <div className="popup">
//         <div className="container-add">
//           <h1>Tem certeza?</h1>
//           <div className="btns">
//             <button className="BtnCancelar" 
//             onClick={() => nav("/logado")}>Cancelar</button>
//             <button className="BtnDeletar">Deletar</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BtnDeletar;

import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../btnAdicionar/btnAdicionar.css";

const BtnDeletar = ({ productId }) => {
  const nav = useNavigate();

  const handleDeletar = () => {
    // Envia a solicitação para deletar o produto pelo ID
    fetch(`https://funny-handkerchief-newt.cyclic.app/deletar/${productId}`, {
      method: "DELETE",
    })
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro ao deletar o item");
        }
        return resposta.json();
      })
      .then(() => {
        // Faz alguma coisa após o sucesso da deleção
        toast.success("Item deletado com sucesso!");
        nav("/logado"); // Navega de volta para a página logado após a deleção
      })
      .catch((erro) => {
        console.error(erro);
        toast.error("Erro ao deletar o item. Tente novamente mais tarde.");
      });
  };

  return (
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
          <h1>Tem certeza?</h1>
          <div className="btns">
            <button className="BtnCancelar" onClick={() => nav("/logado")}>
              Cancelar
            </button>
            <button className="BtnDeletar" onClick={handleDeletar}>
              Deletar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtnDeletar;
