import axios from "axios";
import env from "react-dotenv"

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
