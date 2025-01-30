import PropTypes from "prop-types";
import { classNameType } from "../../../../../types/base";
import { cn } from "../../../../../lib/utils";
import { coachPriceType, coachType } from "../../../../../types/coach";
import { orderSeatIndexType, orderSeatsType } from "../../../../../types/order";
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
  item: orderSeatIndexType.isRequired,
};

function FirstSchemeSeats({ className, isDisabled, onChange, price, values }) {
  const placements = Array.from({ length: 8 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled,
    isSelected: index => selectedSeats.map(seat => seat.index).includes(index),
    onClick: (event) => {
      const index = Number(event.target.textContent);

      let seats;

      if (event.target.dataset.selected === "true") {
        seats = selectedSeats.filter(seat => seat.index !== index);
      }
      else {
        seats = [...selectedSeats, { index, price }];
      }

      setSelectedSeats(seats);
      onChange(seats);
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
  price: coachPriceType,
  values: orderSeatsType,
};

function SecondSchemeSeats({ bottomPrice, className, isDisabled, onChange, topPrice, values }) {
  const placements = Array.from({ length: 8 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled,
    isSelected: index => selectedSeats.map(seat => seat.index).includes(index),
    onClick: (event) => {
      const index = Number(event.target.textContent);

      let seats;

      if (event.target.dataset.selected === "true") {
        seats = selectedSeats.filter(seat => seat.index !== index);
      }
      else {
        seats = [...selectedSeats, { index, price: index % 2 === 0 ? topPrice : bottomPrice }];
      }

      setSelectedSeats(seats);
      onChange(seats);
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
  bottomPrice: coachPriceType,
  className: classNameType,
  isDisabled: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  topPrice: coachPriceType,
  values: orderSeatsType,
};

function ThirdSchemeSeats({ bottomPrice, className, isDisabled, onChange, sidePrice, topPrice, values }) {
  const placements = Array.from({ length: 8 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled,
    isSelected: index => selectedSeats.map(seat => seat.index).includes(index),
    onClick: (event) => {
      const index = Number(event.target.textContent);

      let seats;

      if (event.target.dataset.selected === "true") {
        seats = selectedSeats.filter(seat => seat.index !== index);
      }
      else {
        seats = [...selectedSeats, {
          index,
          price: index > 32 ? sidePrice : (index % 2 === 0 ? topPrice : bottomPrice),
        }];
      }

      setSelectedSeats(seats);
      onChange(seats);
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
  bottomPrice: coachPriceType,
  className: classNameType,
  isDisabled: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  sidePrice: coachPriceType,
  topPrice: coachPriceType,
  values: orderSeatsType,
};

function FourthSchemeSeats({ bottomPrice, className, isDisabled, onChange, topPrice, values }) {
  const placements = Array.from({ length: 16 }, (_, i) => i);
  const schemeSeatsItemProps = {
    isDisabled,
    isSelected: index => selectedSeats.map(seat => seat.index).includes(index),
    onClick: (event) => {
      const index = Number(event.target.textContent);

      let seats;

      if (event.target.dataset.selected === "true") {
        seats = selectedSeats.filter(seat => seat.index !== index);
      }
      else {
        seats = [...selectedSeats, { index, price: index % 2 === 0 ? topPrice : bottomPrice }];
      }

      setSelectedSeats(seats);
      onChange(seats);
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
  bottomPrice: coachPriceType,
  className: classNameType,
  isDisabled: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  topPrice: coachPriceType,
  values: orderSeatsType,
};

function SelectionSeatsCoachDetailsScheme({ className, coach, onChange, values }) {
  const schemeSeatsProps = {
    className: "selection-seats-coach-details-scheme__seats",
    isDisabled: (item) => {
      const seat = coach ? coach.seats.find(seat => seat.index === item) : null;

      return seat ? !seat.available : true;
    },
    onChange,
    values,
  };

  return (
    <div className={cn("selection-seats-coach-details-scheme", className)}>
      {coach && (
        <>
          <p className="selection-seats-coach-details-scheme__number">{coach.coach.name}</p>
          <div className="selection-seats-coach-details-scheme__container">
            {coach.coach.class_type === "first" && (
              <FirstSchemeSeats
                {...schemeSeatsProps}
                price={coach.coach.price}
              />
            )}
            {coach.coach.class_type === "second" && (
              <SecondSchemeSeats
                {...schemeSeatsProps}
                bottomPrice={coach.coach.bottom_price}
                topPrice={coach.coach.top_price}
              />
            )}
            {coach.coach.class_type === "third" && (
              <ThirdSchemeSeats
                {...schemeSeatsProps}
                bottomPrice={coach.coach.bottom_price}
                sidePrice={coach.coach.side_price}
                topPrice={coach.coach.top_price}
              />
            )}
            {coach.coach.class_type === "fourth" && (
              <FourthSchemeSeats
                {...schemeSeatsProps}
                bottomPrice={coach.coach.bottom_price}
                topPrice={coach.coach.top_price}
              />
            )}
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
  values: orderSeatsType,
};

export default SelectionSeatsCoachDetailsScheme;
