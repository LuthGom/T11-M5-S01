import { useEffect, useState } from "react";
import Cartao from "../../components/Cartão/Cartao.jsx";
import { api, drinksURl } from "../../services/Api.js";

function Home() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    drinksURl
      .get("")
      .then((response) => {
        setValues(response.data.drinks);
        console.log("values", values);
      })
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
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
    </div>
  );
}

export default Home;
