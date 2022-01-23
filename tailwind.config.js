module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purgeCSS: {
    whitelistPatterns: [/am-.+$/],
    whitelistPatternsChildren: [/am-.+$/],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}