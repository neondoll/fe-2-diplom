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

  const sumSeatPrice = (acc, item) => acc + item.seat_price;

  useEffect(() => {
    setFinalPrice(
      order.departure.seats.reduce(sumSeatPrice, 0)
      + order.arrival.seats.reduce(sumSeatPrice, 0),
    );
  }, [order.arrival.seats, order.departure.seats]);

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
