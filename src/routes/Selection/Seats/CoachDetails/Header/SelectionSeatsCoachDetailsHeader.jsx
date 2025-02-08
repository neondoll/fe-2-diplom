import PropTypes from "prop-types";
import { classNameType } from "../../../../../types/base";
import { cn } from "../../../../../lib/utils";
import { coachIdType, coachNameType } from "../../../../../types/coach";
import { useEffect, useState } from "react";
import "./SelectionSeatsCoachDetailsHeader.css";

function SelectionSeatsCoachDetailsHeader({ className, coaches, onChange, value }) {
  const [coachId, setCoachId] = useState();

  useEffect(() => {
    if (coaches && coaches.map(coach => coach._id).includes(value)) {
      setCoachId(value);
    }
  }, [coaches, value]);

  const handleClick = (event) => {
    const { value } = event.target.closest(".selection-seats-coach-details-header__item").dataset;

    setCoachId(value);
    onChange(value);
  };

  return (
    <div className={cn("selection-seats-coach-details-header", className)}>
      <p className="selection-seats-coach-details-header__title">Вагоны</p>
      <div className="selection-seats-coach-details-header__list">
        {coaches.map(coach => (
          <button
            className="selection-seats-coach-details-header__item"
            data-active={coach._id === coachId}
            data-value={coach._id}
            key={coach._id}
            onClick={handleClick}
          >
            {coach.name}
          </button>
        ))}
      </div>
      <p className="selection-seats-coach-details-header__description">Нумерация вагонов начинается с головы поезда</p>
    </div>
  );
}

SelectionSeatsCoachDetailsHeader.propTypes = {
  className: classNameType,
  coaches: PropTypes.arrayOf(PropTypes.shape({ _id: coachIdType, name: coachNameType })),
  onChange: PropTypes.func,
  value: coachIdType,
};

export default SelectionSeatsCoachDetailsHeader;
