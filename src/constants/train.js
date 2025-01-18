import PropTypes from "prop-types";

export const train = {
  first: [
    { number: "02", seats: { available: [1, 2, 6, 7, 8, 10, 14, 16], price: 4920 } },
    { number: "05", seats: { available: [], price: 0 } },
  ],
  second: [
    {
      number: "07",
      seats: {
        lower: { available: [1, 3, 11, 13, 15, 19, 27, 31], price: 3530 },
        upper: { available: [18, 30, 32], price: 2920 },
      },
    },
    { number: "09", seats: { lower: { available: [], price: 0 }, upper: { available: [], price: 0 } } },
  ],
  third: [
    { number: "10", seats: { lower: { available: [], price: 0 }, upper: { available: [], price: 0 } } },
    {
      number: "12",
      seats: {
        lower: { available: [1, 3, 11, 13, 15, 17, 19, 27, 29, 31, 46], price: 3030 },
        upper: { available: [18, 20, 30, 32, 33, 37, 39, 41, 45, 47], price: 2020 },
      },
    },
    { number: "15", seats: { lower: { available: [], price: 0 }, upper: { available: [], price: 0 } } },
  ],
  fourth: [
    { number: "20", seats: { available: [], price: 0 } },
    { number: "21", seats: { available: [], price: 0 } },
    {
      number: "22",
      seats: {
        available: [1, 2, 3, 4, 9, 11, 12, 13, 14, 15, 19, 20, 27, 28, 31, 32, 33, 34, 35, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 54, 55, 58, 59, 62],
        price: 1920,
      },
    },
    { number: "25", seats: { available: [], price: 0 } },
  ],
};

export const seatType = PropTypes.number;
const seatsType = PropTypes.shape({ available: PropTypes.arrayOf(seatType), price: PropTypes.number });
export const wagonNumber = PropTypes.string;

const firstSeatsType = seatsType;
export const firstWagon = PropTypes.shape({ number: wagonNumber, seats: firstSeatsType });
const firstWagons = PropTypes.arrayOf(firstWagon);

const fourthSeatsType = seatsType;
export const fourthWagon = PropTypes.shape({ number: wagonNumber, seats: fourthSeatsType });
const fourthWagons = PropTypes.arrayOf(fourthWagon);

const secondSeatsType = PropTypes.shape({ upper: seatsType, lower: seatsType });
export const secondWagon = PropTypes.shape({ number: wagonNumber, seats: secondSeatsType });
const secondWagons = PropTypes.arrayOf(secondWagon);

const thirdSeatsType = PropTypes.shape({ upper: seatsType, lower: seatsType });
export const thirdWagon = PropTypes.shape({ number: wagonNumber, seats: thirdSeatsType });
const thirdWagons = PropTypes.arrayOf(thirdWagon);

export const trainType = PropTypes.shape({
  first: firstWagons,
  second: secondWagons,
  third: thirdWagons,
  fourth: fourthWagons,
});
