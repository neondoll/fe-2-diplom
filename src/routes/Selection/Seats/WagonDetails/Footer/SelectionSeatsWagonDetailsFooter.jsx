import PropTypes from "prop-types";
import { classNameType } from "../../../../../types/base";
import { cn, formatPrice } from "../../../../../lib/utils";
import { fourthWagon, seatType, secondWagon, thirdWagon } from "../../../../../constants/train";
import { useEffect, useState } from "react";
import "./SelectionSeatsWagonDetailsFooter.css";

function SelectionSeatsWagonDetailsFooter({ className, seats, wagon }) {
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    if (seats && wagon) {
      seats.forEach((seat) => {
        if (
          "available" in wagon.seats
          && Array.isArray(wagon.seats.available)
          && wagon.seats.available.includes(seat)
          && "price" in wagon.seats
        ) {
          price += wagon.seats.price;
        }

        if (
          "upper" in wagon.seats
          && "available" in wagon.seats.upper
          && Array.isArray(wagon.seats.upper.available)
          && wagon.seats.upper.available.includes(seat)
          && "price" in wagon.seats.upper
        ) {
          price += wagon.seats.upper.price;
        }

        if (
          "lower" in wagon.seats
          && "available" in wagon.seats.lower
          && Array.isArray(wagon.seats.lower.available)
          && wagon.seats.lower.available.includes(seat)
          && "price" in wagon.seats.lower
        ) {
          price += wagon.seats.lower.price;
        }
      });
    }

    setFinalPrice(price);
  }, [seats, wagon]);

  return (
    <div className={cn("selection-seats-wagon-details-footer", className)}>
      {finalPrice > 0 && (
        <p className="selection-seats-wagon-details-footer__final-price">{formatPrice(finalPrice)}</p>
      )}
    </div>
  );
}

SelectionSeatsWagonDetailsFooter.propTypes = {
  className: classNameType,
  seats: PropTypes.arrayOf(seatType),
  wagon: PropTypes.oneOfType([secondWagon, thirdWagon, fourthWagon]),
};

export default SelectionSeatsWagonDetailsFooter;
