import Select from "../../../../../components/Fields/Select/Select";
import { classNameType } from "../../../../../types/base";
import { cn } from "../../../../../lib/utils";
import { useState } from "react";
import "./SelectionTrainControlSortBy.css";

const options = [
  { text: "времени", value: "time" },
  { text: "стоимости", value: "cost" },
  { text: "длительности", value: "duration" },
];

function SelectionTrainControlSortBy({ className }) {
  const [value, setValue] = useState("time");

  return (
    <div className={cn("selection-train-control-sort-by", className)}>
      <p className="selection-train-control-sort-by__prefix">сортировать по:</p>
      <Select
        contentClassName="selection-train-control-sort-by__select-content"
        items={options}
        onValueChange={setValue}
        triggerClassName="selection-train-control-sort-by__select-trigger"
        value={value}
      />
    </div>
  );
}

SelectionTrainControlSortBy.propTypes = { className: classNameType };

export default SelectionTrainControlSortBy;
