import PropTypes from "prop-types";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./TrainDirection.css";

function TrainDirection({
  className, duration, fromCity, fromRailwayStation, fromTime, toCity, toRailwayStation, toTime, variant,
}) {
  return (
    <div className={cn("train-direction", className)}>
      <div className="train-direction__from">
        <time className="train-direction__from-time" dateTime={fromTime}>{fromTime}</time>
        <p className="train-direction__from-city">{fromCity}</p>
        <p className="train-direction__from-railway-station">{fromRailwayStation}</p>
      </div>
      <div className="train-direction__duration" data-variant={variant}>
        {duration && (
          <time className="train-direction__duration-value" dateTime={duration}>{duration}</time>
        )}
      </div>
      <div className="train-direction__to">
        <time className="train-direction__to-time" dateTime={toTime}>{toTime}</time>
        <p className="train-direction__to-city">{toCity}</p>
        <p className="train-direction__to-railway-station">{toRailwayStation}</p>
      </div>
    </div>
  );
}

TrainDirection.propTypes = {
  className: classNameType,
  duration: PropTypes.string,
  fromCity: PropTypes.string.isRequired,
  fromRailwayStation: PropTypes.string.isRequired,
  fromTime: PropTypes.string.isRequired,
  toCity: PropTypes.string.isRequired,
  toRailwayStation: PropTypes.string.isRequired,
  toTime: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["arrival", "departure"]).isRequired,
};

export default TrainDirection;
