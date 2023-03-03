const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{vue,tsx,js,ts,html}')],
  theme: {
    extend: {},
  },
  plugins: [],
};
