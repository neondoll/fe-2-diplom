import { capitalizeFirstLetter, cn } from "../../lib/utils";
import { classNameType } from "../../types/base";
import { format } from "date-fns";
import {
  routeDirectionDurationType, routeDirectionPointCityNameType, routeDirectionPointDatetimeType,
  routeDirectionPointRailwayStationNameType, routeDirectionVariantType,
} from "../../types/route";
import { ru } from "date-fns/locale/ru";
import "./RouteDirection.css";

function RouteDirection({
  className, duration, fromCityName, fromDatetime, fromRailwayStationName, toCityName, toDatetime, toRailwayStationName,
  variant,
}) {
  return (
    <div className={cn("route-direction", className)}>
      <div className="route-direction__from">
        <time
          className="route-direction__from-datetime"
          dateTime={format(fromDatetime, "yyyy-MM-dd HH:mm:ss", { locale: ru })}
        >
          {format(fromDatetime, "HH:mm", { locale: ru })}
        </time>
        <p className="route-direction__from-city">{capitalizeFirstLetter(fromCityName)}</p>
        <p className="route-direction__from-railway-station">{fromRailwayStationName}</p>
      </div>
      <div className="route-direction__duration" data-variant={variant}>
        {duration && (
          <time
            className="route-direction__duration-value"
            dateTime={format(duration, "yyyy-MM-dd HH:mm:ss", { locale: ru })}
          >
            {format(duration, "H : mm", { locale: ru })}
          </time>
        )}
      </div>
      <div className="route-direction__to">
        <time
          className="route-direction__to-datetime"
          dateTime={format(toDatetime, "yyyy-MM-dd HH:mm:ss", { locale: ru })}
        >
          {format(toDatetime, "HH:mm", { locale: ru })}
        </time>
        <p className="route-direction__to-city">{capitalizeFirstLetter(toCityName)}</p>
        <p className="route-direction__to-railway-station">{toRailwayStationName}</p>
      </div>
    </div>
  );
}

RouteDirection.propTypes = {
  className: classNameType,
  duration: routeDirectionDurationType,
  fromCityName: routeDirectionPointCityNameType.isRequired,
  fromDatetime: routeDirectionPointDatetimeType.isRequired,
  fromRailwayStationName: routeDirectionPointRailwayStationNameType.isRequired,
  toCityName: routeDirectionPointCityNameType.isRequired,
  toDatetime: routeDirectionPointDatetimeType.isRequired,
  toRailwayStationName: routeDirectionPointRailwayStationNameType.isRequired,
  variant: routeDirectionVariantType.isRequired,
};

export default RouteDirection;
