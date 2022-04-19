import styled from "styled-components";

export const Container = styled.div`
  
  border: 1px solid black;
  margin: 1em;
  padding: 1em;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  img{
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
  }
`;
