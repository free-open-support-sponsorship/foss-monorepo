const path = require('node:path');

module.exports = `${path.join(__dirname, './components')}/*.{js,ts,jsx,tsx,mdx}`;
