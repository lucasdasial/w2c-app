import axios from "axios";

export const api = axios.create({
  baseURL: "https://frozen-peak-68797.herokuapp.com",
});
