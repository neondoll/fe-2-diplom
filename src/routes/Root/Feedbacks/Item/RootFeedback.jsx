import PropTypes from "prop-types";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import "./RootFeedback.css";

function RootFeedback({ avatar, className, name, text }) {
  return (
    <div className={cn("root-feedback", className)}>
      <img alt={name} className="root-feedback__img" src={avatar} />
      <div className="root-feedback__content">
        <h3 className="root-feedback__author">{name}</h3>
        <q className="root-feedback__text">{text}</q>
      </div>
    </div>
  );
}

RootFeedback.propTypes = {
  avatar: PropTypes.string.isRequired,
  className: classNameType,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default RootFeedback;
