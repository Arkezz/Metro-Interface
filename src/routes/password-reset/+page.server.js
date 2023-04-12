import { resetPassword } from '$lib/api.js';
import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request, cookies }) => {
    const data = Object.fromEntries(await request.formData());
    const { oldPassword, newPassword } = data;
    const token = cookies.get('session');

    try {
      const result = await resetPassword(token, oldPassword, newPassword);

      return {
        result,
      };
    } catch (error) {
      console.log(error);
      return fail(401, error);
    }
  },
};
