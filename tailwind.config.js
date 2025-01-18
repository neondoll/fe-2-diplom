/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: { "caret-blink": "caret-blink 1.25s ease-out infinite" },
      borderRadius: {
        3: "0.1875rem", /* 3px */
        5: "0.3125rem", /* 5px */
      },
      colors: {
        "chrome-yellow": "rgb(255 168 0)", // ΔE - 0.36 (#FFA800)
        "dark-charcoal": "rgb(41 41 41)", // ΔE - 3.19 (#292929)
        "maximum-yellow-red": "rgb(255 202 98)", // ΔE - 3.96 (#FFCA62)
        "raisin-black": "rgb(45 43 47)", // ΔE - 3.22 (#2D2B2F)
        "silver": "rgb(196 196 196)", // ΔE - 1.02 (#C4C4C4)
        "taupe-gray": "rgb(146 143 148)", // ΔE - 3.62 (#928F94)
      },
      gap: {
        4.5: "1.125rem", /* 18px */
        6.5: "1.625rem", /* 26px */
        8.5: "2.125rem", /* 34px */
        21: "5.25rem", /* 84px */
        29: "7.25rem", /* 116px */
        39.5: "9.875rem", /* 158px */
      },
      height: {
        4.5: "1.125rem", /* 18px */
        7.5: "1.875rem", /* 30px */
        12.5: "3.125rem", /* 50px */
        15: "3.75rem", /* 60px */
      },
      keyframes: { "caret-blink": { "0%,70%,100%": { opacity: "1" }, "20%,50%": { opacity: "0" } } },
      margin: {
        4.5: "1.125rem", /* 18px */
        5.5: "1.375rem", /* 22px */
        7.5: "1.875rem", /* 30px */
        18: "4.5rem", /* 72px */
        18.5: "4.625rem", /* 74px */
        23: "5.75rem", /* 92px */
        24.5: "6.125rem", /* 98px */
        29: "7.25rem", /* 116px */
        31: "7.75rem", /* 124px */
        35: "8.75rem", /* 140px */
        35.5: "8.875rem", /* 142px */
      },
      opacity: { 44: "0.44" },
      padding: {
        4.5: "1.125rem", /* 18px */
        5.5: "1.375rem", /* 22px */
        6.5: "1.625rem", /* 26px */
        7.5: "1.875rem", /* 30px */
        8.5: "2.125rem", /* 34px */
        9.5: "2.375rem", /* 38px */
        11.5: "2.875rem", /* 46px */
        12.5: "3.125rem", /* 50px */
        13: "3.25rem", /* 52px */
        14.5: "3.625rem", /* 58px */
        15: "3.75rem", /* 60px */
        15.5: "3.875rem", /* 62px */
        16.5: "4.125rem", /* 66px */
        18: "4.5rem", /* 72px */
        20.5: "5.125rem", /* 82px */
        24.5: "6.125rem", /* 98px */
        27: "6.75rem", /* 108px */
        28.5: "7.125rem", /* 114px */
        29: "7.25rem", /* 116px */
        31: "7.75rem", /* 124px */
        31.5: "7.875rem", /* 126px */
        38: "9.5rem", /* 152px */
        45: "11.25rem", /* 180px */
        102.5: "25.625rem", /* 410px */
      },
      size: {
        4.5: "1.125rem", /* 18px */
        7.5: "1.875rem", /* 30px */
        12.5: "3.125rem", /* 50px */
        15: "3.75rem", /* 60px */
        40.5: "10.125rem", /* 162px */
      },
      space: {
        11.5: "2.875rem", /* 46px */
      },
      width: {
        "21": "5.25rem", /* 84px */
        "42.25": "10.5625rem", /* 169px */
        "80.75": "20.1875rem", /* 323px */
        "81.25": "20.3125rem", /* 325px */
        "1/100": "1%",
      },
    },
    screens: {},
  },
  plugins: [],
};
