import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input className={cn("input", className)} ref={ref} {...props} />
  );
});
Input.displayName = "Input";
Input.propTypes = {
  className: classNameType,
  id: PropTypes.string,
  max: PropTypes.string,
  min: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
