import axios from "axios";
import { authToken } from "./store.js";

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

export const resetPassword = async (token, password, newPassword) => {
  const response = await axios.post(
    `${API_URL}/reset-password`,
    { password, newPassword },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
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

export const purchaseTicket = async (token, routeId, ticketType, amount) => {
  const response = await axios.post(
    `${API_URL}/purchase-ticket`,
    {
      routeId,
      ticketType,
      amount,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.message;
};

export const viewTicketSubscriptions = async (token) => {
  const response = await axios.get(`${API_URL}/ticket-subscriptions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.subscriptions;
};

export const viewUpcomingRides = async (token) => {
  const response = await axios.get(`${API_URL}/upcoming-rides`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.rides;
};

export const viewCompletedRides = async (token) => {
  const response = await axios.get(`${API_URL}/completed-rides`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.rides;
};

export const refundTicket = async (token, ticketId) => {
  const response = await axios.post(
    `${API_URL}/refund-ticket`,
    {
      ticketId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.message;
};

export const checkPricing = async (routeId, ticketType) => {
  const response = await axios.get(`${API_URL}/check-pricing`, {
    params: {
      routeId,
      ticketType,
    },
  });
  return response.data.price;
};

export const viewSeniorRequests = async () => {
  const response = await axios.get(`${API_URL}/view-senior-requests`);
  return response.data.requests;
};

export const uploadSeniorRequest = async (token, name, age) => {
  const response = await axios.post(
    `${API_URL}/upload-senior-request`,
    {
      name,
      age,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.message;
};

export const approveSeniorRequest = async (token, requestId) => {
  const response = await axios.post(
    `${API_URL}/approve-senior-request`,
    {
      requestId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.message;
};

export const viewAllStations = async () => {
  const response = await axios.get(`${API_URL}/view-all-stations`);
  return response.data.stations;
};

export const createStation = async (token, name, location) => {
  const response = await axios.post(
    `${API_URL}/create-station`,
    {
      name,
      location,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.message;
};

export const updateStation = async (token, stationId, name, location) => {
  const response = await axios.put(
    `${API_URL}/update-station/${stationId}`,
    {
      name,
      location,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.message;
};

export const deleteStation = async (token, stationId) => {
  const response = await axios.delete(
    `${API_URL}/delete-station/${stationId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.message;
};
