import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import { Switch as AntSwitch } from "antd";
import "./Switch.css";

function Switch({ className, ...props }) {
  return <AntSwitch className={cn("switch", className)} {...props} />;
}

Switch.propTypes = { className: classNameType };

export default Switch;
