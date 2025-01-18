import TripDetailsCollapsible from "../Collapsible/TripDetailsCollapsible";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./TripDetailsDeparture.css";

function TripDetailsDeparture({ className }) {
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
      subtitleComponent={<time className="trip-details-departure__date" dateTime="2018-08-30">30.08.2018</time>}
      title="Туда"
    >
      <div className="trip-details-departure__train-number">
        <p className="trip-details-departure__label">№ Поезда</p>
        <p className="trip-details-departure__value">116С</p>
      </div>
      <div className="trip-details-departure__train-name">
        <p className="trip-details-departure__label">Название</p>
        <p className="trip-details-departure__value">
          Адлер
          <br />
          Санкт-Петербург
        </p>
      </div>
      <div className="trip-details-departure__duration">
        <p className="trip-details-departure__duration-value">9 : 42</p>
      </div>
      <div className="trip-details-departure__times">
        <time className="trip-details-departure__time-from" dateTime="00:10">00:10</time>
        <time className="trip-details-departure__time-to" dateTime="09:52">09:52</time>
      </div>
      <div className="trip-details-departure__dates">
        <time className="trip-details-departure__date-from" dateTime="2018-08-30">30.08.2018</time>
        <time className="trip-details-departure__date-to" dateTime="2018-08-31">31.08.2018</time>
      </div>
      <div className="trip-details-departure__cities">
        <p className="trip-details-departure__city-from">Москва</p>
        <p className="trip-details-departure__city-to">Санкт-Петербург</p>
      </div>
      <div className="trip-details-departure__railway-stations">
        <p className="trip-details-departure__railway-station-from">Курский вокзал</p>
        <p className="trip-details-departure__railway-station-to">Ладожский вокзал</p>
      </div>
    </TripDetailsCollapsible>
  );
}

TripDetailsDeparture.propTypes = { className: classNameType };

export default TripDetailsDeparture;
