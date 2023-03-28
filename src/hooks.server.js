// import { redirect } from "@sveltejs/kit";
// const something = true;
// // hooks.server.js
// export const handle = async ({ event, resolve }) => {
//   const requestedPath = event.url.pathname;
//   const cookies = event.cookies;

//   // Auth check
//   //const isTokenValid = validateTokenFunction(cookies);

//   // Restrict all routes under /admin
//   if (requestedPath.includes("/admin")) {
//     if (something) {
//       throw redirect(303, "/");
//     }
//   }

//   const response = await resolve(event);

//   return response;
// };
