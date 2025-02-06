import PropTypes from "prop-types";
import { coachIdType, coachPriceType } from "./coach";

// export const orderCoachClassTypeType = coachClassTypeType;
export const orderCoachIdType = coachIdType;
const orderOptionType = PropTypes.number;
export const orderOptionsType = PropTypes.shape({ linens: orderOptionType, wifi: orderOptionType });
export const orderSeatIndexType = PropTypes.number;
export const orderSeatsType = PropTypes.arrayOf(PropTypes.shape({ index: orderSeatIndexType, price: coachPriceType }));
// const orderTicketQuantityItemType = PropTypes.number;
// const orderTicketQuantityType = PropTypes.shape({
//   adults: orderTicketQuantityItemType,
//   babies: orderTicketQuantityItemType,
//   children: orderTicketQuantityItemType,
// });
// const orderType = PropTypes.shape({
//   arrival_coach_class_type: orderCoachClassTypeType,
//   arrival_coach_id: orderCoachIdType,
//   arrival_options: orderOptionsType,
//   arrival_seats: orderSeatsType,
//   arrival_ticket_quantity: orderTicketQuantityType,
//   departure_coach_class_type: orderCoachClassTypeType,
//   departure_coach_id: orderCoachIdType,
//   departure_options: orderOptionsType,
//   departure_seats: orderSeatsType,
//   departure_ticket_quantity: orderTicketQuantityType,
// });
