import TripDetailsArrival from "./Arrival/TripDetailsArrival";
import TripDetailsDeparture from "./Departure/TripDetailsDeparture";
import TripDetailsPassengers from "./Passengers/TripDetailsPassengers";
import { classNameType } from "../../types/base";
import { cn, formatPrice } from "../../lib/utils";
import { selectOrder } from "../../slices/order";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./TripDetails.css";

function TripDetails({ className }) {
  const order = useSelector(selectOrder);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    if (order.departure_options) {
      Object.values(order.departure_options).forEach((value) => {
        price += value;
      });
    }

    if (order.departure_seats) {
      order.departure_seats.forEach((seat) => {
        price += seat.price;
      });
    }

    if (order.arrival_options) {
      Object.values(order.arrival_options).forEach((value) => {
        price += value;
      });
    }

    if (order.arrival_seats) {
      order.arrival_seats.forEach((seat) => {
        price += seat.price;
      });
    }

    setFinalPrice(price);
  }, [order.arrival_options, order.arrival_seats, order.departure_options, order.departure_seats]);

  return (
    <div className={cn("trip-details", className)}>
      <h2 className="trip-details__title">Детали поездки</h2>
      <TripDetailsDeparture className="trip-details__departure" />
      <TripDetailsArrival className="trip-details__arrival" />
      <TripDetailsPassengers className="trip-details__passengers" />
      <div className="trip-details__result">
        <p className="trip-details__label">Итог</p>
        <p className="trip-details__value">{formatPrice(finalPrice)}</p>
      </div>
    </div>
  );
}

TripDetails.propTypes = { className: classNameType };

export default TripDetails;
