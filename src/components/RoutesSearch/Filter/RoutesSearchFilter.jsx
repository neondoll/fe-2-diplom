import RoutesSearchFilterDates from "./Dates/RoutesSearchFilterDates";
import SelectionFilterBack from "./Back/SelectionFilterBack";
import SelectionFilterPrice from "./Price/SelectionFilterPrice";
import SelectionFilterSwitches from "./Switches/SelectionFilterSwitches";
import SelectionFilterThere from "./There/SelectionFilterThere";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./RoutesSearchFilter.css";

function RoutesSearchFilter({ className }) {
  return (
    <div className={cn("routes-search-filter", className)}>
      <RoutesSearchFilterDates className="routes-search-filter__dates" />
      <SelectionFilterSwitches className="routes-search-filter__switches" />
      <SelectionFilterPrice className="routes-search-filter__price" />
      <SelectionFilterThere className="routes-search-filter__there" />
      <SelectionFilterBack className="routes-search-filter__back" />
    </div>
  );
}

RoutesSearchFilter.propTypes = { className: classNameType };

export default RoutesSearchFilter;
