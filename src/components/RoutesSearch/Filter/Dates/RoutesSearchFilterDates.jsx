import CalendarIcon from "../../../../icons/CalendarIcon";
import Datepicker from "../../../Fields/Datepicker/Datepicker";
import { changeRoutesSearchInput, selectRoutesSearch } from "../../../../slices/routesSearch";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import "./RoutesSearchFilterDates.css";

function RoutesSearchFilterDates({ className }) {
  const dispatch = useDispatch();
  const filter = useSelector(selectRoutesSearch);

  const handleChangeRoutesSearchInput = (data) => {
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
          onChange={newValue => handleChangeRoutesSearchInput({ date_start: newValue })}
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
          onChange={newValue => handleChangeRoutesSearchInput({ date_end: newValue })}
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
