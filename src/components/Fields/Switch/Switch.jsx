import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { Switch as AntSwitch } from "antd";
import "./Switch.css";

function Switch({ className, ...props }) {
  return <AntSwitch className={cn("switch", className)} {...props} />;
}

Switch.propTypes = { className: classNameType, id: PropTypes.string, onChange: PropTypes.func, value: PropTypes.bool };

export default Switch;
