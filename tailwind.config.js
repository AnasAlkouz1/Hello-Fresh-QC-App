const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(autocomplete|breadcrumbs|button|checkbox|chip|date-picker|dropdown|input|link|modal|navbar|select|ripple|spinner|listbox|divider|popover|scroll-shadow|calendar|date-input|menu).js"
  ],
  theme: {
  },
blocklist:["container"],
  plugins: [nextui()],
};
