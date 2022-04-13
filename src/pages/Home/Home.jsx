import { useEffect, useState } from "react";
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
      .catch((erro) => console.log("Tá errado!"));
  }, []);

  return (
    //   Atividade assíncrona da Aula 09
    <div>
      {values.map((item) => {
        return (
          <div key={item.id} style={{border: '1px solid black', width: '300px', padding:'1em', backgroundColor: 'red'}}>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
            <p>{item.phone}</p>)
          </div>
        );
      })}
    </div>
  );
}

export default Home;
