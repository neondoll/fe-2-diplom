import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn, formatPrice } from "../../../lib/utils";
import "./TrainSeatPopover.css";

function TrainSeatPopover({ bottomPrice, bottomQuantity, className, title, topPrice, topQuantity }) {
  const sumQuantity = bottomQuantity + topQuantity;
  const minPrice = Math.min(bottomPrice, topPrice);

  return (
    <div className={cn("train-seat-popover", className)}>
      <Popover.Root>
        <Popover.Trigger className="train-seat-popover__trigger">
          <p className="train-seat-popover__trigger-title">{title}</p>
          <p className="train-seat-popover__trigger-quantity">{sumQuantity}</p>
          <p className="train-seat-popover__trigger-price">
            <span className="train-seat-popover__trigger-price-prefix">от</span>
            <span className="train-seat-popover__trigger-price-value">{formatPrice(minPrice)}</span>
            <span className="train-seat-popover__trigger-price-currency" />
          </p>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="train-seat-popover__content">
            <div className="train-seat-popover__content-list">
              <div className="train-seat-popover__content-item">
                <p className="train-seat-popover__content-title">верхние</p>
                <p className="train-seat-popover__content-quantity">{topQuantity}</p>
                <p className="train-seat-popover__content-price">
                  <span className="train-seat-popover__content-price-prefix">от</span>
                  <span className="train-seat-popover__content-price-value">{formatPrice(topPrice)}</span>
                  <span className="train-seat-popover__content-price-currency" />
                </p>
              </div>
              <div className="train-seat-popover__content-item">
                <p className="train-seat-popover__content-title">нижние</p>
                <p className="train-seat-popover__content-quantity">{bottomQuantity}</p>
                <p className="train-seat-popover__content-price">
                  <span className="train-seat-popover__content-price-prefix">от</span>
                  <span className="train-seat-popover__content-price-value">{formatPrice(bottomPrice)}</span>
                  <span className="train-seat-popover__content-price-currency" />
                </p>
              </div>
            </div>
            <Popover.Arrow className="train-seat-popover__arrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

TrainSeatPopover.propTypes = {
  bottomPrice: PropTypes.number.isRequired,
  bottomQuantity: PropTypes.number.isRequired,
  className: classNameType,
  title: PropTypes.string.isRequired,
  topPrice: PropTypes.number.isRequired,
  topQuantity: PropTypes.number.isRequired,
};

export default TrainSeatPopover;
