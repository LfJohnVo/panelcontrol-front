import axios from "axios";

export const panel_control = axios.create({
  baseURL: import.meta.env.VITE_INDEX_ROUTE_API,
});
