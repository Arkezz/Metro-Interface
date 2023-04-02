import { sequence } from "@sveltejs/kit/hooks";
const something = true;
// hooks.server.js
const temp = async ({ event, resolve }) => {
  const route = event.url;

  let start = performance.now();
  const response = await resolve(event);
  let end = performance.now();
  let time = end - start;

  if (time > 2000)
    console.log(`Time taken to load ${route} is ${time.toFixed(2)} ms`);

  return response;
};

const auth = async ({ event, resolve }) => {
  const session = event.cookies.get("authToken");
  //const user = await

  event.locals.user = user;
};

const handleError = async ({ error, event }) => {};

//export const handle = sequence(temp, handleError);
