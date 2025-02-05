import PropTypes from "prop-types";
import RouteOptions from "../RouteOptions";
import RouteBaseInfo from "../RouteBaseInfo/RouteBaseInfo";
import RouteDirection from "../RouteDirection/RouteDirection";
import RouteSeatPopover from "./SeatPopover/RouteSeatPopover";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import { routeType } from "../../types/route";
import "./RouteInfo.css";

const routeClasses = [
  { title: "Сидячий", value: "fourth" },
  { title: "Плацкарт", value: "third" },
  { title: "Купе", value: "second" },
  { title: "Люкс", value: "first" },
];

function RouteInfo({ btn, className, item }) {
  return (
    <div className={cn("route-info", className)}>
      <div className="route-info__base">
        <RouteBaseInfo
          className={cn("route-info__base-container", "arrival" in item && "py-14.5")}
          fromCityName={item.departure.from.city.name}
          toCityName={item.departure.to.city.name}
          trainName={item.departure.train.name}
        />
      </div>
      <div className="route-info__directions">
        <div className="route-info__directions-container">
          <RouteDirection
            className="route-info__departure"
            duration={item.departure.duration}
            fromCityName={item.departure.from.city.name}
            fromDatetime={item.departure.from.datetime}
            fromRailwayStationName={item.departure.from.railway_station_name}
            toCityName={item.departure.to.city.name}
            toDatetime={item.departure.to.datetime}
            toRailwayStationName={item.departure.to.railway_station_name}
            variant="departure"
          />
          {Boolean("arrival" in item && item.arrival) && (
            <RouteDirection
              className="route-info__arrival"
              duration={item.arrival.duration}
              fromCityName={item.arrival.from.city.name}
              fromDatetime={item.arrival.from.datetime}
              fromRailwayStationName={item.arrival.from.railway_station_name}
              toCityName={item.arrival.to.city.name}
              toDatetime={item.arrival.to.datetime}
              toRailwayStationName={item.arrival.to.railway_station_name}
              variant="arrival"
            />
          )}
        </div>
      </div>
      <div className="route-info__right">
        <div className="route-info__right-container">
          <div className="route-info__seats">
            {routeClasses.map((routeClass) => {
              if (item.departure[`have_${routeClass.value}_class`]) {
                return (
                  <RouteSeatPopover
                    availableSeatsInfo={item.departure.available_seats_info[routeClass.value]}
                    className="route-info__seat"
                    key={routeClass.value}
                    priceInfo={item.departure.price_info[routeClass.value]}
                    title={routeClass.title}
                  />
                );
              }

              return null;
            })}
          </div>
          <RouteOptions
            className="route-info__options"
            haveWifi={item.departure.have_wifi}
            isExpress={item.departure.is_express}
          />
          {btn}
        </div>
      </div>
    </div>
  );
}

RouteInfo.propTypes = { btn: PropTypes.node, className: classNameType, item: routeType };

export default RouteInfo;
