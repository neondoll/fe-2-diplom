import Slider from "../../../Fields/Slider/Slider.jsx";
import { classNameType } from "../../../../types/base.js";
import { cn } from "../../../../lib/utils.js";
import "./SelectionFilterPrice.css";

function SelectionFilterPrice({ className }) {
  return (
    <div className={cn("selection-filter-price", className)}>
      <label className="selection-filter-price__label">Стоимость</label>
      <Slider
        className="selection-filter-price__slider"
        defaultValue={[1920, 4500]}
        max={7000}
        min={1920}
        step={10}
        tooltip={{ open: true }}
      />
    </div>
  );
}

SelectionFilterPrice.propTypes = { className: classNameType };

export default SelectionFilterPrice;
