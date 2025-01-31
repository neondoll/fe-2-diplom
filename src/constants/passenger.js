import PropTypes from "prop-types";

export const passengerAges = { children: "Детский", adults: "Взрослый" };
export const passengerDocumentTypes = { passport: "Паспорт РФ", birth_certificate: "Свидетельство о рождении" };
export const passengerGenders = { male: { name: "Мужской", abbr: "М" }, female: { name: "Женский", abbr: "Ж" } };

export const passengerAgeType = PropTypes.oneOf(["adults", "children"]);
export const passengerBirthCertificateNumberType = PropTypes.string;
export const passengerBirthDateType = PropTypes.string;
export const passengerDocumentTypeType = PropTypes.oneOf(["birth_certificate", "passport"]);
export const passengerGenderType = PropTypes.oneOf(["female", "male"]);
export const passengerHasLimitedMobilityType = PropTypes.bool;
export const passengerNameType = PropTypes.string;
export const passengerPassportNumberType = PropTypes.string;
export const passengerPassportSeriesType = PropTypes.string;
export const passengerPatronymicType = PropTypes.string;
export const passengerSurnameType = PropTypes.string;
export const passengerType = PropTypes.shape({
  age: passengerAgeType,
  surname: passengerSurnameType,
  name: passengerNameType,
  patronymic: passengerPatronymicType,
  gender: passengerGenderType,
  birth_date: passengerBirthDateType,
  has_limited_mobility: passengerHasLimitedMobilityType,
  document_type: passengerDocumentTypeType,
  passport_series: passengerPassportSeriesType,
  passport_number: passengerPassportNumberType,
  birth_certificate_number: passengerBirthCertificateNumberType,
});
