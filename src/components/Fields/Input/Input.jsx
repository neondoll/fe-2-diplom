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
Input.propTypes = { className: classNameType };

export default Input;
