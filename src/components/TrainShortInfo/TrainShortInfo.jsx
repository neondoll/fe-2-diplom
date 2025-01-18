import PropTypes from "prop-types";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./TrainShortInfo.css";

function TrainShortInfo({ cityFrom, cityStart, cityTo, className, name }) {
  return (
    <div className={cn("train-short-info", className)}>
      <div className="train-short-info__content">
        <p className="train-short-info__name">{name}</p>
        <div className="train-short-info__cities">
          {cityStart && cityStart !== cityFrom && (
            <p className="train-short-info__city-start">{cityStart}</p>
          )}
          <p className="train-short-info__city-from">{cityFrom}</p>
          <p className="train-short-info__city-to">{cityTo}</p>
        </div>
      </div>
    </div>
  );
}

TrainShortInfo.propTypes = {
  cityFrom: PropTypes.string.isRequired,
  cityStart: PropTypes.string,
  cityTo: PropTypes.string.isRequired,
  className: classNameType,
  name: PropTypes.string.isRequired,
};

export default TrainShortInfo;
