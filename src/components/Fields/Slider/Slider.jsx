import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { Slider as AntSlider } from "antd";
import "./Slider.css";

function Slider({ className, max = 100, min = 0, ...props }) {
  return (
    <AntSlider
      className={cn("slider", className)}
      defaultValue={[min, max]}
      marks={{ [min]: String(min), [max]: String(max) }}
      max={max}
      min={min}
      range={{ draggableTrack: false }}
      {...props}
    />
  );
}

Slider.propTypes = {
  className: classNameType,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.number,
  tooltip: PropTypes.exact({
    autoAdjustOverflow: PropTypes.bool,
    formatter: PropTypes.func,
    getPopupContainer: PropTypes.func,
    open: PropTypes.bool,
    placement: PropTypes.string,
  }),
  value: PropTypes.arrayOf(PropTypes.number),
};

export default Slider;
