import CalendarIcon from "../../../../icons/CalendarIcon";
import Datepicker from "../../../../components/Fields/Datepicker/Datepicker";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useState } from "react";
import "./SelectionFilterDates.css";

function SelectionFilterDates({ className }) {
  const [values, setValues] = useState({ travelDate: "2018-08-30", returnDate: "2018-09-09" });

  const handleChange = (value) => {
    console.log(value);

    setValues(prev => ({ ...prev, ...value }));
  };

  return (
    <div className={cn("selection-filter-dates", className)}>
      <div className="selection-filter-dates__group">
        <label className="selection-filter-dates__label" htmlFor="travelDate">Дата поездки</label>
        <Datepicker
          className="selection-filter-dates__datepicker"
          defaultValue={values.travelDate}
          id="travelDate"
          onChange={(value) => {
            handleChange({ travelDate: value });
          }}
          suffixIcon={<CalendarIcon />}
        />
      </div>
      <div className="selection-filter-dates__group">
        <label className="selection-filter-dates__label" htmlFor="returnDate">Дата возвращения</label>
        <Datepicker
          className="selection-filter-dates__datepicker"
          defaultValue={values.returnDate}
          id="returnDate"
          onChange={(value) => {
            handleChange({ returnDate: value });
          }}
          suffixIcon={<CalendarIcon />}
        />
      </div>
    </div>
  );
}

SelectionFilterDates.propTypes = { className: classNameType };

export default SelectionFilterDates;
