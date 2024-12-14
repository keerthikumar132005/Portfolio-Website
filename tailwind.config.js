/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary)/<alpha-value>)",
        secondary: "hsl(var(--color-secondary)/<alpha-value>)",
        accent: "hsl(var(--color-accent)/<alpha-value>)",
        text: "hsl(var(--color-text)/<alpha-value>)",
      },
      screens: {
        400: "400px",
        1070: "1070px",
        340: "340px",
      },
    },
  },
  plugins: [],
};
