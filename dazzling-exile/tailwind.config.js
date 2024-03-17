import { nextui } from "@nextui-org/theme";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        true: "calc(100vh - 65px)", // 65px is the height of the navbar
        about: "calc(100vh - 134px)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    addVariablesForColors,
    nextui({
      themes: {
        dark: {
          extend: "dark",
          colors: {
            stashtabtext1: "#323232",
            stashtabtext2: "#FAD792",
            background: "#000000",
            foreground: "#ffffff",
            secondary: {
              100: "#EFCCFF",
              200: "#DB99FF",
              300: "#C166FF",
              400: "#A83FFF",
              500: "#7F00FF",
              600: "#6200DB",
              700: "#4900B7",
              800: "#330093",
              900: "#24007A",
              DEFAULT: "#7F00FF",
              foreground: "#ffffff",
            },
            primary: {
              100: "#CCFEFC",
              200: "#9AFCFE",
              300: "#68F0FE",
              400: "#43DEFD",
              500: "#05C2FC",
              600: "#0397D8",
              700: "#0271B5",
              800: "#015192",
              900: "#003A78",
              DEFAULT: "#05C2FC",
              foreground: "#ffffff",
            },
            success: {
              100: "#DEFDE3",
              200: "#BEFBCE",
              300: "#9BF5BC",
              400: "#7FEBB2",
              500: "#56DEA4",
              600: "#3EBE95",
              700: "#2B9F85",
              800: "#1B8073",
              900: "#106A68",
            },
            warning: {
              100: "#FFFCD5",
              200: "#FFF8AB",
              300: "#FFF381",
              400: "#FFEE61",
              500: "#FFE62D",
              600: "#DBC220",
              700: "#B7A016",
              800: "#937F0E",
              900: "#7A6708",
            },
            danger: {
              100: "#FFE3DF",
              200: "#FFC1BF",
              300: "#FF9FA5",
              400: "#FF879A",
              500: "#FF6088",
              600: "#DB467A",
              700: "#B7306C",
              800: "#931E5E",
              900: "#7A1254",
            },
            focus: "#0397D8",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        light: {
          extend: "light",
          colors: {
            stashtabtext1: "#323232",
            stashtabtext2: "#FAD792",
            background: "#ffffff",
            foreground: "#000000",
            secondary: {
              100: "#EFCCFF",
              200: "#DB99FF",
              300: "#C166FF",
              400: "#A83FFF",
              500: "#7F00FF",
              600: "#6200DB",
              700: "#4900B7",
              800: "#330093",
              900: "#24007A",
              DEFAULT: "#7F00FF",
              foreground: "#ffffff",
            },
            primary: {
              100: "#CCFEFC",
              200: "#9AFCFE",
              300: "#68F0FE",
              400: "#43DEFD",
              500: "#05C2FC",
              600: "#0397D8",
              700: "#0271B5",
              800: "#015192",
              900: "#003A78",
              DEFAULT: "#05C2FC",
              foreground: "#ffffff",
            },
            success: {
              100: "#DEFDD9",
              200: "#B7FCB3",
              300: "#8CF890",
              400: "#6EF180",
              500: "#40E867",
              600: "#2EC760",
              700: "#20A759",
              800: "#14864F",
              900: "#0C6F49",
            },
            warning: {
              100: "#FFFCD5",
              200: "#FFF8AB",
              300: "#FFF381",
              400: "#FFEE61",
              500: "#FFE62D",
              600: "#DBC220",
              700: "#B7A016",
              800: "#937F0E",
              900: "#7A6708",
            },
            danger: {
              100: "#FFE3DF",
              200: "#FFC1BF",
              300: "#FF9FA5",
              400: "#FF879A",
              500: "#FF6088",
              600: "#DB467A",
              700: "#B7306C",
              800: "#931E5E",
              900: "#7A1254",
            },
            focus: "#0397D8",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
