import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'element-dark': 'hsl(209, 23%, 22%)',
        'background-dark': 'hsl(207, 26%, 17%)',
        'text-light': 'hsl(200, 15%, 8%)',
        'input-light': 'hsl(0, 0%, 52%)',
        'background-light': 'hsl(0, 0%, 98%)'
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif']
      }
    }
  },

  plugins: []
} satisfies Config;
