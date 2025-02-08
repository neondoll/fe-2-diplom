import PropTypes from "prop-types";

export const coachClassTypeType = PropTypes.oneOf(["first", "second", "third", "fourth"]);
export const coachHaveType = PropTypes.bool;
export const coachIdType = PropTypes.string;
export const coachNameType = PropTypes.string;
export const coachPriceType = PropTypes.number;

const coachSeatsType = PropTypes.arrayOf(PropTypes.shape({
  available: PropTypes.bool,
  index: PropTypes.number,
}));

export const coachType = PropTypes.shape({
  coach: PropTypes.shape({
    _id: coachIdType,
    avaliable_seats: PropTypes.number,
    bottom_price: coachPriceType,
    class_type: coachClassTypeType,
    have_air_conditioning: coachHaveType,
    have_wifi: coachHaveType,
    is_linens_included: coachHaveType,
    linens_price: coachPriceType,
    name: coachNameType,
    price: coachPriceType,
    side_price: coachPriceType,
    top_price: coachPriceType,
    wifi_price: coachPriceType,
  }),
  seats: coachSeatsType,
});
