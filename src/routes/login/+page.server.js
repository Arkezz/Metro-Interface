import { loginUser, getUserInfo } from "$lib/api.js";
import { fail } from "@sveltejs/kit";

export const load = () => {};

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const actions = {
  default: async ({ request, cookies }) => {
    const data = Object.fromEntries(await request.formData());
    const { email, password } = data;
    try {
      const token = await loginUser(email, password);
      cookies.set("session", token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      const user = await getUserInfo(token);

      if (!user) {
      }

      await sleep(2000);

      const message = `Logged in successfully! Welcome ${user.username}`;
      return {
        token: token,
        user: user,
        toast: message,
      };
    } catch (error) {
      console.log(error.response.data);
    }
  },
};