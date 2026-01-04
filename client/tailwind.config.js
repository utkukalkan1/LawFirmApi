/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'law-blue': '#3b4b61', // Menüdeki o özel lacivert
                'law-text': '#333333', // Yazýlar için koyu gri
            },
            fontFamily: {
                'serif': ['"Times New Roman"', 'Times', 'serif'], // Ciddi baþlýklar için
                'sans': ['Arial', 'Helvetica', 'sans-serif']       // Menü için
            }
        },
    },
    plugins: [],
}