import PropTypes from "prop-types";

const chosenSeatsTicketQuantityItemType = PropTypes.number;

export const chosenSeatsTicketQuantityType = PropTypes.shape({
  adults: chosenSeatsTicketQuantityItemType,
  babies: chosenSeatsTicketQuantityItemType,
  children: chosenSeatsTicketQuantityItemType,
});
