import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { cadastroUser } from "../../services/Api.js";
import { useUsuarioLogado } from "../../hooks/UseUsuarioLogado";

function Login() {
  const [value, setValue] = useState({});
  const navigate = useNavigate();
  // importamos o hook useUsuarioLogado() para utilizar o setUser e atualizar o state do user, declarados no App.jsx
  const { setUser } = useUsuarioLogado();
  function handleOnChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function login(e) {
    e.preventDefault();
    cadastroUser.post("/usuario/login", value).then((response) => {
      setUser(response.data.usuario);
      localStorage.setItem("usuario", JSON.stringify(response.data.usuario));
      console.log(response.data);
      navigate("/perfil/" + response.data.usuario.id);
    });
  }
  // console.log("userContext", user);
  return (
    <form onSubmit={(e) => login(e)}>
      <div className={styles.divForm}>
        <div className={styles.titulo}>
          <h1>Login</h1>
        </div>
        <div className={styles.container}>
          <Input
            placeholder="E-mail"
            height="20px"
            width="250px"
            onChange={handleOnChange}
            name="email"
          />
          <Input
            placeholder="Senha"
            height="20px"
            width="250px"
            type="password"
            name="senha"
            onChange={handleOnChange}
          />
          <div style={{ margin: "0.5em" }}>
            <Button nome="Login" />
          </div>
        </div>
        <div className={styles.linkCadastro}>
          <p>Não tem uma conta ainda? </p>
          <Link to="/cadastro">Clique aqui!</Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
