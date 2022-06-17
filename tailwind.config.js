module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#885af8",
      secondary: "#6529f6",
      white: "#ffffff",
      gray: {
        dark: "#333333",
        light: "#cccccc",
      },
      red: "#ff6666",
      green: "#2ac940",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      sm: ["0.75rem", "1.8"],
      base: ["1rem", "1.8"],
      lg: ["1.5rem", "1.4"],
      xl: ["2rem", "1.4"],
      xxl: ["3rem", "1.4"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    letterSpacing: {
      base: "0",
    },
    spacing: {
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1.5rem",
      lg: "3rem",
      xl: "6rem",
    },
    borderRadius: {
      base: "0.5rem",
      lg: "2rem",
      full: "100rem",
    },
    boxShadow: {
      base: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },
    maxWidth: {
      none: "none",
      sm: "20rem",
      md: "25rem",
      lg: "30rem",
      full: "100%",
    },
    extend: {},
  },
  plugins: [],
};
