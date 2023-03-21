import { writable } from "svelte/store";

// Define a writable store for the user's authentication token
export const authToken = writable("");

// Define a writable store for the user's profile data
export const userProfile = writable({});

// Define a method for updating the authentication token
export const setAuthToken = (token) => {
  authToken.set(token);
};

// Define a method for updating the user's profile data
export const setUserProfile = (profile) => {
  userProfile.set(profile);
};
