import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input/Input";
import { api } from "../../services/Api";
import Button from "../../components/Button/Button.jsx"
export default function Visualizar() {
  const [fada, setFada] = useState({});
  const navigate = useNavigate()
  const { id } = useParams();
  useEffect(() => {
    api
      .get(`/fairies/${id}`)
      .then((response) => {
        setFada(response.data);
      })
      .catch((erro) => console.log(erro));
  }, []);
  console.log(fada);
  function handleOnChange(e) {
    setFada({ ...fada, [e.target.name]: e.target.value });
  }

 function handleUpdate() {
   api.put("/fairies/" + id, fada)
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
      <Input value={fada.name} onChange={handleOnChange} name="name"/>
      <Input value={fada.element} onChange={handleOnChange} name="element"/>
      <Input value={fada.health_point} onChange={handleOnChange} name="health_point" />
      <Button nome="Atualizar" click={handleUpdate}/>
    </div>
  );
}
