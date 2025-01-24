import Switch from "../../../Fields/Switch/Switch.jsx";
import { classNameType } from "../../../../types/base.js";
import { cn } from "../../../../lib/utils.js";
import { useState } from "react";
import "./SelectionFilterSwitches.css";

const switches = [
  { text: "Купе", value: "second" },
  { text: "Плацкарт", value: "third" },
  { text: "Сидячий", value: "fourth" },
  { text: "Люкс", value: "first" },
  { text: "Wi-Fi", value: "wifi" },
  { text: "Экспресс", value: "express" },
];

function SelectionFilterSwitches({ className }) {
  const [values, setValues] = useState({
    express: false,
    first: false,
    fourth: false,
    second: true,
    third: false,
    wifi: true,
  });

  const handleChange = (value) => {
    console.log(value);

    setValues(prev => ({ ...prev, ...value }));
  };

  return (
    <div className={cn("selection-filter-switches", className)}>
      <ul className="selection-filter-switches__list">
        {switches.map(item => (
          <li className="selection-filter-switches__item" key={item.value}>
            <label
              className={`selection-filter-switches__label selection-filter-switches__label--${item.value}`}
              htmlFor={item.value}
            >
              {item.text}
            </label>
            <Switch
              className="selection-filter-switches__switch"
              id={item.value}
              onChange={(value) => {
                handleChange({ [item.value]: value });
              }}
              value={values[item.value]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

SelectionFilterSwitches.propTypes = { className: classNameType };

export default SelectionFilterSwitches;
