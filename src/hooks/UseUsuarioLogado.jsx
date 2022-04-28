import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";


// criamos um hook customizado para que receba toda e qualquer atualização que o usuário que logar na aplicação. Assim, quando precisarmos esse contexto, apenas precisamos importar o useUsuarioLogado();
export function useUsuarioLogado() {
  const contextUsuario = useContext(UsuarioContext);
  return contextUsuario;
}
