import * as ReactSelect from "@radix-ui/react-select";
import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./Select.css";

function Select({ contentClassName, items, triggerClassName, ...props }) {
  return (
    <ReactSelect.Root {...props}>
      <ReactSelect.Trigger className={cn("select__trigger", triggerClassName)}>
        <ReactSelect.Value />
        <ReactSelect.Icon className="select__icon">
          <svg width="2.4em" height="1em" fill="none" viewBox="0 0 12 5" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4.58333L0 0H11.5L6 4.58333Z" fill="currentColor" />
          </svg>
        </ReactSelect.Icon>
      </ReactSelect.Trigger>
      <ReactSelect.Portal>
        <ReactSelect.Content className={cn("select__content", contentClassName)}>
          <ReactSelect.Viewport className="select__viewport">
            <ReactSelect.Group className="select__group">
              {items.map(item => (
                <ReactSelect.Item className="select__item" key={item.value} value={item.value}>
                  <ReactSelect.ItemText>{item.text}</ReactSelect.ItemText>
                </ReactSelect.Item>
              ))}
            </ReactSelect.Group>
          </ReactSelect.Viewport>
        </ReactSelect.Content>
      </ReactSelect.Portal>
    </ReactSelect.Root>
  );
}

Select.propTypes = {
  contentClassName: classNameType,
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string, value: PropTypes.string })).isRequired,
  name: PropTypes.string,
  onValueChange: PropTypes.func,
  triggerClassName: classNameType,
  value: PropTypes.string,
};

export default Select;
