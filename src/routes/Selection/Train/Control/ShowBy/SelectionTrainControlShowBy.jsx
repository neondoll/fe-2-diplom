import { classNameType } from "../../../../../types/base";
import { cn } from "../../../../../lib/utils";
import { useState } from "react";
import "./SelectionTrainControlShowBy.css";

const options = [
  { label: "5", value: "5" },
  { label: "10", value: "10" },
  { label: "20", value: "20" },
];

function SelectionTrainControlShowBy({ className }) {
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className={cn("selection-train-control-show-by", className)}>
      <p className="selection-train-control-show-by__prefix">показывать по:</p>
      <div className="selection-train-control-show-by__radio-group">
        {options.map(option => (
          <div
            className="selection-train-control-show-by__item"
            data-checked={option.value === selected}
            key={option.value}
          >
            <input
              className="selection-train-control-show-by__input"
              id={`selection-train-control-show-by-${option.value}`}
              name="selection-train-control-show-by"
              type="radio"
              value={option.value}
              onChange={handleChange}
            />
            <label
              className="selection-train-control-show-by__label"
              htmlFor={`selection-train-control-show-by-${option.value}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

SelectionTrainControlShowBy.propTypes = { className: classNameType };

export default SelectionTrainControlShowBy;
