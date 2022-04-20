import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { cadastroUser } from "../../services/Api.js";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
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
  }
  function handleDelete() {
    cadastroUser.delete("/" + usuario.email);
    navigate("/");
  }
  function handleOnChange(e) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }
  return (
    <form onSubmit={handleUpdate}>
      <Input name="nome" value={usuario.nome} onChange={handleOnChange} />
      <Input name="apelido" value={usuario.apelido} onChange={handleOnChange} />
      <Input name="email" value={usuario.email} onChange={handleOnChange} />
      <Input
        name="senha"
        type="password"
        value={usuario.senha}
        onChange={handleOnChange}
      />
      <div style={{ display: "flex" }}>
        <Button nome="Atualizar Dados" />
        <Button nome="Deletar conta" onClick={() => handleDelete()} />
      </div>
    </form>
  );
}

export default Perfil;
