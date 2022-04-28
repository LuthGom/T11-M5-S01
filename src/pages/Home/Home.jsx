import { useEffect, useState } from "react";
import Cartao from "../../components/Cartão/Cartao.jsx";
import { drinksURl } from "../../services/Api.js";
import { Container } from "./HomeStyled.jsx";
import { useUsuarioLogado } from "../../hooks/UseUsuarioLogado.jsx";

function Home() {
  const [values, setValues] = useState([]);
  // importamos nosso hook customizado para ter acesso aos dados do usuário que estiver logado
  const { user } = useUsuarioLogado();
  // estamos acessando os dados do nosso usuário gravado no localStorage.
  // const usuarioStorage = JSON.parse(localStorage.getItem("usuario"))
  // console.log(usuarioStorage);
  useEffect(() => {
    drinksURl
      .get("")
      .then((response) => {
        setValues(response.data.drinks);
        // console.log("values", values);
      })
      .catch((erro) => console.log(erro));
  }, [values]);

  return (
    <Container>
      {/* criamos uma lógica para aparecer um cumprimento na Home.jsx apenas e tiver um usuário logado. */}
      <h1
        style={{ display: user.apelido !== undefined && ("block" || "none") }}
      >
        Olá, <span style={{ color: "white" }}>{user.apelido}</span>. Seja
        bem-vindo!
      </h1>
      {values.map((drink) => {
        // console.log("contato", contato);
        return (
          <Cartao
            key={drink.idDrink}
            name={drink.strDrink}
            img={drink.strDrinkThumb}
            id={drink.idDrink}
          />
        );
      })}
    </Container>
  );
}

export default Home;
