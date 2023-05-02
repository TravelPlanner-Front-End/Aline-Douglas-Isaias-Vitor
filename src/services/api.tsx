import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-serve-travel-planner.onrender.com/",
  timeout: 8000,
});
