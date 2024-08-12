import { jwtDecode } from "jwt-decode"; // Correct import statement
import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Adjust URL as needed

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    const { token } = response.data;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "An error occurred");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = decodeToken(token);
    return decodedToken ? { role: decodedToken.role } : null;
  }
  return null;
};

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token");
    return null;
  }
};

export const getUserRole = () => {
  const user = isAuthenticated();
  return user ? user.role : null;
};
