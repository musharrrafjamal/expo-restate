/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Rubik_Bold: ["Rubik_Bold"],
        Rubik_ExtraBold: ["Rubik_ExtraBold"],
        Rubik_Light: ["Rubik_Light"],
        Rubik_Medium: ["Rubik_Medium"],
        Rubik_Regular: ["Rubik_Regular"],
        Rubik_SemiBold: ["Rubik_SemiBold"],
      },
      colors: {
        primary: {
          1: "#00668c",
          2: "#71c4ef",
          3: "#d4eaf7",
        },
        accent: {
          1: "#1d1c1c",
          2: "#3b3c3d",
          3: "#cccbc8",
        },
      },
    },
  },
  plugins: [],
};
