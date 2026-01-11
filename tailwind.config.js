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
                "accent-orange": "#ff6b6b", // Updated to match PRD and new mock (#ff6b6b)
                "background-light": "#fcfbf9", // Updated slightly to match new mock
                "background-dark": "#230f0f", // Updated to match new mock
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
                "2xl": "2rem",
                "3xl": "3rem",
            },
            backgroundImage: {
                'select-arrow': "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSTMS75aawir8QQylwBw4dvx9YwbmSufSeiPeZIwXDW3n5ubo9550JBdmni9AfcI5eLRowTCGn7RKp0yvlM5hcO_cpDH2NLPpaTkL8Ru21ffMItGP335O-Yk-AQvtWY-snNDgIJUhut4u7BcIIFgfHL8hHAj2jZsYIoTUohrd7M-GKlw5J09tFU-Bt4MQj3rJ0ygGzfTUsjjqd0mJ8KsBRYE6w9QTwtrexoB0ltQyLdcHleFmXf-3nz292PN8wrSp3iQ17--2XHlC8')",
            }
        },
    },
    plugins: [],
}
