import PropTypes from "prop-types";

export const routeDirectionAvailableSeatsInfoClassType = PropTypes.number;
export const routeDirectionDurationType = PropTypes.number;

const routeDirectionHaveClassType = PropTypes.bool;

export const routeDirectionPointCityNameType = PropTypes.string;
export const routeDirectionPointDatetimeType = PropTypes.number;
export const routeDirectionPointRailwayStationNameType = PropTypes.string;

const routeDirectionPointType = PropTypes.shape({
  city: PropTypes.shape({ name: routeDirectionPointCityNameType }),
  datetime: routeDirectionPointDatetimeType,
  railway_station_name: routeDirectionPointRailwayStationNameType,
});
const routeDirectionPriceType = PropTypes.number;

export const routeDirectionPriceInfoClassType = PropTypes.shape({
  bottom_price: routeDirectionPriceType,
  side_price: routeDirectionPriceType,
  top_price: routeDirectionPriceType,
});
export const routeDirectionTrainNameType = PropTypes.string;

const routeDirectionType = PropTypes.shape({
  _id: PropTypes.string,
  available_seats_info: PropTypes.shape({
    first: routeDirectionAvailableSeatsInfoClassType,
    fourth: routeDirectionAvailableSeatsInfoClassType,
    second: routeDirectionAvailableSeatsInfoClassType,
    third: routeDirectionAvailableSeatsInfoClassType,
  }),
  duration: routeDirectionDurationType,
  from: routeDirectionPointType,
  have_first_class: routeDirectionHaveClassType,
  have_fourth_class: routeDirectionHaveClassType,
  have_second_class: routeDirectionHaveClassType,
  have_third_class: routeDirectionHaveClassType,
  price_info: PropTypes.shape({
    first: routeDirectionPriceInfoClassType,
    fourth: routeDirectionPriceInfoClassType,
    second: routeDirectionPriceInfoClassType,
    third: routeDirectionPriceInfoClassType,
  }),
  to: routeDirectionPointType,
  train: PropTypes.shape({ name: routeDirectionTrainNameType }),
});

export const routeDirectionVariantType = PropTypes.oneOf(["arrival", "departure"]);
export const routeType = PropTypes.shape({ arrival: routeDirectionType, departure: routeDirectionType });
