import CalendarIcon from "../../../../icons/CalendarIcon";
import Datepicker from "../../../Fields/Datepicker/Datepicker";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { changeRoutesSearchInput, selectRoutesSearch } from "../../../../slices/routesSearch";
import { useDispatch, useSelector } from "react-redux";
import "./RoutesSearchFilterDates.css";

function RoutesSearchFilterDates({ className }) {
  const dispatch = useDispatch();
  const filter = useSelector(selectRoutesSearch);

  const handleChange = (data) => {
    console.log(data);

    Object.entries(data).forEach(([name, value]) => {
      dispatch(changeRoutesSearchInput({ name, value }));
    });
  };

  return (
    <div className={cn("routes-search-filter-dates", className)}>
      <div className="routes-search-filter-dates__group">
        <label className="routes-search-filter-dates__label" htmlFor="routes-search-filter-date-start">
          Дата поездки
        </label>
        <Datepicker
          className="routes-search-filter-dates__datepicker"
          id="routes-search-filter-date-start"
          onChange={(newValue) => {
            handleChange({ date_start: newValue });
          }}
          placeholder="ДД/ММ/ГГ"
          suffixIcon={<CalendarIcon />}
          value={filter.date_start}
        />
      </div>
      <div className="routes-search-filter-dates__group">
        <label className="routes-search-filter-dates__label" htmlFor="routes-search-filter-date-end">
          Дата возвращения
        </label>
        <Datepicker
          className="routes-search-filter-dates__datepicker"
          id="routes-search-filter-date-end"
          onChange={(newValue) => {
            handleChange({ date_end: newValue });
          }}
          placeholder="ДД/ММ/ГГ"
          suffixIcon={<CalendarIcon />}
          value={filter.date_end}
        />
      </div>
    </div>
  );
}

RoutesSearchFilterDates.propTypes = { className: classNameType };

export default RoutesSearchFilterDates;
