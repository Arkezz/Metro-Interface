import { registerUser } from "$lib/api.js";

export const actions = {
  default: async ({ request, cookies }) => {
    const data = Object.fromEntries(await request.formData());
    const { email, password, username } = data;
    try {
      const result = await registerUser(email, password, username);

      const message = `Registered successfully!`;
      return {
        toast: message,
      };
    } catch (error) {
      const message = error.response.data;
      return {
        toast: message,
      };
    }
  },
};
