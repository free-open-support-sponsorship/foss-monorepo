const uiContentPath = require('ui');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', uiContentPath],
    theme: {
        extend: {},
    },
    plugins: [],
};
