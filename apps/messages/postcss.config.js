const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer,
  },
};
