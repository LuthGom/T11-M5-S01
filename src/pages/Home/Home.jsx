import { useEffect, useState } from "react";
import Cartao from "../../components/Cartão/Cartao.jsx";
import { drinksURl } from "../../services/Api.js";
import { Container } from "./HomeStyled.jsx";
function Home() {
  const [values, setValues] = useState([]);
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
