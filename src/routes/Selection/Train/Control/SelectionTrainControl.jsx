import SelectionTrainControlShowBy from "./ShowBy/SelectionTrainControlShowBy";
import SelectionTrainControlSortBy from "./SortBy/SelectionTrainControlSortBy";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import "./SelectionTrainControl.css";

function SelectionTrainControl({ className }) {
  return (
    <div className={cn("selection-train-control", className)}>
      <p className="selection-train-control__found">найдено 20</p>
      <SelectionTrainControlSortBy className="selection-train-control__sort-by" />
      <SelectionTrainControlShowBy className="selection-train-control__show-by" />
    </div>
  );
}

SelectionTrainControl.propTypes = { className: classNameType };

export default SelectionTrainControl;
