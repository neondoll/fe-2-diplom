import AdditionalOptionsInCarriages
  from "../../../../../components/AdditionalOptionsInCarriages/AdditionalOptionsInCarriages";
import PropTypes from "prop-types";
import { classNameType } from "../../../../../types/base";
import { cn, formatPrice } from "../../../../../lib/utils";
import { coachType } from "../../../../../types/seat";
import "./SelectionSeatsCoachDetailsBody.css";

function SelectionSeatsCoachDetailsBody({ className, coach, onChange, values }) {
  return (
    <div className={cn("selection-seats-coach-details-body", className)}>
      {coach && (
        <>
          <div className="selection-seats-coach-details-body__number">{coach.coach.name}</div>
          <div className="selection-seats-coach-details-body__places selection-seats-coach-details-body-places">
            <p className="selection-seats-coach-details-body-places__title">
              Места&nbsp;&nbsp;
              <span>{coach.coach.available_seats}</span>
            </p>
            {coach.coach.price > 0 && (
              <p className="selection-seats-coach-details-body-places__item">
                &nbsp;&nbsp;
                <span>{/* coach.coach.avaliable_seats */}</span>
              </p>
            )}
            {coach.coach.top_price > 0 && (
              <p className="selection-seats-coach-details-body-places__item">
                Верхние&nbsp;&nbsp;
                <span>{/* coach.coach.top_avaliable_seats */}</span>
              </p>
            )}
            {coach.coach.bottom_price > 0 && (
              <p className="selection-seats-coach-details-body-places__item">
                Нижние&nbsp;&nbsp;
                <span>{/* coach.coach.bottom_avaliable_seats */}</span>
              </p>
            )}
            {coach.coach.side_price > 0 && (
              <p className="selection-seats-coach-details-body-places__item">
                Боковые&nbsp;&nbsp;
                <span>{/* coach.coach.side_avaliable_seats */}</span>
              </p>
            )}
          </div>
          <div className="selection-seats-coach-details-body__price selection-seats-coach-details-body-price">
            <p className="selection-seats-coach-details-body-price__title">Стоимость</p>
            {coach.coach.price > 0 && (
              <p className="selection-seats-coach-details-body-price__item">{formatPrice(coach.coach.price)}</p>
            )}
            {coach.coach.top_price > 0 && (
              <p className="selection-seats-coach-details-body-price__item">{formatPrice(coach.coach.top_price)}</p>
            )}
            {coach.coach.bottom_price > 0 && (
              <p className="selection-seats-coach-details-body-price__item">{formatPrice(coach.coach.bottom_price)}</p>
            )}
            {coach.coach.side_price > 0 && (
              <p className="selection-seats-coach-details-body-price__item">{formatPrice(coach.coach.side_price)}</p>
            )}
          </div>
          <div className="selection-seats-coach-details-body__services selection-seats-coach-details-body-services">
            <div className="selection-seats-coach-details-body-services__header">
              <p className="selection-seats-coach-details-body-services__title">Обслуживание</p>
              <p className="selection-seats-coach-details-body-services__subtitle">фпк</p>
            </div>
            <AdditionalOptionsInCarriages
              className="selection-seats-coach-details-body-services__items"
              haveAirConditioning={coach.coach.have_air_conditioning}
              haveWifi={coach.coach.have_wifi}
              isLinensIncluded={coach.coach.is_linens_included}
              linensPrice={coach.coach.linens_price}
              onChange={onChange}
              values={values}
              wifiPrice={coach.coach.wifi_price}
            />
          </div>
        </>
      )}
    </div>
  );
}

SelectionSeatsCoachDetailsBody.propTypes = {
  className: classNameType,
  coach: coachType,
  onChange: PropTypes.func,
  values: PropTypes.shape({ linens: PropTypes.bool, wifi: PropTypes.bool }),
};

export default SelectionSeatsCoachDetailsBody;
