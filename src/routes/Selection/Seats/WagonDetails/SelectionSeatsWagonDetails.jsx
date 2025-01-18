import PropTypes from "prop-types";
import SelectionSeatsWagonDetailsBody from "./Body/SelectionSeatsWagonDetailsBody";
import SelectionSeatsWagonDetailsFooter from "./Footer/SelectionSeatsWagonDetailsFooter";
import SelectionSeatsWagonDetailsHeader from "./Header/SelectionSeatsWagonDetailsHeader";
import SelectionSeatsWagonDetailsScheme from "./Scheme/SelectionSeatsWagonDetailsScheme";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { seatType, trainType, wagonNumber } from "../../../../constants/train";
import { useEffect, useState } from "react";
import "./SelectionSeatsWagonDetails.css";

function SelectionSeatsWagonDetails({ className, onChange, train, type, values }) {
  const [form, setForm] = useState({ seats: [], wagon_number: undefined });
  const [wagon, setWagon] = useState();
  const [wagons, setWagons] = useState([]);

  useEffect(() => {
    if (values) {
      setForm(values);
    }
  }, [values]);
  useEffect(() => {
    if (train && type in train) {
      setWagon(train[type].find(wagon => wagon.number === values.wagon_number));
    }
  }, [train, type, values.wagon_number]);
  useEffect(() => {
    if (train && type in train) {
      setWagons(train[type].map(wagon => wagon.number));
    }
  }, [train, type]);

  const handleChange = (data) => {
    console.log(data);

    setForm(prev => ({ ...prev, ...data }));

    if (onChange) {
      onChange(data);
    }
  };
  const handleChangeWagonNumber = (value) => {
    handleChange({ seats: [], wagon_number: value });
    setWagon(train[type].find(wagon => wagon.number === value));
  };

  return (
    <div className={cn("selection-seats-wagon-details", className)}>
      {type && (
        <>
          <SelectionSeatsWagonDetailsHeader
            className="selection-seats-wagon-details__header"
            onChange={handleChangeWagonNumber}
            value={form.wagon_number}
            wagons={wagons}
          />
          <SelectionSeatsWagonDetailsBody className="selection-seats-wagon-details__body" wagon={wagon} />
          <SelectionSeatsWagonDetailsScheme
            className="selection-seats-wagon-details__scheme"
            onChange={(newValue) => {
              handleChange({ seats: newValue });
            }}
            type={type}
            values={form.seats}
            wagon={wagon}
          />
          <SelectionSeatsWagonDetailsFooter
            className="selection-seats-wagon-details__footer"
            seats={form.seats}
            wagon={wagon}
          />
        </>
      )}
    </div>
  );
}

SelectionSeatsWagonDetails.propTypes = {
  className: classNameType,
  onChange: PropTypes.func,
  train: trainType,
  type: PropTypes.oneOf(["first", "second", "third", "fourth"]),
  values: PropTypes.shape({ seats: PropTypes.arrayOf(seatType), wagon_number: wagonNumber }),
};

export default SelectionSeatsWagonDetails;
