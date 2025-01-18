import TripDetailsArrival from "./Arrival/TripDetailsArrival";
import TripDetailsDeparture from "./Departure/TripDetailsDeparture";
import TripDetailsPassengers from "./Passengers/TripDetailsPassengers";
import { classNameType } from "../../types/base";
import { cn, formatPrice } from "../../lib/utils";
import "./TripDetails.css";

function TripDetails({ className }) {
  return (
    <div className={cn("trip-details", className)}>
      <h2 className="trip-details__title">Детали поездки</h2>
      <TripDetailsDeparture className="trip-details__departure" />
      <TripDetailsArrival className="trip-details__arrival" />
      <TripDetailsPassengers className="trip-details__passengers" />
      <div className="trip-details__result">
        <p className="trip-details__label">Итог</p>
        <p className="trip-details__value">{formatPrice(7760)}</p>
      </div>
    </div>
  );
}

TripDetails.propTypes = { className: classNameType };

export default TripDetails;
