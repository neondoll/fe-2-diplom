import * as ReactRadioGroup from "@radix-ui/react-radio-group";
import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./RadioGroup.css";

function RadioGroup({ className, items, ...props }) {
  return (
    <ReactRadioGroup.Root className={cn("radio-group", className)} {...props}>
      {items.map((item, index) => {
        const style = {
          width: index === 0
            ? `calc((100% / ${items.length}) - ${items.length - 1}px)`
            : `calc((100% / ${items.length}) + 1px)`,
        };

        return (
          <ReactRadioGroup.Item
            className="radio-group__item"
            key={item.value}
            style={style}
            value={item.value}
          >
            {item.text}
          </ReactRadioGroup.Item>
        );
      })}
    </ReactRadioGroup.Root>
  );
}

RadioGroup.propTypes = {
  className: classNameType,
  items: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string, value: PropTypes.string })).isRequired,
};

export default RadioGroup;
