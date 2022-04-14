import { useEffect, useState } from "react";
import Cartao from "../../components/Cartão/Cartao.jsx";
import { api } from "../../services/Api.js";
function Home() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    api
      .get("/contacts")
      .then((response) => {
        setValues(response.data);
        console.log("values", values);
      })
      .catch((erro) => console.log(erro));
  }, []);

  return (
    //   Atividade assíncrona da Aula 09
    <div style={{display: 'grid', gridTemplateColumns: "repeat(3, 1fr)"}}>
      {values.map((contato) => {
        console.log("contato", contato);
        return (
          <Cartao key={contato.id} name={contato.name} email={contato.email} phone={contato.phone} id={contato.id}/>
        )
      })}
    </div>
  );
}

export default Home;
