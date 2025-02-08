import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { Tooltip } from "react-tooltip";
import "./AdditionalOptionsInCarriagesTooltip.css";

function AdditionalOptionsInCarriagesTooltip({ className, content, id }) {
  return (
    <Tooltip
      className={cn("additional-options-in-carriages-tooltip", className)}
      content={content}
      id={id}
      place="bottom"
      variant="light"
    />
  );
}

AdditionalOptionsInCarriagesTooltip.propTypes = {
  className: classNameType,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default AdditionalOptionsInCarriagesTooltip;
