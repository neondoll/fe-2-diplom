import CoupeIcon from "../../../../icons/CoupeIcon.jsx";
import ExpressIcon from "../../../../icons/ExpressIcon.jsx";
import LuxIcon from "../../../../icons/LuxIcon.jsx";
import ReservedSeatIcon from "../../../../icons/ReservedSeatIcon.jsx";
import SedentaryIcon from "../../../../icons/SedentaryIcon.jsx";
import Switch from "../../../../components/Switch/Switch";
import WiFiIcon from "../../../../icons/WiFiIcon.jsx";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useState } from "react";
import "./SelectionFilterSwitches.css";

const switches = {
  coupe: { icon: CoupeIcon, text: "Купе" },
  reservedSeat: { icon: ReservedSeatIcon, text: "Плацкарт" },
  sedentary: { icon: SedentaryIcon, text: "Сидячий" },
  lux: { icon: LuxIcon, text: "Люкс" },
  wiFi: { icon: WiFiIcon, text: "Wi-Fi" },
  express: { icon: ExpressIcon, text: "Экспресс" },
};

function SelectionFilterSwitches({ className }) {
  const [values, setValues] = useState({
    coupe: true,
    reservedSeat: false,
    sedentary: false,
    lux: false,
    wiFi: true,
    express: false,
  });

  const handleChange = (value) => {
    console.log(value);

    setValues(prev => ({ ...prev, ...value }));
  };

  return (
    <div className={cn("selection-filter-switches", className)}>
      <ul className="selection-filter-switches__list">
        {Object.entries(switches).map(([name, item]) => {
          const Icon = item.icon;

          return (
            <li className="selection-filter-switches__item" key={name}>
              <label className="selection-filter-switches__label" htmlFor={name}>
                <span className="selection-filter-switches__icon">
                  <Icon />
                </span>
                <span className="selection-filter-switches__text">{item.text}</span>
              </label>
              <Switch
                className="selection-filter-switches__switch"
                id={name}
                onChange={(value) => {
                  handleChange({ [name]: value });
                }}
                value={values[name]}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

SelectionFilterSwitches.propTypes = { className: classNameType };

export default SelectionFilterSwitches;
