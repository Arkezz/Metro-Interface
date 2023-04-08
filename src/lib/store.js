import { writable } from 'svelte/store';

// Initial Auth Store State
const initialState = {
  isLoggedIn: false,
  user: { username: 'Guest' },
  token: '',
};

export const authStore = writable(initialState);

export const setAuth = (user, token) => {
  authStore.set({
    isLoggedIn: true,
    user,
    token,
  });
};

export const logout = () => {
  authStore.set(initialState);
};
