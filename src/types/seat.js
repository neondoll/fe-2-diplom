import PropTypes from "prop-types";

export const coachClassTypeType = PropTypes.oneOf(["first", "second", "third", "fourth"]);
export const coachIdType = PropTypes.string;
export const coachNameType = PropTypes.string;

const coachPriceType = PropTypes.number;

export const coachSeatsType = PropTypes.arrayOf(PropTypes.shape({
  available: PropTypes.bool,
  index: PropTypes.number,
}));
export const coachType = PropTypes.shape({
  coach: PropTypes.shape({
    _id: coachIdType,
    avaliable_seats: PropTypes.number,
    bottom_price: coachPriceType,
    class_type: coachClassTypeType,
    name: coachNameType,
    price: coachPriceType,
    side_price: coachPriceType,
    top_price: coachPriceType,
  }),
  seats: coachSeatsType,
});
