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


import React, { useState } from "react";
import HomeLog from "../../pages/homeLog";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../btnAdicionar/btnAdicionar.css";

const BtnDeletar = ({ itemId }) => {
  const nav = useNavigate();

  const handleDeletar = async () => {
    try {
      const response = await fetch(`https://funny-handkerchief-newt.cyclic.app/deletar/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://funny-handkerchief-newt.cyclic.app',
        },
      });

      if (response.ok) {
        toast.success("Item deletado com sucesso!");
        nav("/logado");
      } else {
        toast.error("Não foi possível deletar o item.");
      }
    } catch (error) {
      console.error("Erro ao deletar o item:", error);
      toast.error("Erro ao deletar o item. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      <HomeLog />
      <div className="popup">
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



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../btnAdicionar/btnAdicionar.css";
// import HomeLog from "../../pages/homeLog";

// const BtnDeletar = ({ id }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const nav = useNavigate();

//   const handleDeletar = () => {
//     axios
//       .delete(`https://funny-handkerchief-newt.cyclic.app/deletar/${id}`)
//       .then(() => {
//         console.log("Produto deletado com sucesso!");
//         // Você pode redirecionar para a página desejada após a exclusão
//         nav("/logado");
//       })
//       .catch((error) => {
//         console.error("Erro ao deletar produto:", error);
//       });
//   };

//   return (
//     <>
//       <HomeLog />
//       <div className="popup">
//         <div className="container-add">
//           <h1>Tem certeza?</h1>
//           <div className="btns">
//             <button
//               className="BtnCancelar"
//               onClick={() => nav("/logado")}
//             >
//               Cancelar
//             </button>
//             <button className="BtnDeletar" onClick={handleDeletar}>
//               Deletar
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BtnDeletar;
