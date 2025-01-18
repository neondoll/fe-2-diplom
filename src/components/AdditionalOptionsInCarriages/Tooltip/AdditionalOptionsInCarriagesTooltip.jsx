import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { Tooltip } from "react-tooltip";
import "./AdditionalOptionsInCarriagesTooltip.css";

function AdditionalOptionsInCarriagesTooltip({ className, content, id, isOpen = false }) {
  return (
    <Tooltip
      className={cn("additional-options-in-carriages-tooltip", className)}
      content={content}
      id={id}
      isOpen={isOpen}
      place="bottom"
      variant="light"
    />
  );
}

AdditionalOptionsInCarriagesTooltip.propTypes = {
  className: classNameType,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
};

export default AdditionalOptionsInCarriagesTooltip;
