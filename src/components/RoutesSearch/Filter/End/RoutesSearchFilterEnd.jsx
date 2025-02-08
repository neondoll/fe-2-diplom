import RoutesSearchFilterCollapsible from "../Collapsible/RoutesSearchFilterCollapsible";
import Slider from "../../../Fields/Slider/Slider";
import { changeRoutesSearchInput, selectRoutesSearch } from "../../../../slices/routesSearch";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import "./RoutesSearchFilterEnd.css";

function RoutesSearchFilterEnd({ className }) {
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
    <div className={cn("routes-search-filter-end", className)}>
      <RoutesSearchFilterCollapsible
        className="routes-search-filter-end__collapsible"
        icon={props => (
          <svg
            width="calc(1em*(32/30))"
            height="calc(1em*(26/30))"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27 0C29.7615 0 32 2.23853 32 5V21C32 23.7615 29.7615 26 27 26H5C2.23853 26 0 23.7615 0 21V5C0 2.23853 2.23853 0 5 0H27ZM14.1628 14.2236V17.3333L14.0522 17.2267C12.5811 15.8075 11.0977 14.377 9.68408 13.0288L9.80811 12.908C11.2327 11.5205 12.6982 10.0935 14.1775 8.66663V11.949H22.3157V14.2236H14.1628Z"
              fill="currentColor"
            />
          </svg>
        )}
        title="Обратно"
      >
        <div className="routes-search-filter-end__content">
          <div className="routes-search-filter-end__departure">
            <h3 className="routes-search-filter-end__subtitle">Время отбытия</h3>
            <Slider
              className="routes-search-filter-end__slider"
              onChange={(newValue) => {
                handleChange({ end_departure_hour_from: newValue[0], end_departure_hour_to: newValue[1] });
              }}
              value={[filter.end_departure_hour_from, filter.end_departure_hour_to]}
              {...sliderProps}
            />
          </div>
          <div className="routes-search-filter-end__arrival">
            <h3 className="routes-search-filter-end__subtitle">Время прибытия</h3>
            <Slider
              className="routes-search-filter-end__slider"
              onChange={(newValue) => {
                handleChange({ end_arrival_hour_from: newValue[0], end_arrival_hour_to: newValue[1] });
              }}
              value={[filter.end_arrival_hour_from, filter.end_arrival_hour_to]}
              {...sliderProps}
            />
          </div>
        </div>
      </RoutesSearchFilterCollapsible>
    </div>
  );
}

RoutesSearchFilterEnd.propTypes = { className: classNameType };

export default RoutesSearchFilterEnd;
