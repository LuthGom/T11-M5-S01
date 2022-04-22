import styled from "styled-components";
export const Container = styled.div`
  margin: 1em;
  display: flex;
  justify-content: center;
  p {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-align: center;
    font-size: 14px;
    margin: 0.5em;
  }
  img {
    width: 150px;
    height: 150px;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    margin: 0.5em;
    padding: 0.5em;
    text-decoration: none;
  }
  a:hover {
    color: green;
    background-color: pink;
  }
`;
