import axios from "axios";

const API_URL = "http://localhost:5000"; // Replace with your backend URL

export const registerUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data.token;
};

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data.token;
};

export const requestPasswordReset = async (email) => {
  const response = await axios.post(`${API_URL}/request-password-reset`, {
    email,
  });
  return response.data.message;
};

export const resetPassword = async (token, password) => {
  const response = await axios.post(`${API_URL}/reset-password`, {
    token,
    password,
  });
  return response.data.message;
};
