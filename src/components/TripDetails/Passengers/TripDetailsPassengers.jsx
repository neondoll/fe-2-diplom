import TripDetailsCollapsible from "../Collapsible/TripDetailsCollapsible";
import { classNameType } from "../../../types/base";
import { cn, formatPrice } from "../../../lib/utils";
import { selectOrder } from "../../../slices/order";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./TripDetailsPassengers.css";

function TripDetailsPassengers({ className }) {
  const order = useSelector(selectOrder);
  const [numberAdults, setNumberAdults] = useState(0);
  const [numberChildren, setNumberChildren] = useState(0);
  const [priceAdults, setPriceAdults] = useState(0);
  const [priceChildren, setPriceChildren] = useState(0);

  const isAdult = item => !item.is_child;
  const isChild = item => item.is_child;
  const sumSeatPrice = (acc, item) => acc + item.seat_price;

  useEffect(() => {
    setNumberAdults(
      order.departure.seats.filter(isAdult).length
      + order.arrival.seats.filter(isAdult).length,
    );
    setNumberChildren(
      order.departure.seats.filter(isChild).length
      + order.arrival.seats.filter(isChild).length,
    );
    setPriceAdults(
      order.departure.seats.filter(isAdult).reduce(sumSeatPrice, 0)
      + order.arrival.seats.filter(isAdult).reduce(sumSeatPrice, 0),
    );
    setPriceChildren(
      order.departure.seats.filter(isChild).reduce(sumSeatPrice, 0)
      + order.arrival.seats.filter(isChild).reduce(sumSeatPrice, 0),
    );
  }, [order.arrival.seats, order.departure.seats]);

  return (
    <TripDetailsCollapsible
      className={cn("trip-details-passengers", className)}
      icon={props => (
        <svg width="1em" height="1em" fill="none" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M25.9721 26C17.2752 26 8.72031 26 0.165369 26C-0.219806 21.9313 -0.260351 20.3648 3.83467 18.4118C9.91638 15.5229 16.0792 15.5839 22.2014 18.4118C22.9921 18.7779 23.7219 19.2865 24.4111 19.8358C25.5058 20.7106 26.0735 21.8499 25.9924 23.2943C25.9518 24.1487 25.9721 25.0235 25.9721 26Z"
            fill="currentColor"
          />
          <path
            d="M19.4841 6.44946C19.5044 10.0503 16.6054 13.0002 13.0172 13.0206C9.42899 13.0206 6.50977 10.091 6.50977 6.51049C6.50977 2.9503 9.38844 0.0411096 12.9158 0.00042166C16.5243 -0.0402663 19.4638 2.86892 19.4841 6.44946Z"
            fill="currentColor"
          />
        </svg>
      )}
      title="Пассажиры"
    >
      {numberAdults > 0 && (
        <div className="trip-details-passengers__adults">
          <p className="trip-details-passengers__label">{`Взрослые: ${numberAdults}`}</p>
          <p className="trip-details-passengers__value">{formatPrice(priceAdults)}</p>
        </div>
      )}
      {numberChildren > 0 && (
        <div className="trip-details-passengers__children">
          <p className="trip-details-passengers__label">{`Дети: ${numberChildren}`}</p>
          <p className="trip-details-passengers__value">{formatPrice(priceChildren)}</p>
        </div>
      )}
    </TripDetailsCollapsible>
  );
}

TripDetailsPassengers.propTypes = { className: classNameType };

export default TripDetailsPassengers;
