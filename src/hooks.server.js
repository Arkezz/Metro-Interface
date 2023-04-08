import { sequence } from '@sveltejs/kit/hooks';
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

const handleSession = async ({ event, resolve }) => {
  const session = event.cookies.get('session');

  if (session) {
    event.locals.session = session;
  }

  return resolve(event);
};

const handleError = async (options) => {
  console.log(options);
};

export const handle = sequence(temp, handleSession);
