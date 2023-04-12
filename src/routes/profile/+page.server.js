import { uploadSeniorRequest } from '$lib/api.js';
import { fail } from '@sveltejs/kit';

import fs from 'fs';
import { promisify } from 'util';
const readFileAsync = promisify(fs.readFile);

export const load = () => {};

export const actions = {
  createRequest: async ({ request, cookies }) => {
    const data = Object.fromEntries(await request.formData());
    console.log(data);
    const { image } = data;
    const token = cookies.get('session');

    try {
      const imageBinary = await readFileAsync(image.path);
      console.log(imageBinary);
      const result = await uploadSeniorRequest(token, image);

      return {
        status: 200,
        body: result.data,
      };
    } catch (error) {
      const message = error.response;
      return fail(401, message);
    }
  },
};
