import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.trakt.tv/",
  headers:{"trakt-api-version":2,"trakt-api-key":"61b7ce0a40c190c286c3cb0eb0b06bbef07ad1602f4ada38676aeaee6dedab06"},
});

export const apiTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
