module.exports = {
  // daisyui: {
  //   styled: true,
  //   themes: false, //主题关闭
  //   base: true,
  //   utils: true,
  //   logs: true,
  //   rtl: false,
  //   prefix: "",
  //   darkTheme: "dark",
  // },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3c067b",
        secondry: "#4d505e ",
      },
    },
  },
  plugins: [
    require("daisyui"), //daisyui插件
    // ...
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
