import { classNameType } from "../../../../../types/base";
import { cn, formatPrice } from "../../../../../lib/utils";
import { orderOptionsType, orderSeatsType } from "../../../../../types/order";
import { useEffect, useState } from "react";
import "./SelectionSeatsCoachDetailsFooter.css";

function SelectionSeatsCoachDetailsFooter({ className, options, seats }) {
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    if (options) {
      Object.values(options).forEach((value) => {
        price += value;
      });
    }

    if (seats) {
      seats.forEach((seat) => {
        price += seat.price;
      });
    }

    setFinalPrice(price);
  }, [options, seats]);

  return (
    <div className={cn("selection-seats-coach-details-footer", className)}>
      {finalPrice > 0 && (
        <p className="selection-seats-coach-details-footer__final-price">{formatPrice(finalPrice)}</p>
      )}
    </div>
  );
}

SelectionSeatsCoachDetailsFooter.propTypes = {
  className: classNameType,
  options: orderOptionsType,
  seats: orderSeatsType,
};

export default SelectionSeatsCoachDetailsFooter;
