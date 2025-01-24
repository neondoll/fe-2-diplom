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
        const value = date.toLocaleString("ru-RU", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }).split(".").reverse().join("-");

        onChange(value);
      },
      selectedDates: defaultValue ? [defaultValue] : [],
    });
  }, [defaultValue, onChange]);
  useEffect(() => {
    if (airDatepicker.current && value) {
      airDatepicker.current.selectDate(new Date(value));
    }
  }, [airDatepicker.current, value]);

  return (
    <div className={cn("datepicker", className)}>
      <Input className="datepicker__input" readOnly ref={element} type="text" {...props} />
      {suffixIcon && <span className="datepicker__suffix">{suffixIcon}</span>}
    </div>
  );
}

const DatepickerPropTypes = {
  className: classNameType,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  suffixIcon: PropTypes.node,
  value: PropTypes.string,
};

Datepicker.propTypes = DatepickerPropTypes;

export default Datepicker;
export { DatepickerPropTypes };
