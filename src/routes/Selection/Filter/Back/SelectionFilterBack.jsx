import SelectionFilterCollapsible from "../Collapsible/SelectionFilterCollapsible";
import Slider from "../../../../components/Slider/Slider";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import "./SelectionFilterBack.css";

function SelectionFilterBack({ className }) {
  const sliderProps = {
    marks: { 0: "0:00", 24: "24:00" },
    max: 24,
    min: 0,
    step: 1,
    tooltip: { open: true, formatter: value => `${value}:00` },
  };

  return (
    <SelectionFilterCollapsible
      className={cn("selection-filter-back", className)}
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
      <div className="selection-filter-back__content">
        <div className="selection-filter-back__departure">
          <h3 className="selection-filter-back__subtitle">Время отбытия</h3>
          <Slider className="selection-filter-back__slider" defaultValue={[0, 11]} {...sliderProps} />
        </div>
        <div className="selection-filter-back__arrival">
          <h3 className="selection-filter-back__subtitle">Время прибытия</h3>
          <Slider className="selection-filter-back__slider" defaultValue={[5, 11]} {...sliderProps} />
        </div>
      </div>
    </SelectionFilterCollapsible>
  );
}

SelectionFilterBack.propTypes = { className: classNameType };

export default SelectionFilterBack;
