import RouteBaseInfo from "../../../../components/RouteBaseInfo/RouteBaseInfo";
import RouteDirection from "../../../../components/RouteDirection/RouteDirection";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { format, formatDuration, intervalToDuration } from "date-fns";
import { routeDirectionVariantType } from "../../../../types/route";
import { ru } from "date-fns/locale/ru";
import { selectChosenRoute } from "../../../../slices/chosenRoute";
import { useSelector } from "react-redux";
import "./SelectionSeatsRoute.css";

function SelectionSeatsRoute({ className, variant }) {
  const chosenRoute = useSelector(selectChosenRoute);

  const itd = intervalToDuration({ start: new Date(0), end: new Date(chosenRoute[variant].duration) });

  return (
    <div className={cn("selection-seats-route", className)}>
      <RouteBaseInfo
        className="selection-seats-route__info"
        fromCityName={chosenRoute[variant].from.city.name}
        toCityName={chosenRoute[variant].to.city.name}
        trainName={chosenRoute[variant].train.name}
      />
      <RouteDirection
        className="selection-seats-route__direction"
        fromCityName={chosenRoute[variant].from.city.name}
        fromDatetime={chosenRoute[variant].from.datetime}
        fromRailwayStationName={chosenRoute[variant].from.railway_station_name}
        toCityName={chosenRoute[variant].to.city.name}
        toDatetime={chosenRoute[variant].to.datetime}
        toRailwayStationName={chosenRoute[variant].to.railway_station_name}
        variant={variant}
      />
      <div className="selection-seats-route__duration">
        <time
          className="selection-seats-route__duration-value"
          dateTime={format(new Date(itd.years || 0, itd.months || 0, itd.days || 0, itd.hours || 0, itd.minutes || 0, itd.seconds || 0), "HH:mm:ss", { locale: ru })}
        >
          {formatDuration(itd, { delimiter: "\n", locale: ru })}
        </time>
      </div>
    </div>
  );
}

SelectionSeatsRoute.propTypes = {
  className: classNameType,
  variant: routeDirectionVariantType.isRequired,
};

export default SelectionSeatsRoute;
