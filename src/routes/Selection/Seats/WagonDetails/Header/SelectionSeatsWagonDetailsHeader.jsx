import PropTypes from "prop-types";
import { classNameType } from "../../../../../types/base";
import { cn } from "../../../../../lib/utils";
import { useEffect, useState } from "react";
import { wagonNumber } from "../../../../../constants/train";
import "./SelectionSeatsWagonDetailsHeader.css";

function SelectionSeatsWagonDetailsHeader({ className, onChange, value, wagons }) {
  const [selectedWagon, setSelectedWagon] = useState();

  useEffect(() => {
    if (wagons.includes(value)) {
      setSelectedWagon(value);
    }
  }, [value, wagons]);

  const handleClick = (event) => {
    const { value } = event.target.closest(".selection-seats-wagon-details-header__item").dataset;

    setSelectedWagon(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={cn("selection-seats-wagon-details-header", className)}>
      <p className="selection-seats-wagon-details-header__title">Вагоны</p>
      <div className="selection-seats-wagon-details-header__list">
        {wagons.map(wagon => (
          <button
            className="selection-seats-wagon-details-header__item"
            data-active={wagon === selectedWagon}
            data-value={wagon}
            key={wagon}
            onClick={handleClick}
          >
            {wagon}
          </button>
        ))}
      </div>
      <p className="selection-seats-wagon-details-header__description">Нумерация вагонов начинается с головы поезда</p>
    </div>
  );
}

SelectionSeatsWagonDetailsHeader.propTypes = {
  className: classNameType,
  onChange: PropTypes.func,
  value: wagonNumber,
  wagons: PropTypes.arrayOf(wagonNumber),
};

export default SelectionSeatsWagonDetailsHeader;
