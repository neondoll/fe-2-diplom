import TripDetailsCollapsible from "../Collapsible/TripDetailsCollapsible";
import { capitalizeFirstLetter, cn, formatDate } from "../../../lib/utils";
import { classNameType } from "../../../types/base";
import { intervalToDuration } from "date-fns";
import { selectChosenRoute } from "../../../slices/chosenRoute";
import { useSelector } from "react-redux";
import "./TripDetailsArrival.css";

function TripDetailsArrival({ className }) {
  const chosenRoute = useSelector(selectChosenRoute);

  if (!chosenRoute.arrival) {
    return null;
  }

  const itd = intervalToDuration({ start: new Date(0), end: new Date(chosenRoute.arrival.duration) });
  const itdDate = new Date(itd.years || 0, itd.months || 0, itd.days || 0, itd.hours || 0, itd.minutes || 0, itd.seconds || 0);

  return (
    <TripDetailsCollapsible
      className={cn("trip-details-arrival", className)}
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
            d="M27 0C29.7617 0 32 2.23859 32 5V21C32 23.7614 29.7617 26 27 26H5C2.23828 26 0 23.7614 0 21V5C0 2.23859 2.23828 0 5 0H27ZM14.1631 14.2237V17.3333L14.084 17.2577C12.6025 15.8284 11.1074 14.3869 9.68359 13.0288L9.8125 12.9044C11.2354 11.5182 12.6992 10.0924 14.1777 8.66666V11.949H22.3154V14.2237H14.1631Z"
            fill="currentColor"
          />
        </svg>
      )}
      subtitleComponent={(
        <time
          className="trip-details-arrival__date"
          dateTime={formatDate(chosenRoute.arrival.from.datetime, "yyyy-MM-dd HH:mm:ss")}
        >
          {formatDate(chosenRoute.arrival.from.datetime, "dd.MM.yyyy")}
        </time>
      )}
      title="Обратно"
    >
      <div className="trip-details-arrival__train-number">
        <p className="trip-details-arrival__label">№ Поезда</p>
        <p className="trip-details-arrival__value">{chosenRoute.arrival.train.name}</p>
      </div>
      <div className="trip-details-arrival__train-name">
        <p className="trip-details-arrival__label">Название</p>
        <p className="trip-details-arrival__value">
          {capitalizeFirstLetter(chosenRoute.arrival.from.city.name)}
          <br />
          {capitalizeFirstLetter(chosenRoute.arrival.to.city.name)}
        </p>
      </div>
      <div className="trip-details-arrival__duration">
        <time className="trip-details-arrival__duration-value" dateTime={formatDate(itdDate, "HH:mm:ss")}>
          {formatDate(itdDate, "H : mm")}
        </time>
      </div>
      <div className="trip-details-arrival__times">
        <time
          className="trip-details-arrival__time-from"
          dateTime={formatDate(chosenRoute.arrival.from.datetime, "HH:mm:ss")}
        >
          {formatDate(chosenRoute.arrival.from.datetime, "HH:mm")}
        </time>
        <time
          className="trip-details-arrival__time-to"
          dateTime={formatDate(chosenRoute.arrival.to.datetime, "HH:mm:ss")}
        >
          {formatDate(chosenRoute.arrival.to.datetime, "HH:mm")}
        </time>
      </div>
      <div className="trip-details-arrival__dates">
        <time
          className="trip-details-arrival__date-from"
          dateTime={formatDate(chosenRoute.arrival.from.datetime, "yyyy-MM-dd")}
        >
          {formatDate(chosenRoute.arrival.from.datetime, "dd.MM.yyyy")}
        </time>
        <time
          className="trip-details-arrival__date-to"
          dateTime={formatDate(chosenRoute.arrival.to.datetime, "yyyy-MM-dd")}
        >
          {formatDate(chosenRoute.arrival.to.datetime, "dd.MM.yyyy")}
        </time>
      </div>
      <div className="trip-details-arrival__cities">
        <p className="trip-details-arrival__city-from">{capitalizeFirstLetter(chosenRoute.arrival.from.city.name)}</p>
        <p className="trip-details-arrival__city-to">{capitalizeFirstLetter(chosenRoute.arrival.to.city.name)}</p>
      </div>
      <div className="trip-details-arrival__railway-stations">
        <p className="trip-details-arrival__railway-station-from">{chosenRoute.arrival.from.railway_station_name}</p>
        <p className="trip-details-arrival__railway-station-to">{chosenRoute.arrival.to.railway_station_name}</p>
      </div>
    </TripDetailsCollapsible>
  );
}

TripDetailsArrival.propTypes = { className: classNameType };

export default TripDetailsArrival;
