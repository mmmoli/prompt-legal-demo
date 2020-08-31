const customForms = require('@tailwindcss/custom-forms');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFDD79',
          default: '#FFC001',
          dark: '#DBA60A'
        }
      }
    }
  },
  plugins: [customForms]
};
