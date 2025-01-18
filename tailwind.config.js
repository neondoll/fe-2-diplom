/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      gap: {
        4.5: "1.125rem", /* 18px */
        6.5: "1.625rem", /* 26px */
        21: "5.25rem", /* 84px */
        29: "7.25rem", /* 116px */
      },
      height: {
        4.5: "1.125rem", /* 18px */
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      margin: {
        4.5: "1.125rem", /* 18px */
        5.5: "1.375rem", /* 22px */
        7.5: "1.875rem", /* 30px */
        24.5: "6.125rem", /* 98px */
        31: "7.75rem", /* 124px */
        35: "8.75rem", /* 140px */
        35.5: "8.875rem", /* 142px */
      },
      opacity: { 44: "0.44" },
      padding: {
        5.5: "1.375rem", /* 22px */
        7.5: "1.875rem", /* 30px */
        8.5: "2.125rem", /* 34px */
        9.5: "2.375rem", /* 38px */
        11.5: "2.875rem", /* 46px */
        15.5: "3.875rem", /* 62px */
        18: "4.5rem", /* 72px */
        24.5: "6.125rem", /* 98px */
        45: "11.25rem", /* 180px */
      },
      size: {
        4.5: "1.125rem", /* 18px */
      },
      space: {
        11.5: "2.875rem", /* 46px */
      },
      width: {
        21: "5.25rem", /* 84px */
      },
    },
    screens: {},
  },
  plugins: [],
};
