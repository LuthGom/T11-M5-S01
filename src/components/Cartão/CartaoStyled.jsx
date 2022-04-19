import styled from "styled-components";
export const Container = styled.div`
  width: 250px;
  height: 300px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    font-family: "Courier New", Courier, monospace;
  }
  img {
    width: 150px;
    height: 150px;
  }
  a {
    color: blue;
    margin: 0.5em;
  }
  a:hover{
      color: red;
  }
`;
