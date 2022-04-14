import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/Api";
export default function Visualizar() {
  const [contato, setContato] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    api
      .get(`/contacts/${id}`)
      .then((response) => {
        setContato(response.data);
      })
      .catch((erro) => console.log(erro));
  }, []);
  console.log(contato);
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
      <h1>{contato.name}</h1>
      <h2>{contato.email}</h2>
      <h3>{contato.phone}</h3>
    </div>
  );
}
