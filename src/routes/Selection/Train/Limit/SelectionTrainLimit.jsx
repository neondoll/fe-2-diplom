import PropTypes from "prop-types";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useEffect, useState } from "react";
import "./SelectionTrainLimit.css";

const options = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "20", value: 20 },
];

function SelectionTrainLimit({ className, onChange, value }) {
  const [selected, setSelected] = useState(options[0].value);

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  const handleChange = (event) => {
    const value = Number(event.target.value);

    setSelected(value);
    onChange(value);
  };

  return (
    <div className={cn("selection-train-limit", className)}>
      <p className="selection-train-limit__prefix">показывать по:</p>
      <div className="selection-train-limit__radio-group">
        {options.map(option => (
          <div
            className="selection-train-limit__item"
            data-checked={option.value === selected}
            key={option.value}
          >
            <input
              className="selection-train-limit__input"
              id={`selection-train-limit-${option.value}`}
              name="selection-train-limit"
              type="radio"
              value={String(option.value)}
              onChange={handleChange}
            />
            <label
              className="selection-train-limit__label"
              htmlFor={`selection-train-limit-${option.value}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

SelectionTrainLimit.propTypes = {
  className: classNameType,
  onChange: PropTypes.func,
  value: PropTypes.oneOf(options.map(({ value }) => value)),
};

export default SelectionTrainLimit;
