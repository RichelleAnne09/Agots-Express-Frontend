import axios from "axios";

export const userAPI = axios.create({
  baseURL: "http://localhost:5000/admin",
  headers: { "Content-Type": "application/json" },
});

export const loginUser = (data) => userAPI.post("/login", data);
export const registerUser = (data) => userAPI.post("/register", data);
export const fetchUsers = () => userAPI.get("/all");
