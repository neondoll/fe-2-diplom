/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "dialog-content-show": "dialog-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "dialog-overlay-show": "dialog-overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      borderRadius: {
        3: "0.1875rem", /* 3px */
        5: "0.3125rem", /* 5px */
      },
      borderWidth: { 3: "3px", 5: "5px" },
      colors: {
        "anti-flash-white": "rgb(244 243 246)", // ΔE - 1.64 (#F4F3F6)
        "cadmium-yellow": "rgb(255 245 0)", // ΔE - 0.27 (#FFF500)
        "chrome-yellow": "rgb(255 168 0)", // ΔE - 0.36 (#FFA800)
        "coquelicot": "rgb(255 61 0)", // ΔE - 0.75 (#FF3D00)
        "dark-charcoal": {
          DEFAULT: "rgb(51 51 51)", // ΔE - 0.00 (#333333)
          3.19: "rgb(41 41 41)", // ΔE - 3.19 (#292929)
        },
        "ghost-white": {
          1.64: "rgb(247 245 249)", // ΔE - 1.64 (#F7F5F9)
          1.94: "rgb(244 242 246)", // ΔE - 1.94 (#F4F2F6)
        },
        "magnolia-white": "rgb(228 224 233)", // ΔE - 4.36 (#E4E0E9)
        "maximum-yellow-red": "rgb(255 202 98)", // ΔE - 3.96 (#FFCA62)
        "navajo-white": {
          3.53: "rgb(252 220 157)", // ΔE - 3.53 (#FCDC9D)
          5.41: "rgb(255 217 143)", // ΔE - 5.41 (#FFD98F)
        },
        "neon-silver": "rgb(204 204 204)", // ΔE - 0.00 (#CCCCCC)
        "platinum": "rgb(230 230 230)", // ΔE - 1.15 (#E6E6E6)
        "raisin-black": "rgb(45 43 47)", // ΔE - 3.22 (#2D2B2F)
        "shadow-gray": "rgb(62 60 65)", // ΔE - 3.80 (#3E3C41)
        "silver": "rgb(196 196 196)", // ΔE - 1.02 (#C4C4C4)
        "spanish-gray": "rgb(153 153 153)", // ΔE - 0.32 (#999999)
        "taupe-gray": {
          3.62: "rgb(146 143 148)", // ΔE - 3.62 (#928F94)
          3.79: "rgb(145 143 148)", // ΔE - 3.79 (#918F94)
        },
        "very-light-green": "rgb(178 246 161)", // ΔE - 3.17 (#B2F6A1)
        "white": {
          DEFAULT: "rgb(255 255 255)", // ΔE - 0.00 (#FFFFFF)
          0.8: "rgb(251 251 251)", // ΔE - 0.80 (#FBFBFB)
        },
        "white-smoke": {
          0.56: "rgb(247 246 246)", // ΔE - 0.56 (#F7F6F6)
          0.62: "rgb(242 242 242)", // ΔE - 0.62 (#F2F2F2)
          0.81: "rgb(249 249 249)", // ΔE - 0.81 (#F9F9F9)
          1.3: "rgb(245 244 246)", // ΔE - 1.30 (#F5F4F6)
        },
        "xanthous": "rgb(253 185 53)", // ΔE - 2.36 (#FDB935)
      },
      gap: {
        4.5: "1.125rem", /* 18px */
        6.5: "1.625rem", /* 26px */
        7.5: "1.875rem", /* 30px */
        8.5: "2.125rem", /* 34px */
        12.5: "3.125rem", /* 50px */
        21: "5.25rem", /* 84px */
        21.5: "5.375rem", /* 86px */
        29: "7.25rem", /* 116px */
        30: "7.5rem", /* 120px */
        39.5: "9.875rem", /* 158px */
      },
      height: {
        4.25: "1.0625rem", /* 17px */
        4.5: "1.125rem", /* 18px */
        4.75: "1.1875rem", /* 19px */
        6.25: "1.5625rem", /* 25px */
        6.75: "1.6875rem", /* 27px */
        7.5: "1.875rem", /* 30px */
        8.5: "2.125rem", /* 34px */
        9.75: "2.4375rem", /* 39px */
        10.75: "2.6875rem", /* 43px */
        12.5: "3.125rem", /* 50px */
        13: "3.25rem", /* 52px */
        15: "3.75rem", /* 60px */
        15.5: "3.875rem", /* 62px */
        16.5: "4.125rem", /* 66px */
        18.75: "4.6875rem", /* 75px */
        24.5: "6.125rem", /* 98px */
        31: "7.75rem", /* 124px */
        193.5: "48.375rem", /* 774px */
      },
      inset: {
        7.5: "1.875rem", /* 30px */
        17: "4.25rem", /* 68px */
        19: "4.75rem", /* 76px */
      },
      keyframes: {
        "caret-blink": { "0%,70%,100%": { opacity: "1" }, "20%,50%": { opacity: "0" } },
        "dialog-content-show": {
          from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        "dialog-overlay-show": { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      margin: {
        4.5: "1.125rem", /* 18px */
        5.5: "1.375rem", /* 22px */
        6.5: "1.625rem", /* 26px */
        7.5: "1.875rem", /* 30px */
        8.5: "2.125rem", /* 34px */
        9.5: "2.375rem", /* 38px */
        11.5: "2.875rem", /* 46px */
        13.5: "3.375rem", /* 54px */
        18: "4.5rem", /* 72px */
        18.5: "4.625rem", /* 74px */
        21: "5.25rem", /* 84px */
        22: "5.5rem", /* 88px */
        23: "5.75rem", /* 92px */
        23.5: "5.875rem", /* 94px */
        24.5: "6.125rem", /* 98px */
        25: "6.25rem", /* 100px */
        29: "7.25rem", /* 116px */
        30: "7.5rem", /* 120px */
        31: "7.75rem", /* 124px */
        35: "8.75rem", /* 140px */
        35.5: "8.875rem", /* 142px */
        37: "9.25rem", /* 148px */
        37.5: "9.375rem", /* 150px */
        39: "9.75rem", /* 156px */
        78: "19.5rem", /* 312px */
        107.5: "26.875rem", /* 430px */
        150: "37.5rem", /* 600px */
      },
      maxWidth: {
        79: "19.75rem", /* 316px */
        150: "37.5rem", /* 600px */
        166.5: "41.625rem", /* 666px */
      },
      minHeight: {
        19.5: "4.875rem", /* 78px */
        26: "6.5rem", /* 104px */
      },
      minWidth: {
        18: "4.5rem", /* 72px */
        51.5: "12.875rem", /* 206px */
      },
      opacity: { 36: "0.36", 38: "0.38", 44: "0.44", 73: "0.73", 76: "0.76", 79: "0.79", 88: "0.88" },
      padding: {
        4.5: "1.125rem", /* 18px */
        5.5: "1.375rem", /* 22px */
        6.5: "1.625rem", /* 26px */
        7.5: "1.875rem", /* 30px */
        8.5: "2.125rem", /* 34px */
        9.5: "2.375rem", /* 38px */
        10.5: "2.625rem", /* 42px */
        11.5: "2.875rem", /* 46px */
        12.5: "3.125rem", /* 50px */
        13: "3.25rem", /* 52px */
        13.5: "3.375rem", /* 54px */
        14.5: "3.625rem", /* 58px */
        15: "3.75rem", /* 60px */
        15.5: "3.875rem", /* 62px */
        16.5: "4.125rem", /* 66px */
        17.5: "4.375rem", /* 70px */
        18: "4.5rem", /* 72px */
        19: "4.75rem", /* 76px */
        19.5: "4.875rem", /* 78px */
        20.5: "5.125rem", /* 82px */
        22.5: "5.625rem", /* 90px */
        23.5: "5.875rem", /* 94px */
        24.5: "6.125rem", /* 98px */
        27: "6.75rem", /* 108px */
        28.5: "7.125rem", /* 114px */
        29: "7.25rem", /* 116px */
        30.5: "7.625rem", /* 122px */
        31: "7.75rem", /* 124px */
        31.5: "7.875rem", /* 126px */
        34: "8.5rem", /* 136px */
        38: "9.5rem", /* 152px */
        45: "11.25rem", /* 180px */
        48.5: "12.125rem", /* 194px */
        51: "12.75rem", /* 204px */
        67.5: "16.875rem", /* 270px */
        102.5: "25.625rem", /* 410px */
        127.5: "31.875rem", /* 510px */
      },
      size: {
        4.5: "1.125rem", /* 18px */
        7.5: "1.875rem", /* 30px */
        12.5: "3.125rem", /* 50px */
        21.5: "5.375rem", /* 86px */
        15: "3.75rem", /* 60px */
        38.75: "9.6875rem", /* 155px */
        40.5: "10.125rem", /* 162px */
      },
      space: {
        4.5: "1.125rem", /* 18px */
        6.5: "1.625rem", /* 26px */
        7.5: "1.875rem", /* 30px */
        11.5: "2.875rem", /* 46px */
        13: "3.25rem", /* 52px */
      },
      width: {
        "5.25": "1.3125rem", /* 21px */
        "6.5": "1.625rem", /* 26px */
        "7.5": "1.875rem", /* 30px */
        "15": "3.75rem", /* 60px */
        "18": "4.5rem", /* 72px */
        "19": "4.75rem", /* 76px */
        "21": "5.25rem", /* 84px */
        "23": "5.75rem", /* 92px */
        "29.5": "7.375rem", /* 118px */
        "32.5": "8.125rem", /* 130px */
        "35.5": "8.875rem", /* 142px */
        "38.5": "9.625rem", /* 154px */
        "41": "10.25rem", /* 164px */
        "42.25": "10.5625rem", /* 169px */
        "45": "11.25rem", /* 180px */
        "49": "12.25rem", /* 196px */
        "51": "12.75rem", /* 204px */
        "51.5": "12.875rem", /* 206px */
        "55.5": "13.875rem", /* 222px */
        "57": "14.25rem", /* 228px */
        "58.5": "14.625rem", /* 234px */
        "59.5": "14.875rem", /* 238px */
        "62.5": "15.625rem", /* 250px */
        "69": "17.25rem", /* 276px */
        "70": "17.5rem", /* 280px */
        "75": "18.75rem", /* 300px */
        "80.75": "20.1875rem", /* 323px */
        "81.25": "20.3125rem", /* 325px */
        "90": "22.5rem", /* 360px */
        "180.5": "45.125rem", /* 722px */
        "1/100": "1%",
      },
      zIndex: { 1: "1", 2: "2" },
    },
    screens: {},
  },
  plugins: [],
};
