import { useEffect, useState } from "react";
import Cartao from "../../components/Cartão/Cartao.jsx";
import { drinksURl } from "../../services/Api.js";
import { Container } from "./HomeStyled.jsx";
import { useUsuarioLogado } from "../../hooks/UseUsuarioLogado.jsx";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
function Home() {
  const [values, setValues] = useState([]);
  // importamos nosso hook customizado para ter acesso aos dados do usuário que estiver logado
  const { user } = useUsuarioLogado();
  // importamos os componentes do useForm para captar o valor do input e enviá-lo à url da api pra requisição.
  const { register, handleSubmit } = useForm();
  // estamos acessando os dados do nosso usuário gravado no localStorage.
  // const usuarioStorage = JSON.parse(localStorage.getItem("usuario"))
  // console.log(usuarioStorage);
  // console.log("user", user);
  // criamos uma requisição para que na Home sejam trazidos uma lista padrão pelo valor de Gin na url
  useEffect(() => {
    function bebidaPorIngrediente(ingrediente) {
      // implementamos uma pequena lógica para que o Gin seja o padrão caso a string do input retorne vazia.
      drinksURl(ingrediente !== "" ? ingrediente : "Gin")
        .get()
        .then((response) => {
          setValues(response.data.drinks);
          // console.log("values", values);
        })
        .catch((erro) => console.log(erro));
    }
    bebidaPorIngrediente("");
  }, []);

  //  Uma function que passamos como argumento para o handleSubmit do useForm, que pega o valor do input e envia como argumento para o parametro da api. Essa função está atrelada à um evento de click do button
  async function buscaBebidaPorIngrediente(ingrediente) {
    console.log(ingrediente.busca);
    return drinksURl(ingrediente.busca)
      .get()
      .then((response) => {
        setValues(response.data.drinks);
        // console.log("values", values);
      })
      .catch((erro) => console.log(erro));
  }
  return (
    <Container>
      {/* criamos uma lógica para aparecer um cumprimento na Home.jsx apenas e tiver um usuário logado. */}
      <h1
        style={{
          display: (user.apelido !== undefined && "block") || "none",
          color: "green",
        }}
      >
        Olá, <span style={{ color: "pink" }}>{user.apelido}</span>. Escolha sua
        bebida!🍹
      </h1>
      {/* input onde digitamos o novo ingrediente e é monitorado pelo handleSubmit */}
      <Input register={register("busca")} />
      {/* Button que recebe o o handleSubmit e a função buscaBebidaPorIngrediente para complecar a url e fazer a requisição */}
      <Button
        nome="Buscar Bebida"
        click={handleSubmit(buscaBebidaPorIngrediente)}
      />
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
