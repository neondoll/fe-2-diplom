import RoutesSearchFilterCollapsible from "../Collapsible/RoutesSearchFilterCollapsible";
import Slider from "../../../Fields/Slider/Slider";
import { changeRoutesSearchInput, selectRoutesSearch } from "../../../../slices/routesSearch";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import "./RoutesSearchFilterStart.css";

function RoutesSearchFilterStart({ className }) {
  const dispatch = useDispatch();
  const filter = useSelector(selectRoutesSearch);
  const sliderProps = {
    marks: { 0: "0:00", 24: "24:00" },
    max: 24,
    min: 0,
    step: 1,
    tooltip: { open: true, formatter: value => `${value}:00` },
  };

  const handleChange = (data) => {
    Object.entries(data).forEach(([name, value]) => {
      dispatch(changeRoutesSearchInput({ name, value }));
    });
  };

  return (
    <div className={cn("routes-search-filter-start", className)}>
      <RoutesSearchFilterCollapsible
        className="routes-search-filter-start__collapsible"
        icon={props => (
          <svg
            width="calc(1em*(32/30))"
            height="calc(1em*(26/30))"
            fill="none"
            viewBox="0 0 32 26"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 0C2.23853 0 0 2.23859 0 5V21C0 23.7615 2.23853 26 5 26H27C29.7615 26 32 23.7615 32 21V5C32 2.23859 29.7615 0 27 0H5ZM17.8372 14.2238V17.3334L17.8811 17.2911C19.374 15.8507 20.8811 14.3975 22.3159 13.0288L22.2261 12.9413C20.7908 11.5435 19.3137 10.1051 17.8225 8.66669V11.9491H9.68433V14.2238H17.8372Z"
              fill="currentColor"
            />
          </svg>
        )}
        title="Туда"
      >
        <div className="routes-search-filter-start__departure">
          <h3 className="routes-search-filter-start__subtitle">Время отбытия</h3>
          <Slider
            className="routes-search-filter-start__slider"
            onChange={(newValue) => {
              handleChange({ start_departure_hour_from: newValue[0], start_departure_hour_to: newValue[1] });
            }}
            value={[filter.start_departure_hour_from, filter.start_departure_hour_to]}
            {...sliderProps}
          />
        </div>
        <div className="routes-search-filter-start__arrival">
          <h3 className="routes-search-filter-start__subtitle">Время прибытия</h3>
          <Slider
            className="routes-search-filter-start__slider"
            onChange={(newValue) => {
              handleChange({ start_arrival_hour_from: newValue[0], start_arrival_hour_to: newValue[1] });
            }}
            value={[filter.start_arrival_hour_from, filter.start_arrival_hour_to]}
            {...sliderProps}
          />
        </div>
      </RoutesSearchFilterCollapsible>
    </div>
  );
}

RoutesSearchFilterStart.propTypes = { className: classNameType };

export default RoutesSearchFilterStart;
