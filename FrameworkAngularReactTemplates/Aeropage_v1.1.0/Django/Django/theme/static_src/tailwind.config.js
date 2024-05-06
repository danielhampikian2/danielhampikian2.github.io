/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */
const colors = require("tailwindcss/colors");
const { createThemes } = require("tw-colors");

module.exports = {
    content: [
        "node_modules/preline/dist/*.js",
        '../templates/**/*.html',
    ],
    darkMode: ["class"],
    theme: {
        container: {
            center: true,
            padding: {
              DEFAULT: "1rem",
              sm: "2rem",
              lg: "4rem",
              xl: "5rem",
              "2xl": "6rem",
            },
        },

        fontFamily: {
        body: ["REM", "sans-serif"],
        },

        extend: {
            colors: {
              primary: {
                ...colors.orange,
                DEFAULT: colors.orange["600"],
              },
            },

            zIndex: {
                60: "60",
                70: "70",
            },
        },
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require("preline/plugin"),
        createThemes(
            {
              light: {
                default: colors.zinc,
              },

              dark: {
                default: {
                  50: "#09090b",
                  100: "#18181b",
                  200: "#27272a",
                  300: "#3f3f46",
                  400: "#52525b",
                  500: "#71717a",
                  600: "#a1a1aa",
                  700: "#d4d4d8",
                  800: "#e4e4e7",
                  900: "#f4f4f5",
                  950: "#fafafa",
                },
              },
            },
            {
              defaultTheme: "light",
            },
          ),
    ],
}