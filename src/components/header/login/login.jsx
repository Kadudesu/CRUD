import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "a" && password === "a") {
      toast.success("Login bem-sucedido!");
      setUsername("");
      setPassword("");
      onLoginSuccess();
    } else if (username === "" || password === "") {
      toast.warn("Preencha todos os campos!");
    } else {
      toast.error("Dados Incorretos!");
    }
  };

  const nav = useNavigate()

  const onLoginSuccess = () => {
    setTimeout(() => props.setTrigger(false), 1100)
    nav("/logado")
  }

  return props.trigger ? (
    <div className="popup">
      <ToastContainer
        position="top-center"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />

      <div className="container-login">
        <div className="login-top">
          <h1>Login</h1>
          <button
            onClick={() => props.setTrigger(false)}
            className="login-sair"
          >
            ✕
          </button>
        </div>
        <div className="form">
          <div className="usuario">
            <h3>Usuário: </h3>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="input-usuario"
            />
          </div>
          <div className="usuario">
            <h3>Senha:</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="input-senha"
            />
          </div>
        </div>
        <button className="botao" onClick={handleLogin}>
          Entrar
        </button>
        {props.children}
      </div>
    </div>
  ) : null;
};

export default Login;
