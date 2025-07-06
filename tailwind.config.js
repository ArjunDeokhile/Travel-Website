// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vscode: '#252526', // custom color
      },
    },
  },
  plugins: [],
};
