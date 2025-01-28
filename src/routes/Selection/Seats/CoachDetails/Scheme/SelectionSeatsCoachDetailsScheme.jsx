import PropTypes from "prop-types";
import { classNameType } from "../../../../../types/base";
import { cn } from "../../../../../lib/utils";
import { coachType } from "../../../../../types/seat";
import { seatType } from "../../../../../constants/train";
import { useEffect, useState } from "react";
import "./SelectionSeatsCoachDetailsScheme.css";

function SchemeSeatsItem({ isDisabled, isSelected, item, ...props }) {
  return (
    <button
      className="scheme-seats__item"
      data-selected={isSelected(item)}
      disabled={isDisabled(item)}
      {...props}
    >
      {item}
    </button>
  );
}

SchemeSeatsItem.propTypes = {
  isDisabled: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  item: seatType.isRequired,
};

function FirstSchemeSeats({ className, isDisabled, onChange, values }) {
  const placements = Array.from({ length: 8 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled,
    isSelected: item => selectedSeats.includes(item),
    onClick: (event) => {
      const item = Number(event.target.textContent);
      const seats = event.target.dataset.selected === "true"
        ? selectedSeats.filter(selectedSeat => selectedSeat !== item)
        : [...selectedSeats, item];

      setSelectedSeats(seats);

      if (onChange) {
        onChange(seats);
      }
    },
  };
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (values) {
      setSelectedSeats(values);
    }
  }, [values]);

  return (
    <div className={cn("scheme-seats scheme-seats--first", className)}>
      <ul className="scheme-seats__side scheme-seats__side--right">
        {placements.map(index => (
          <li className="scheme-seats__placement" key={index}>
            <div className="scheme-seats__col">
              <SchemeSeatsItem item={index * 2 + 1} {...schemeSeatsItemProps} />
            </div>
            <div className="scheme-seats__col">
              <SchemeSeatsItem item={index * 2 + 2} {...schemeSeatsItemProps} />
            </div>
          </li>
        ))}
      </ul>
      <ul className="scheme-seats__side scheme-seats__side--left">
        {placements.map(index => (
          <li className="scheme-seats__placement" key={index}>
            <div className="scheme-seats__empty" />
          </li>
        ))}
      </ul>
    </div>
  );
}

FirstSchemeSeats.propTypes = {
  className: classNameType,
  isDisabled: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(seatType),
};

function SecondSchemeSeats({ className, isDisabled, onChange, values }) {
  const placements = Array.from({ length: 8 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled,
    isSelected: item => selectedSeats.includes(item),
    onClick: (event) => {
      const item = Number(event.target.textContent);
      const seats = event.target.dataset.selected === "true"
        ? selectedSeats.filter(selectedSeat => selectedSeat !== item)
        : [...selectedSeats, item];

      setSelectedSeats(seats);

      if (onChange) {
        onChange(seats);
      }
    },
  };
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (values) {
      setSelectedSeats(values);
    }
  }, [values]);

  return (
    <div className={cn("scheme-seats scheme-seats--second", className)}>
      <ul className="scheme-seats__side scheme-seats__side--right">
        {placements.map(index => (
          <li className="scheme-seats__placement" key={index}>
            <div className="scheme-seats__col">
              <SchemeSeatsItem item={index * 4 + 2} {...schemeSeatsItemProps} />
              <SchemeSeatsItem item={index * 4 + 1} {...schemeSeatsItemProps} />
            </div>
            <div className="scheme-seats__col">
              <SchemeSeatsItem item={index * 4 + 4} {...schemeSeatsItemProps} />
              <SchemeSeatsItem item={index * 4 + 3} {...schemeSeatsItemProps} />
            </div>
          </li>
        ))}
      </ul>
      <ul className="scheme-seats__side scheme-seats__side--left">
        {placements.map(index => (
          <li className="scheme-seats__placement" key={index}>
            <div className="scheme-seats__empty" />
          </li>
        ))}
      </ul>
    </div>
  );
}

SecondSchemeSeats.propTypes = {
  className: classNameType,
  isDisabled: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(seatType),
};

function ThirdSchemeSeats({ className, isDisabled, onChange, values }) {
  const placements = Array.from({ length: 8 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled,
    isSelected: item => selectedSeats.includes(item),
    onClick: (event) => {
      const item = Number(event.target.textContent);
      const seats = event.target.dataset.selected === "true"
        ? selectedSeats.filter(selectedSeat => selectedSeat !== item)
        : [...selectedSeats, item];

      setSelectedSeats(seats);

      if (onChange) {
        onChange(seats);
      }
    },
  };
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (values) {
      setSelectedSeats(values);
    }
  }, [values]);

  return (
    <div className={cn("scheme-seats scheme-seats--third", className)}>
      <ul className="scheme-seats__side scheme-seats__side--right">
        {placements.map(index => (
          <li className="scheme-seats__placement" key={index}>
            <div className="scheme-seats__col">
              <SchemeSeatsItem item={index * 4 + 2} {...schemeSeatsItemProps} />
              <SchemeSeatsItem item={index * 4 + 1} {...schemeSeatsItemProps} />
            </div>
            <div className="scheme-seats__col">
              <SchemeSeatsItem item={index * 4 + 4} {...schemeSeatsItemProps} />
              <SchemeSeatsItem item={index * 4 + 3} {...schemeSeatsItemProps} />
            </div>
          </li>
        ))}
      </ul>
      <ul className="scheme-seats__side scheme-seats__side--left">
        {placements.map(index => (
          <li className="scheme-seats__placement" key={index}>
            <SchemeSeatsItem item={index * 2 + 33} {...schemeSeatsItemProps} />
            <SchemeSeatsItem item={index * 2 + 34} {...schemeSeatsItemProps} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ThirdSchemeSeats.propTypes = {
  className: classNameType,
  isDisabled: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(seatType),
};

function FourthSchemeSeats({ className, isDisabled, onChange, values }) {
  const placements = Array.from({ length: 16 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled,
    isSelected: item => selectedSeats.includes(item),
    onClick: (event) => {
      const item = Number(event.target.textContent);
      const seats = event.target.dataset.selected === "true"
        ? selectedSeats.filter(selectedSeat => selectedSeat !== item)
        : [...selectedSeats, item];

      setSelectedSeats(seats);

      if (onChange) {
        onChange(seats);
      }
    },
  };
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (values) {
      setSelectedSeats(values);
    }
  }, [values]);

  return (
    <div className={cn("scheme-seats scheme-seats--fourth", className)}>
      <ul className="scheme-seats__side scheme-seats__side--right">
        {placements.map(index => (
          <li className="scheme-seats__col" key={index}>
            <SchemeSeatsItem item={index * 2 + 2} {...schemeSeatsItemProps} />
            <SchemeSeatsItem item={index * 2 + 1} {...schemeSeatsItemProps} />
          </li>
        ))}
      </ul>
      <ul className="scheme-seats__side scheme-seats__side--left">
        {placements.map((index) => {
          const item32 = index * 2 + 32;
          const item33 = index * 2 + 33;

          return (
            <li className="scheme-seats__col" key={index}>
              {(item32 >= 33 && item32 <= 62) && (<SchemeSeatsItem item={item32} {...schemeSeatsItemProps} />)}
              {(item33 >= 33 && item33 <= 62) && (<SchemeSeatsItem item={item33} {...schemeSeatsItemProps} />)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

FourthSchemeSeats.propTypes = {
  className: classNameType,
  isDisabled: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(seatType),
};

function SelectionSeatsCoachDetailsScheme({ className, coach, onChange, values }) {
  const schemeSeatsProps = {
    className: "selection-seats-coach-details-scheme__seats",
    isDisabled: (item) => {
      const seat = coach ? coach.seats.find(seat => seat.index === item) : null;

      return seat ? !seat.available : true;
    },
    onChange: (values) => {
      if (onChange) {
        onChange(values);
      }
    },
    values,
  };

  return (
    <div className={cn("selection-seats-coach-details-scheme", className)}>
      {coach && (
        <>
          <p className="selection-seats-coach-details-scheme__number">{coach.coach.name}</p>
          <div className="selection-seats-coach-details-scheme__container">
            {coach.coach.class_type === "first" && (<FirstSchemeSeats {...schemeSeatsProps} />)}
            {coach.coach.class_type === "second" && (<SecondSchemeSeats {...schemeSeatsProps} />)}
            {coach.coach.class_type === "third" && (<ThirdSchemeSeats {...schemeSeatsProps} />)}
            {coach.coach.class_type === "fourth" && (<FourthSchemeSeats {...schemeSeatsProps} />)}
          </div>
        </>
      )}
    </div>
  );
}

SelectionSeatsCoachDetailsScheme.propTypes = {
  className: classNameType,
  coach: coachType,
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(seatType),
};

export default SelectionSeatsCoachDetailsScheme;
