import Paths from "../../../../paths";
import PropTypes from "prop-types";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { Link } from "react-router-dom";
import "./SelectionSeatsExchange.css";

const icons = {
  arrival: props => (
    <svg width="76" height="60" fill="none" viewBox="0 0 76 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71 0C73.7612 0 76 2.23859 76 5V55C76 57.7614 73.7612 60 71 60H5C2.23877 60 0 57.7614 0 55V5C0 2.23859 2.23877 0 5 0H71ZM33.6372 32.8239V40C30.0566 36.6445 26.4414 33.2558 23 30.0664C26.4761 26.7774 30.0566 23.3887 33.6719 20V27.5747H53V32.8239H33.6372Z"
        fill="#FFA800"
      />
    </svg>
  ),
  departure: props => (
    <svg width="76" height="60" fill="none" viewBox="0 0 76 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0C2.23877 0 0 2.23859 0 5V55C0 57.7614 2.23877 60 5 60H71C73.7612 60 76 57.7614 76 55V5C76 2.23859 73.7612 0 71 0H5ZM42.3628 32.8239V40C45.9434 36.6445 49.5586 33.2558 53 30.0664C49.5239 26.7774 45.9434 23.3887 42.3281 20V27.5747H23V32.8239H42.3628Z"
        fill="#FFA800"
      />
    </svg>
  ),
};

function SelectionSeatsExchange({ className, variant }) {
  const Icon = icons[variant];

  return (
    <div className={cn("selection-seats-exchange", className)} data-variant={variant}>
      <Icon className="selection-seats-exchange__icon" />
      <Link className="selection-seats-exchange__btn" to={Paths.SELECTION_TRAIN}>Выбрать другой поезд</Link>
    </div>
  );
}

SelectionSeatsExchange.propTypes = {
  className: classNameType,
  variant: PropTypes.oneOf(["arrival", "departure"]).isRequired,
};

export default SelectionSeatsExchange;
