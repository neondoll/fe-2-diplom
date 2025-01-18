import PropTypes from "prop-types";
import { classNameType } from "../../../../../types/base";
import { cn } from "../../../../../lib/utils";
import { firstWagon, fourthWagon, seatType, secondWagon, thirdWagon } from "../../../../../constants/train";
import { useEffect, useState } from "react";
import "./SelectionSeatsWagonDetailsScheme.css";

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

function FirstSchemeSeats({ className, onChange, values, wagon }) {
  const placements = Array.from({ length: 8 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled: (item) => {
      let disabled = true;

      if ("available" in wagon.seats && Array.isArray(wagon.seats.available)) {
        disabled = disabled && !wagon.seats.available.includes(item);
      }

      return disabled;
    },
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
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(seatType),
  wagon: secondWagon,
};

function SecondSchemeSeats({ className, onChange, values, wagon }) {
  const placements = Array.from({ length: 8 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled: (item) => {
      let disabled = true;

      if ("lower" in wagon.seats && "available" in wagon.seats.lower && Array.isArray(wagon.seats.lower.available)) {
        disabled = disabled && !wagon.seats.lower.available.includes(item);
      }

      if ("upper" in wagon.seats && "available" in wagon.seats.upper && Array.isArray(wagon.seats.upper.available)) {
        disabled = disabled && !wagon.seats.upper.available.includes(item);
      }

      return disabled;
    },
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
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(seatType),
  wagon: secondWagon,
};

function ThirdSchemeSeats({ className, onChange, values, wagon }) {
  const placements = Array.from({ length: 8 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled: (item) => {
      let disabled = true;

      if ("lower" in wagon.seats && "available" in wagon.seats.lower && Array.isArray(wagon.seats.lower.available)) {
        disabled = disabled && !wagon.seats.lower.available.includes(item);
      }

      if ("upper" in wagon.seats && "available" in wagon.seats.upper && Array.isArray(wagon.seats.upper.available)) {
        disabled = disabled && !wagon.seats.upper.available.includes(item);
      }

      return disabled;
    },
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
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(seatType),
  wagon: thirdWagon,
};

function FourthSchemeSeats({ className, onChange, values, wagon }) {
  const placements = Array.from({ length: 16 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled: (item) => {
      let disabled = true;

      if ("available" in wagon.seats && Array.isArray(wagon.seats.available)) {
        disabled = disabled && !wagon.seats.available.includes(item);
      }

      return disabled;
    },
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
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(seatType),
  wagon: fourthWagon,
};

function SelectionSeatsWagonDetailsScheme({ className, onChange, type, wagon, values }) {
  const schemeSeatsProps = {
    className: "selection-seats-wagon-details-scheme__seats",
    onChange: (values) => {
      if (onChange) {
        onChange(values);
      }
    },
    values, wagon,
  };

  return (
    <div className={cn("selection-seats-wagon-details-scheme", className)}>
      {wagon && (
        <>
          <p className="selection-seats-wagon-details-scheme__number">{wagon.number}</p>
          <div className="selection-seats-wagon-details-scheme__container">
            {type === "first" && (<FirstSchemeSeats {...schemeSeatsProps} />)}
            {type === "second" && (<SecondSchemeSeats {...schemeSeatsProps} />)}
            {type === "third" && (<ThirdSchemeSeats {...schemeSeatsProps} />)}
            {type === "fourth" && (<FourthSchemeSeats {...schemeSeatsProps} />)}
          </div>
        </>
      )}
    </div>
  );
}

SelectionSeatsWagonDetailsScheme.propTypes = {
  className: classNameType,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(["first", "second", "third", "fourth"]),
  values: PropTypes.arrayOf(seatType),
  wagon: PropTypes.oneOfType([firstWagon, secondWagon, thirdWagon, fourthWagon]),
};

export default SelectionSeatsWagonDetailsScheme;
