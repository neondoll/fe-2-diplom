import AirDatepicker from "air-datepicker";
import Input from "../Input/Input";
import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { useEffect, useRef } from "react";
import "./Datepicker.css";

function Datepicker({ className, defaultValue, onChange, suffixIcon, value, ...props }) {
  const airDatepicker = useRef();
  const element = useRef();

  useEffect(() => {
    if (airDatepicker.current) {
      airDatepicker.current.update({});
    }
  }, []);
  useEffect(() => {
    if (airDatepicker.current) {
      airDatepicker.current.destroy();
    }

    airDatepicker.current = new AirDatepicker(element.current, {
      dateFormat: date => date.toLocaleString("ru-RU", { day: "numeric", month: "numeric", year: "numeric" }),
      navTitles: { days: "MMMM" },
      onSelect: ({ date }) => {
        if (date) {
          const value = date.toLocaleString("ru-RU", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          }).split(".").reverse().join("-");

          onChange(value);
        }
        else {
          onChange(undefined);
        }
      },
      selectedDates: defaultValue ? [defaultValue] : [],
    });
  }, [defaultValue, onChange]);
  useEffect(() => {
    if (airDatepicker.current) {
      if (value) {
        airDatepicker.current.selectDate(new Date(value));
      }
      else {
        airDatepicker.current.clear();
      }
    }
  }, [value]);

  return (
    <div className={cn("datepicker", className)}>
      <Input className="datepicker__input" readOnly ref={element} type="text" {...props} />
      {suffixIcon && <span className="datepicker__suffix">{suffixIcon}</span>}
    </div>
  );
}

Datepicker.propTypes = {
  className: classNameType,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  suffixIcon: PropTypes.node,
  value: PropTypes.string,
};

export default Datepicker;
