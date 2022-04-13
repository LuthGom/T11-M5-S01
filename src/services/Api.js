import axios from "axios";

export const api = axios.create({
    baseURL: "https://vila-api.herokuapp.com"
})

