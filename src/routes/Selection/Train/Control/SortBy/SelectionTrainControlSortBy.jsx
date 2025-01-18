import PropTypes from "prop-types";
import { classNameType } from "../../../../../types/base";
import { cn } from "../../../../../lib/utils";
import "./SelectionTrainControlSortBy.css";

const options = [
  { label: "времени", value: "time" },
  { label: "стоимости", value: "cost" },
  { label: "длительности", value: "duration" },
];

function SelectionTrainControlSortBy({ className, optionsClassName }) {
  const handleClickOption = (event) => {
    event.preventDefault();

    const optionsElement = event.target.closest(".selection-train-control-sort-by__options");

    optionsElement.classList.toggle("visible");
  };
  const handleClickTrigger = (event) => {
    event.preventDefault();

    const selectElement = event.target.closest(".selection-train-control-sort-by__select");
    const optionsElement = selectElement.querySelector(".selection-train-control-sort-by__options");

    optionsElement.classList.toggle("visible");
  };

  return (
    <div className={cn("selection-train-control-sort-by", className)}>
      <p className="selection-train-control-sort-by__prefix">сортировать по:</p>
      <div className="selection-train-control-sort-by__select">
        <button className="selection-train-control-sort-by__trigger" onClick={handleClickTrigger}>времени</button>
        <div className={cn("selection-train-control-sort-by__options", optionsClassName)}>
          {options.map(option => (
            <button
              className="selection-train-control-sort-by__option"
              data-value={option.value}
              key={option.value}
              onClick={handleClickOption}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

SelectionTrainControlSortBy.propTypes = {
  className: classNameType,
  optionsClassName: PropTypes.string,
};

export default SelectionTrainControlSortBy;
