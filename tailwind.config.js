module.exports = {
  purge: {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    options: {
      safelist: [
        "text-alert-base",
        "text-warning-dark",
        "text-success-base",
        "text-success-light",
        "bg-alert-base",
        "bg-warning-dark",
        "bg-success-base",
        "bg-success-light",
      ],
    },
  },
  theme: {
    colors: {
      transparent: "transparent",

      white: "#FFFFFF",
      black: "#191E33",

      primary: {
        base: "#2270FD",
      },

      neutral: {
        100: "#F3F5F8",
        200: "#E7EBF2",
        400: "#9EA0A3",
        700: "#414246",
        800: "#1A1B1F",
      },

      success: {
        light: "#C3E951",
        base: "#7BE376",
        dark: "#57A554",
      },

      alert: {
        base: "#EA5A54",
        dark: "#AB2A21",
      },

      warning: {
        base: "#AB2A21",
        dark: "#EE9135",
      },
    },

    extend: {
      fontFamily: {
        sans:
          'Inter, Georgia, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },

      boxShadow: {
        default: "0px 0px 4px rgba(54, 44, 73, 0.03)",
        md: "0px 4px 12px rgba(25, 30, 51, 0.06)",
        lg: "0px 0px 12px rgba(54, 44, 73, 0.08)",
      },

      borderRadius: {
        default: "0.5rem",
        lg: "1rem",
      },

      backgroundOpacity: {
        20: "0.2",
      },

      animation: {
        "spinner-dot": "spinner-dot 1.4s infinite ease-in-out both",
      },

      keyframes: {
        "spinner-dot": {
          "0%, 80%, 100%": {
            transform: "scale(0)",
          },
          "40%": {
            transform: "scale(1)",
          },
        },
      },

      spacing: {
        14: "3.5rem",
        55: "13.75rem",
        94: "23.5rem",
      },

      maxHeight: {
        94: "23.5rem",
      },
    },
  },

  variants: [
    "responsive",
    "group-hover",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
    "focus-within",
  ],
};
