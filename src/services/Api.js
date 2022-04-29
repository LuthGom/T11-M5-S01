import axios from "axios";

export const api = axios.create({
    baseURL: "https://vila-api.herokuapp.com"
})

// adaptamos a url de drinks por ingredientes em uma função anônima para que receba um parametro de forma dinâmica.
export const drinksURl = (drink) => axios.create({
    baseURL: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`
})

export const drinksPorId = axios.create({
    baseURL: `https://www.thecocktaildb.com/api/json/v1/1`
})

export const cadastroUser = axios.create({
    baseURL: `https://api-loja-t11.herokuapp.com`
})