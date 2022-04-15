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
import Input from "../../components/Input/Input";
import { api } from "../../services/Api";
import Button from "../../components/Button/Button.jsx";
export default function Visualizar() {
  const [fada, setFada] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    api
      .get(`/fairies/${id}`)
      .then((response) => {
        setFada(response.data);
      })
      .catch((erro) => console.log(erro));
  }, []);
  console.log("fada", fada);
  function handleOnChange(e) {
    setFada({ ...fada, [e.target.name]: e.target.value });
  }

  function handleUpdate() {
    api.put("/fairies/" + id, fada);
    alert("Atualizado com sucesso")
    navigate("/")
    
  }

  return (
    <div
      style={{
        width: "250px",
        height: "250px",
        border: "1px solid black",
        borderRadius: "10px",
        margin: "1em",
        padding: "1em",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input value={fada.name} onChange={handleOnChange} name="name" />
      <Input value={fada.element} onChange={handleOnChange} name="element" />
      <Input
        value={fada.health_point}
        onChange={handleOnChange}
        name="health_point"
      />
      <Button nome="Atualizar" click={handleUpdate} />
    </div>
  );
}
