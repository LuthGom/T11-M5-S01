// 1. Página que retorna os dados de um item vindo da API quando clicamos em visualizar, na HOME.
// 2. Os dados vem com uma requisição é feita pelo GET com parametro :id, que é passado como props desde o componente <Cartão />, para a Home que recebe essa informação da API e, quando clicado em visualizar, o componente <Visualizar /> consegue captar esse id utilizando o Hook do router useParams.(linha 20)
//3. Para conseguirmos atualizar os dados, fizemos:
// - Colocamos componentes <Input /> na página Visualizar para receber os dados, para que esses possam ser editados.(linhas 51,55,60)
// - Passamos os values do state fada para esses Input's, de acordo como é vindo do objeto retornado pela API: fada.name, fada.element, fada.health_point. (Os chamados inputs controlados)(state na linha 18)(value passados dinamicamente nas linhas 52,56,61)
// - Para que esses input se tornem editáveis (não-controlados), fizemos uma função handleOnChange(linha 26) e passamos para cada props de onClick de cada Input. Essa funçã compara o nome do nosso objeto retorno no State com o nome de cada Input, quando reconhecido, ele permite alteração e quando não reconhecido, o input continua sendo não-editável.
// (sugestão: tentem observar o console log do objeto se o nome do input for diferente do nome do objeto. O que acontece?)
// 4. Por fim, criamos uma função chamada handleUpdate(linha 32) com o método PUT, que faz uma requisição de atualização dos nossos dados vindo da API, que recebe dois parametros: o endpoint da rota e os dados que estamos enviando para serem alterados. Temos um botão de nome "Atualizar" que recebe no atributo de evento onClick essa função e a nossa requisição é realizada somente quando essa requisição é feita. E ainda dentro dessa função handleAtualizar temos um navigate(hook do router) que nos leva à Home. (Coloquei um alert extra como mensagem para avisar que atualizou antes da Home)

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { drinksPorId } from "../../services/Api";
import { Container } from "./VisualizarStyled";
export default function Visualizar() {
  const [drink, setDrink] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    drinksPorId
    .get(`/lookup.php?i=${id}`)
      .then((response) => {
        setDrink(response.data.drinks[0]);
        console.log("data", response.data.drinks[0]);
      })
      .catch((erro) => console.log(erro));
  }, []);
  // function handleOnChange(e) {
  //   setFada({ ...drink, [e.target.name]: e.target.value });
  // }
  // function de update comentada por trocamos a API
  // function handleUpdate() {
  //   api.put("/fairies/" + id, drink);
  //   alert("Atualizado com sucesso");
  //   navigate("/");
  // }

  return (
  //   {/* <Input value={fada.name} onChange={handleOnChange} name="name" />
  //   <Input value={fada.element} onChange={handleOnChange} name="element" />
  //   <Input
  //   value={fada.health_point}
  //   onChange={handleOnChange}
  //   name="health_point"
  //   />
  // <Button nome="Atualizar" click={handleUpdate} /> */}
  
  //Um componente styled criadoem arquivo para estilizar todo o componente e, fazendo uma requisição get/:id para trazer o item quando clicado no botão de visualizar na página home, redirecionando para este componente.
  <Container>
      <h1>
        <span style={{ color: "red" }}>Drink: </span> {drink.strDrink}
      </h1>
      <img src={drink.strDrinkThumb} alt="" />
      <p>
        <strong>Instructions: </strong> {drink.strInstructions}
      </p>
    </Container>
  );
}
