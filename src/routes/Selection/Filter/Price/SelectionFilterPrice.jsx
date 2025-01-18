import Slider from "../../../../components/Slider/Slider";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
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
