import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn, formatPrice } from "../../../lib/utils";
import "./TrainSeat.css";

function TrainSeat({ bottomPrice, className, quantity, title, topPrice }) {
  const minPrice = Math.min(bottomPrice, topPrice);

  return (
    <div className={cn("train-seat", className)}>
      <p className="train-seat__title">{title}</p>
      <p className="train-seat__quantity">{quantity}</p>
      <p className="train-seat__price">
        <span className="train-seat__price-prefix">от</span>
        <span className="train-seat__price-value">{formatPrice(minPrice)}</span>
        <span className="train-seat__price-currency" />
      </p>
    </div>
  );
}

TrainSeat.propTypes = {
  bottomPrice: PropTypes.number.isRequired,
  className: classNameType,
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  topPrice: PropTypes.number.isRequired,
};

export default TrainSeat;
