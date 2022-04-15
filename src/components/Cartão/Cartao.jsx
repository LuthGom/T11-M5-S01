import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../services/Api";
import Button from "../Button/Button";
export default function Cartao({ id, name, email, phone, }) {
  const navigate = useNavigate();
  function handleDelete() {
    api.delete("/contacts/" + id);
    navigate("/")
  }
  return (
    <div
      style={{
        width: "250px",
        height: "fit-content",
        border: "1px solid black",
        borderRadius: "10px",
        margin: "1em",
        padding: "1em",
      }}
    >
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{phone}</h3>
      {/* usando Link */}
      <Link to={"/visualizar/" + id} style={{ color: "red" }}>
        Visualizar
      </Link>
      <Button nome="Deletar" click={handleDelete} />
    </div>
  );
}
