import { writable, derived } from "svelte/store";

// Define a writable store for the user's authentication token
export const authToken = writable("");

// Define a writable store for the user's profile data
export const userProfile = writable({ username: "Guest" });

export const isLoggedIn = derived(authToken, ($authToken) => {
  return $authToken !== "";
});

// Define a method for updating the authentication token
export const setAuthToken = (token) => {
  authToken.set(token);
};

// Define a method for updating the user's profile data
export const setUserProfile = (profile) => {
  userProfile.set(profile);
};
