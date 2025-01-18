import PropTypes from "prop-types";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./Button.css";

function Button({ className, variant, ...props }) {
  return <button className={cn("btn", `btn--${variant}`, className)} {...props} />;
}

Button.propTypes = {
  className: classNameType,
  variant: PropTypes.oneOf([
    "change", "choose-places", "confirm", "find-tickets", "further", "learn-more", "send",
  ]).isRequired,
};

export default Button;
