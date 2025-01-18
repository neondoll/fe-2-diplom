import AdditionalOptionsInCarriages
  from "../../../../../components/AdditionalOptionsInCarriages/AdditionalOptionsInCarriages";
import PropTypes from "prop-types";
import { classNameType } from "../../../../../types/base";
import { cn, formatPrice } from "../../../../../lib/utils";
import { firstWagon, fourthWagon, secondWagon, thirdWagon } from "../../../../../constants/train";
import "./SelectionSeatsWagonDetailsBody.css";

function SelectionSeatsWagonDetailsBody({ className, wagon }) {
  const totalSeats = (seats) => {
    let total = 0;

    if (seats) {
      if ("available" in seats && Array.isArray(seats.available)) {
        total += seats.available.length;
      }

      if ("upper" in seats && "available" in seats.upper && Array.isArray(seats.upper.available)) {
        total += seats.upper.available.length;
      }

      if ("lower" in seats && "available" in seats.lower && Array.isArray(seats.lower.available)) {
        total += seats.lower.available.length;
      }
    }

    return total;
  };

  console.log(wagon);

  return (
    <div className={cn("selection-seats-wagon-details-body", className)}>
      {wagon && (
        <>
          <div className="selection-seats-wagon-details-body__number">{wagon.number}</div>
          <div className="selection-seats-wagon-details-body__places selection-seats-wagon-details-body-places">
            <p className="selection-seats-wagon-details-body-places__title">
              Места&nbsp;&nbsp;
              <span>{totalSeats(wagon.seats)}</span>
            </p>
            {(
              "upper" in wagon.seats
              && "available" in wagon.seats.upper
              && Array.isArray(wagon.seats.upper.available)
            ) && (
              <p className="selection-seats-wagon-details-body-places__item">
                Верхние&nbsp;&nbsp;
                <span>{wagon.seats.upper.available.length}</span>
              </p>
            )}
            {(
              "lower" in wagon.seats
              && "available" in wagon.seats.lower
              && Array.isArray(wagon.seats.lower.available)
            ) && (
              <p className="selection-seats-wagon-details-body-places__item">
                Нижние&nbsp;&nbsp;
                <span>{wagon.seats.lower.available.length}</span>
              </p>
            )}
          </div>
          <div className="selection-seats-wagon-details-body__price selection-seats-wagon-details-body-price">
            <p className="selection-seats-wagon-details-body-price__title">Стоимость</p>
            {"price" in wagon.seats && (
              <p className="selection-seats-wagon-details-body-price__item">{formatPrice(wagon.seats.price)}</p>
            )}
            {("upper" in wagon.seats && "price" in wagon.seats.upper) && (
              <p className="selection-seats-wagon-details-body-price__item">{formatPrice(wagon.seats.upper.price)}</p>
            )}
            {("lower" in wagon.seats && "price" in wagon.seats.lower) && (
              <p className="selection-seats-wagon-details-body-price__item">{formatPrice(wagon.seats.lower.price)}</p>
            )}
          </div>
          <div className="selection-seats-wagon-details-body__services selection-seats-wagon-details-body-services">
            <div className="selection-seats-wagon-details-body-services__header">
              <p className="selection-seats-wagon-details-body-services__title">Обслуживание</p>
              <p className="selection-seats-wagon-details-body-services__subtitle">фпк</p>
            </div>
            <AdditionalOptionsInCarriages
              className="selection-seats-wagon-details-body-services__items"
              values={{ airConditioner: undefined, wifi: undefined, linen: "selected", nutrition: "selected" }}
            />
          </div>
        </>
      )}
    </div>
  );
}

SelectionSeatsWagonDetailsBody.propTypes = {
  className: classNameType,
  wagon: PropTypes.oneOfType([firstWagon, secondWagon, thirdWagon, fourthWagon]),
};

export default SelectionSeatsWagonDetailsBody;
