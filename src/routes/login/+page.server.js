import { loginUser, getUserInfo } from "$lib/api.js";
import { fail } from "@sveltejs/kit";

export const load = () => {};

export const actions = {
  default: async ({ request, cookies }) => {
    const data = Object.fromEntries(await request.formData());
    const { email, password } = data;
    try {
      const token = await loginUser(email, password);
      const user = await getUserInfo(token);

      if (!user) {
      }

      const message = `Logged in successfully! Welcome ${user.username}`;
      return {
        token: token,
        user: user,
        toast: message,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
