import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { format } from "date-fns";
import {
  passengerAges, passengerAgeType, passengerBirthCertificateNumberType, passengerBirthDateType, passengerDocumentTypes,
  passengerDocumentTypeType, passengerGenders, passengerGenderType, passengerNameType, passengerPassportNumberType,
  passengerPassportSeriesType, passengerPatronymicType, passengerSurnameType,
} from "../../../constants/passenger";
import "./OrderConfirmationPassenger.css";

function OrderConfirmationPassenger({ className, item }) {
  return (
    <div className={cn("order-confirmation-passenger", className)}>
      <div className="order-confirmation-passenger__logo">
        <svg
          className="order-confirmation-passenger__icon"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 68 68"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34 0C15.2492 0 0 15.2492 0 34C0 52.7508 15.2492 68 34 68C52.7508 68 68 52.7508 68 34C68 15.2492 52.7508 0 34 0ZM33.887 16.3787C38.8571 16.3787 42.9236 20.3322 42.9236 25.3023C42.9236 30.2724 38.9701 34.3389 34 34.3389C29.0299 34.3389 24.9635 30.2724 24.9635 25.3023C25.0764 20.4452 29.0299 16.3787 33.887 16.3787ZM51.9601 52.186C39.8738 52.186 28.1262 52.186 16.2658 52.186C15.701 46.5382 15.701 44.392 21.3488 41.6811C29.7076 37.7276 38.2924 37.7276 46.7641 41.6811C47.8937 42.1329 48.9103 42.9236 49.8139 43.6013C51.2824 44.8439 52.0731 46.4252 51.9601 48.3455C51.9601 49.701 51.9601 50.8306 51.9601 52.186Z"
            fill="#FFA800"
          />
        </svg>
        <p className="order-confirmation-passenger__age">{passengerAges[item.age]}</p>
      </div>
      <div className="order-confirmation-passenger__info">
        <p className="order-confirmation-passenger__full-name">{`${item.surname} ${item.name} ${item.patronymic}`}</p>
        <p className="order-confirmation-passenger__gender">
          {"Пол "}
          <span className="lowercase">{passengerGenders[item.gender].name}</span>
        </p>
        <p className="order-confirmation-passenger__birth-date">
          {`Дата рождения ${format(new Date(item.birth_date), "dd.MM.yyyy")}`}
        </p>
        <p className="order-confirmation-passenger__document">
          {`${passengerDocumentTypes[item.document_type]} `}
          {item.document_type === "passport" && `${item.passport_series} ${item.passport_number}`}
          {item.document_type === "birth_certificate" && item.birth_certificate_number}
        </p>
      </div>
    </div>
  );
}

OrderConfirmationPassenger.propTypes = {
  className: classNameType,
  item: PropTypes.shape({
    age: passengerAgeType,
    surname: passengerSurnameType,
    name: passengerNameType,
    patronymic: passengerPatronymicType,
    gender: passengerGenderType,
    birth_date: passengerBirthDateType,
    document_type: passengerDocumentTypeType,
    passport_series: passengerPassportSeriesType,
    passport_number: passengerPassportNumberType,
    birth_certificate_number: passengerBirthCertificateNumberType,
  }),
};

export default OrderConfirmationPassenger;
