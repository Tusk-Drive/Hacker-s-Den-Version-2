import adapterStatic from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapterStatic(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/svelte-hacker-blog' : ''
    }
  }
};

export default config;
