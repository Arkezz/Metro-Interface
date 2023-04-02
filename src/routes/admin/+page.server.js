import { viewAllStations, createStation, updateStation } from "$lib/api.js";

export const load = () => {
  const stations = viewAllStations();
  return {
    stations,
  };
};

export const actions = {
  create: async ({ request, cookies }) => {
    const data = Object.fromEntries(await request.formData());
    const { name, line_id } = data;
    const token = cookies.get("session");

    try {
      const result = await createStation(token, name, line_id);

      return {
        result,
      };
    } catch (error) {
      console.log(error);
    }
  },

  update: async ({ request, cookies }) => {
    const data = Object.fromEntries(await request.formData());
    const { name, line_id, id } = data;
    const token = cookies.get("authToken");

    try {
      const result = await updateStation(token, id, name, line_id);

      return {
        result,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
