import axios from "axios";

const API_URL = "http://localhost:5000"; // Replace with your backend URL

export const registerUser = async (email, password, username) => {
  const response = await axios.post(`${API_URL}/register`, {
    email,
    password,
    username,
  });
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

export const getUserInfo = async (token) => {
  const response = await axios.get(`${API_URL}/user-info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const viewRefundRequests = async () => {
  const response = await axios.get(`${API_URL}/view-refund-requests`);
  return response.data.refundRequests;
};

export const uploadRefundRequest = async (ticketId, reason) => {
  const response = await axios.post(`${API_URL}/upload-refund-request`, {
    ticketId,
    reason,
  });
  return response.data.message;
};

export const approveRefundRequest = async (refundId) => {
  const response = await axios.post(`${API_URL}/approve-refund-request`, {
    refundId,
  });
  return response.data.message;
};
