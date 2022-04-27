// No recap da aula 13, fizemos juntos uma requisição do Método POST para uma API que aceita cadastro de usuários. A Url pode ser vista na services.
// substituímos a rota que antes havia, passamos o state value como o objeto com os valores que servirão como nosso body para essa requisição.
// Criamos a função anônima Api para essa requisição e chamamos na function submit a qual passamos pr o atributo onSubmit do nosso form que engloba todos os inputs.
// Além disso, a função submit é chamada no evento de click do Button que possui type submit

import React, { useState } from "react";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import { cadastroUser } from "../../services/Api.js";
import { useNavigate } from "react-router-dom";
// importams o useForm da lib que instalamos
import { useForm } from "react-hook-form";
function Formulario({nome}) {
  const [value, setValue] = useState({});
  // desestruturamos dois de seus componentes para utiliza-los. Essa é sintaxe
  // importamos um outro componente do useForm, o forState que dentro várias propriedades, possui uma validação de errors.
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  // console.log("value", value);
  // passamos um parametro data à função anonima para que esta "entenda" que os valores passados a ela pelo objeto criado pelo forms seja enviado como body da requisição de post.
  const Api = (data) => {
    cadastroUser
      .post("/usuario", data)
      .then((response) => {
        // console.log(response.data);
      })
      .catch((erro) => console.log(erro));
  };
  // console.log(value);
  function submit(e) {
    e.preventDefault();
    Api();
    // utilizando navigate
    navigate("/login");
  }

  function onSubmit(data) {
    console.log(data);
    navigate("/perfil");
  }
  return (
    // Construímos um Componente de Input com tags input/type(text) e label reutilizáveis em qualquer lugar do projeto
    // Aqui temos dois componentes react-bootstrap para estilização em grid: Col (de colunas) e Row de (linhas)
    // Roda o projeto e dá uma olhad em como fica.
    <form
      style={{ display: "flex", flexDirection: "column" }}
      // passamos o handleSubmit do useForm para o atributo onSubmit da tag form para:
      // o handleSubmit monitora todos inputs que estão "abraçados" pela tag form DESDE QUE estes inputs recebam o componente register do useForm e recebam um nome com primeiro parametro. O conjunto desses inputs nos retorna um objeto do jeito: {nome_do_input: value_digitado_no_input}
      // passamos a função anonimica  (que faz a requisição de post) como o argumento do handleSubit. Então, o handleSubmit(que monitora todos os inputs com o register), vai pegar esse objeto de valores gerado e enviar como argumento (lembra do parametro data que criamos ao declarar a function Api()?)
      onSubmit={handleSubmit(Api)}
    >
      <Input
        nome="Nome"
        register={register("nome", { required: true })}
        onChange={handleChange}
      />
      {/* uma lógica que monitora o input pelo nome e declara uma consequência caso a validação passada no register para esse input não seja atendida.
      Nesse caso a validação foi de um required: true para que o campo seja de preenchimento obrigatório. */}
      {errors.nome && <p style={{color: "white"}}>Este campo é obrigatório!</p> }
      <Input
        nome="Apelido"
        onChange={handleChange}
        // Para cada input passamos uma props register (declarada no componente Input.jsx), que está esperando receber um objeto. O componente register do useForm aceita como primeiro parametro o nome que atribuímos ao input e aceita objetos com os atributos que ele suporta. Confere aqui : https://react-hook-form.com/api/useform/register
        // Confere no componente Input.jsx como passamos essa props para que ela seja aceita ao utilizarmos o componente em outro lugar.
        register={register("apelido")}
      />

      <Input
        nome="Email"
        onChange={handleChange}
        register={register("email", { required: true })}
      />

      <Input
        nome="Senha"
        onChange={handleChange}
        type="password"
        register={register("senha", { required: true })}
      />

      <div style={{ margin: "1em 2.5em" }}>
        <Button nome={nome} />
      </div>
    </form>
  );
}

export default Formulario;
