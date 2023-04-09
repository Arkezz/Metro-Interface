import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      $components: path.resolve('./src/components'),
    },
    adapter: adapter(),
  },
};

export default config;
