import { classNameType } from "../../../../../types/base";
import { cn, formatPrice } from "../../../../../lib/utils";
import { coachPriceType } from "../../../../../types/coach";
import { useEffect, useState } from "react";
import "./SelectionSeatsCoachDetailsFooter.css";
import PropTypes from "prop-types";

function SelectionSeatsCoachDetailsFooter({ className, seats }) {
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    if (seats) {
      seats.forEach((seat) => {
        price += seat.price;
      });
    }

    setFinalPrice(price);
  }, [seats]);

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
  options: PropTypes.shape({ linens: PropTypes.bool, wifi: PropTypes.bool }),
  seats: PropTypes.arrayOf(PropTypes.shape({ index: PropTypes.number, price: coachPriceType })),
};

export default SelectionSeatsCoachDetailsFooter;
