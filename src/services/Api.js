import axios from "axios";

export const api = axios.create({
    baseURL: "https://vila-api.herokuapp.com"
})

export const drinksURl = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
})

export const drinksPorId = axios.create({
    baseURL: `https://www.thecocktaildb.com/api/json/v1/1`
})

export const cadastroUser = axios.create({
    baseURL: `https://api-loja-t11.herokuapp.com`
})