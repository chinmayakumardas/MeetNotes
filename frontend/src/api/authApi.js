import axios from "axios";

const API_URL = "http://localhost:3000"; // Replace with your db.json server URL.

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};
