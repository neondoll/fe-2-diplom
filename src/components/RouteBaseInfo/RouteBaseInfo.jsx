import { capitalizeFirstLetter, cn } from "../../lib/utils";
import { classNameType } from "../../types/base";
import { routeDirectionPointCityNameType, routeDirectionTrainNameType } from "../../types/route";
import "./RouteBaseInfo.css";

function RouteBaseInfo({ className, fromCityName, startCityName, toCityName, trainName }) {
  return (
    <div className={cn("route-base-info", className)}>
      <div className="route-base-info__content">
        <p className="route-base-info__train-name">{trainName}</p>
        <div className="route-base-info__cities">
          {startCityName && startCityName !== fromCityName && (
            <p className="route-base-info__city-start">{capitalizeFirstLetter(startCityName)}</p>
          )}
          <p className="route-base-info__city-from">{capitalizeFirstLetter(fromCityName)}</p>
          <p className="route-base-info__city-to">{capitalizeFirstLetter(toCityName)}</p>
        </div>
      </div>
    </div>
  );
}

RouteBaseInfo.propTypes = {
  className: classNameType,
  fromCityName: routeDirectionPointCityNameType.isRequired,
  startCityName: routeDirectionPointCityNameType,
  toCityName: routeDirectionPointCityNameType.isRequired,
  trainName: routeDirectionTrainNameType.isRequired,
};

export default RouteBaseInfo;
