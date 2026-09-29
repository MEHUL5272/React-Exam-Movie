import axios from "axios";

const API = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: process.env.REACT_APP_OMDB_API_KEY,
  },
});

export default API;