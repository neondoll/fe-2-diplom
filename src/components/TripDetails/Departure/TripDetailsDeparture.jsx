import TripDetailsCollapsible from "../Collapsible/TripDetailsCollapsible";
import { capitalizeFirstLetter, cn, formatDate } from "../../../lib/utils";
import { classNameType } from "../../../types/base";
import { intervalToDuration } from "date-fns";
import { selectChosenRoute } from "../../../slices/chosenRoute";
import { useSelector } from "react-redux";
import "./TripDetailsDeparture.css";

function TripDetailsDeparture({ className }) {
  const chosenRoute = useSelector(selectChosenRoute);

  if (!chosenRoute.departure_id) {
    return null;
  }

  const itd = intervalToDuration({ start: new Date(0), end: new Date(chosenRoute.departure_duration) });
  const itdDate = new Date(itd.years || 0, itd.months || 0, itd.days || 0, itd.hours || 0, itd.minutes || 0, itd.seconds || 0);

  return (
    <TripDetailsCollapsible
      className={cn("trip-details-departure", className)}
      icon={props => (
        <svg
          width="calc(1em*(32/26))"
          height="1em"
          fill="none"
          viewBox="0 0 32 26"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 0C2.23828 0 0 2.23859 0 5V21C0 23.7614 2.23828 26 5 26H27C29.7617 26 32 23.7614 32 21V5C32 2.23859 29.7617 0 27 0H5ZM17.8369 14.2237V17.3333C19.3447 15.8793 20.8672 14.4108 22.3164 13.0288L20.5342 11.2945C19.6396 10.4247 18.7334 9.54568 17.8223 8.66666V11.949H9.68457V14.2237H17.8369Z"
            fill="currentColor"
          />
        </svg>
      )}
      subtitleComponent={(
        <time
          className="trip-details-departure__date"
          dateTime={formatDate(chosenRoute.departure_from_datetime, "yyyy-MM-dd HH:mm:ss")}
        >
          {formatDate(chosenRoute.departure_from_datetime, "dd.MM.yyyy")}
        </time>
      )}
      title="Туда"
    >
      <div className="trip-details-departure__train-number">
        <p className="trip-details-departure__label">№ Поезда</p>
        <p className="trip-details-departure__value">{chosenRoute.departure_train_name}</p>
      </div>
      <div className="trip-details-departure__train-name">
        <p className="trip-details-departure__label">Название</p>
        <p className="trip-details-departure__value">
          {capitalizeFirstLetter(chosenRoute.departure_from_city_name)}
          <br />
          {capitalizeFirstLetter(chosenRoute.departure_to_city_name)}
        </p>
      </div>
      <div className="trip-details-departure__duration">
        <time className="trip-details-departure__duration-value" dateTime={formatDate(itdDate, "HH:mm:ss")}>
          {formatDate(itdDate, "H : mm")}
        </time>
      </div>
      <div className="trip-details-departure__times">
        <time
          className="trip-details-departure__time-from"
          dateTime={formatDate(chosenRoute.departure_from_datetime, "HH:mm:ss")}
        >
          {formatDate(chosenRoute.departure_from_datetime, "HH:mm")}
        </time>
        <time
          className="trip-details-departure__time-to"
          dateTime={formatDate(chosenRoute.departure_to_datetime, "HH:mm:ss")}
        >
          {formatDate(chosenRoute.departure_to_datetime, "HH:mm")}
        </time>
      </div>
      <div className="trip-details-departure__dates">
        <time
          className="trip-details-departure__date-from"
          dateTime={formatDate(chosenRoute.departure_from_datetime, "yyyy-MM-dd")}
        >
          {formatDate(chosenRoute.departure_from_datetime, "dd.MM.yyyy")}
        </time>
        <time
          className="trip-details-departure__date-to"
          dateTime={formatDate(chosenRoute.departure_to_datetime, "yyyy-MM-dd")}
        >
          {formatDate(chosenRoute.departure_to_datetime, "dd.MM.yyyy")}
        </time>
      </div>
      <div className="trip-details-departure__cities">
        <p className="trip-details-departure__city-from">{capitalizeFirstLetter(chosenRoute.departure_from_city_name)}</p>
        <p className="trip-details-departure__city-to">{capitalizeFirstLetter(chosenRoute.departure_to_city_name)}</p>
      </div>
      <div className="trip-details-departure__railway-stations">
        <p className="trip-details-departure__railway-station-from">{chosenRoute.departure_from_railway_station_name}</p>
        <p className="trip-details-departure__railway-station-to">{chosenRoute.departure_to_railway_station_name}</p>
      </div>
    </TripDetailsCollapsible>
  );
}

TripDetailsDeparture.propTypes = { className: classNameType };

export default TripDetailsDeparture;
