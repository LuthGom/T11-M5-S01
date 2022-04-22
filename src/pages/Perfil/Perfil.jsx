import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { cadastroUser } from "../../services/Api.js";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Container } from "./PerfilStyled";
function Perfil() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    cadastroUser.get("/usuarios/" + id).then((response) => {
      const dados = response.data;
      console.log(dados);
      setUsuario(dados.usuario.usuario[0]);
    });
  }, [id]);

  function handleUpdate() {
    cadastroUser
      .patch("/usuario/" + usuario.email, usuario)
      .then((response) => {
        console.log(response.data);
      });

    // Chamando o método reload do javascript só pra recarregar a página depois de atualizado
    document.location.reload();
  }
  function handleDelete() {
    cadastroUser.delete("/usuario/" + usuario.email);
    navigate("/");
  }
  function handleOnChange(e) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }
  return (
    <Container>
      <div className="containerSecundario">
        <h1>Olá, {usuario.apelido}</h1>
        <Input name="nome" value={usuario.nome} onChange={handleOnChange} />
        <Input
          name="apelido"
          value={usuario.apelido}
          onChange={handleOnChange}
        />
        <Input name="email" value={usuario.email} onChange={handleOnChange} />
        <Input
          name="senha"
          type="password"
          value={usuario.senha}
          onChange={handleOnChange}
        />
        <div className="divButtons">
          <Button nome="Atualizar Dados" click={handleUpdate} />
          <Button nome="Deletar conta" click={() => handleDelete()} />
        </div>
      </div>
    </Container>
  );
}

export default Perfil;
