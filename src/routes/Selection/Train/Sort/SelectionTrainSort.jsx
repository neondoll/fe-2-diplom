import PropTypes from "prop-types";
import Select from "../../../../components/Fields/Select/Select";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useEffect, useState } from "react";
import "./SelectionTrainSort.css";

const options = [
  { text: "времени", value: "date" },
  { text: "стоимости", value: "price" },
  { text: "длительности", value: "duration" },
];

function SelectionTrainSort({ className, onChange, value }) {
  const [selected, setSelected] = useState(options[0].value);

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  const handleValueChange = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className={cn("selection-train-sort", className)}>
      <p className="selection-train-sort__prefix">сортировать по:</p>
      <Select
        contentClassName="selection-train-sort__select-content"
        items={options}
        onValueChange={handleValueChange}
        triggerClassName="selection-train-sort__select-trigger"
        value={selected}
      />
    </div>
  );
}

SelectionTrainSort.propTypes = {
  className: classNameType,
  onChange: PropTypes.func,
  value: PropTypes.oneOf(options.map(({ value }) => value)),
};

export default SelectionTrainSort;
