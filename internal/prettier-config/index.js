const config = require('@vercel/style-guide/prettier');

/** @type {import('prettier').Config} */
module.exports = {
    ...config,
    tabWidth: 4,
    printWidth: 120,
    singleQuote: true,
    overrides: [
        {
            files: '*.{yml,yaml}',
            options: {
                tabWidth: 2,
            },
        },
    ],
    tailwindFunctions: ['cva'],
    plugins: [...config.plugins, 'prettier-plugin-tailwindcss'],
};
