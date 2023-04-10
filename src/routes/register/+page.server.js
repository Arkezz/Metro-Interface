import { registerUser } from '$lib/api.js';
import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { email, password, username } = data;
    try {
      await registerUser(email, password, username);

      const message = `Registered successfully!`;
      return {
        toast: message,
      };
    } catch (error) {
      const message = error.response.data;
      return fail(401, message);
    }
  },
};
