import PropTypes from "prop-types";
import TrainDirection from "../../../../components/TrainDirection/TrainDirection";
import TrainShortInfo from "../../../../components/TrainShortInfo/TrainShortInfo";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { formatDuration } from "date-fns";
import { ru } from "date-fns/locale/ru";
import "./SelectionSeatsTrain.css";

function SelectionSeatsTrain({ className, variant }) {
  return (
    <div className={cn("selection-seats-train", className)}>
      <TrainShortInfo
        cityFrom="Москва"
        cityStart="Адлер"
        cityTo="Санкт-Петербург"
        className="selection-seats-train__info"
        name="116С&nbsp;"
      />
      <TrainDirection
        className="selection-seats-train__direction"
        fromCity="Москва"
        fromRailwayStation="Курский вокзал"
        fromTime="00:10"
        toCity="Санкт-Петербург"
        toRailwayStation="Ладожский вокзал"
        toTime="09:52"
        variant={variant}
      />
      <div className="selection-seats-train__duration">
        <time className="selection-seats-train__duration-value" dateTime="9:42">
          {formatDuration({ hours: 9, minutes: 42 }, { delimiter: "\n", locale: ru })}
        </time>
      </div>
    </div>
  );
}

SelectionSeatsTrain.propTypes = {
  className: classNameType,
  variant: PropTypes.oneOf(["arrival", "departure"]).isRequired,
};

export default SelectionSeatsTrain;
