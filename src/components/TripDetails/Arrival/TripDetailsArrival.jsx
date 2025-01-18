import TripDetailsCollapsible from "../Collapsible/TripDetailsCollapsible";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./TripDetailsArrival.css";

function TripDetailsArrival({ className }) {
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
      subtitleComponent={<time className="trip-details-arrival__date" dateTime="2018-09-09">09.09.2018</time>}
      title="Обратно"
    >
      <div className="trip-details-arrival__train-number">
        <p className="trip-details-arrival__label">№ Поезда</p>
        <p className="trip-details-arrival__value">116С</p>
      </div>
      <div className="trip-details-arrival__train-name">
        <p className="trip-details-arrival__label">Название</p>
        <p className="trip-details-arrival__value">
          Адлер
          <br />
          Санкт-Петербург
        </p>
      </div>
      <div className="trip-details-arrival__duration">
        <p className="trip-details-arrival__duration-value">9 : 42</p>
      </div>
      <div className="trip-details-arrival__times">
        <time className="trip-details-arrival__time-from" dateTime="00:10">00:10</time>
        <time className="trip-details-arrival__time-to" dateTime="09:52">09:52</time>
      </div>
      <div className="trip-details-arrival__dates">
        <time className="trip-details-arrival__date-from" dateTime="2018-09-09">09.09.2018</time>
        <time className="trip-details-arrival__date-to" dateTime="2018-09-08">08.09.2018</time>
      </div>
      <div className="trip-details-arrival__cities">
        <p className="trip-details-arrival__city-from">Москва</p>
        <p className="trip-details-arrival__city-to">Санкт-Петербург</p>
      </div>
      <div className="trip-details-arrival__railway-stations">
        <p className="trip-details-arrival__railway-station-from">Курский вокзал</p>
        <p className="trip-details-arrival__railway-station-to">Ладожский вокзал</p>
      </div>
    </TripDetailsCollapsible>
  );
}

TripDetailsArrival.propTypes = { className: classNameType };

export default TripDetailsArrival;
