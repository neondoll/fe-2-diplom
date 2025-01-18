import CalendarIcon from "../../icons/CalendarIcon.jsx";
import Datepicker, { DatepickerPropTypes } from "../Fields/Datepicker/Datepicker";
import { cn } from "../../lib/utils";
import "./DatepickerWithCalendar.css";

function DatepickerWithCalendar({ className, ...props }) {
  return (
    <div className={cn("datepicker-with-calendar", className)}>
      <Datepicker className="datepicker-with-calendar__input" {...props} />
      <div className="datepicker-with-calendar__suffix">
        <CalendarIcon />
      </div>
    </div>
  );
}

DatepickerWithCalendar.propTypes = DatepickerPropTypes;

export default DatepickerWithCalendar;
