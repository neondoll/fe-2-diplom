import RoutesSearchFilterDates from "./Dates/RoutesSearchFilterDates";
import RoutesSearchFilterEnd from "./End/RoutesSearchFilterEnd";
import RoutesSearchFilterPrice from "./Price/RoutesSearchFilterPrice";
import RoutesSearchFilterStart from "./Start/RoutesSearchFilterStart";
import RoutesSearchFilterSwitches from "./Switches/RoutesSearchFilterSwitches";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./RoutesSearchFilter.css";

function RoutesSearchFilter({ className }) {
  return (
    <div className={cn("routes-search-filter", className)}>
      <RoutesSearchFilterDates className="routes-search-filter__dates" />
      <RoutesSearchFilterSwitches className="routes-search-filter__switches" />
      <RoutesSearchFilterPrice className="routes-search-filter__price" />
      <RoutesSearchFilterStart className="routes-search-filter__start" />
      <RoutesSearchFilterEnd className="routes-search-filter__end" />
    </div>
  );
}

RoutesSearchFilter.propTypes = { className: classNameType };

export default RoutesSearchFilter;
