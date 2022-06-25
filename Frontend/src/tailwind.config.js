module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    darkMode: false,
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}