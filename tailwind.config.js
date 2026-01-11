/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#46d2c9",
                "accent-orange": "#ff8c42",
                "background-light": "#f6f8f8",
                "background-dark": "#131f1e",
                "dark-slate": "#121717",
                "muted-teal": "#678381"
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"],
                "sans": ["Plus Jakarta Sans", "sans-serif"],
            },
            boxShadow: {
                "ios": "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
            },
            borderRadius: {
                "lg": "1rem",
                "xl": "1.5rem",
            }
        },
    },
    plugins: [],
}
