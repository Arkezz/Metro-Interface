import { viewAllStations } from "$lib/api.js";

export const load = () => {
  const stations = viewAllStations();
  return {
    stations,
  };
};
