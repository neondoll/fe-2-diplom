import SelectionFilterBack from "./Back/SelectionFilterBack";
import SelectionFilterDates from "./Dates/SelectionFilterDates";
import SelectionFilterPrice from "./Price/SelectionFilterPrice";
import SelectionFilterSwitches from "./Switches/SelectionFilterSwitches";
import SelectionFilterThere from "./There/SelectionFilterThere";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./SelectionFilter.css";

function SelectionFilter({ className }) {
  return (
    <div className={cn("selection-filter", className)}>
      <SelectionFilterDates className="selection-filter__dates" />
      <SelectionFilterSwitches className="selection-filter__switches" />
      <SelectionFilterPrice className="selection-filter__price" />
      <SelectionFilterThere className="selection-filter__there" />
      <SelectionFilterBack className="selection-filter__back" />
    </div>
  );
}

SelectionFilter.propTypes = { className: classNameType };

export default SelectionFilter;
