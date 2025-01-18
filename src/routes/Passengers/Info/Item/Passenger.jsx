import * as Collapsible from "@radix-ui/react-collapsible";
import Checkbox from "../../../../components/Fields/Checkbox/Checkbox";
import Datepicker from "../../../../components/Fields/Datepicker/Datepicker";
import Input from "../../../../components/Fields/Input/Input";
import InputOTP from "../../../../components/Fields/InputOTP/InputOTP";
import PropTypes from "prop-types";
import RadioGroup from "../../../../components/Fields/RadioGroup/RadioGroup";
import Select from "../../../../components/Fields/Select/Select";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import {
  passengerAges, passengerAgeType, passengerBirthCertificateNumberType, passengerBirthDateType, passengerDocumentTypes,
  passengerDocumentTypeType, passengerGenders, passengerGenderType, passengerHasLimitedMobilityType, passengerNameType,
  passengerPassportNumberType, passengerPassportSeriesType, passengerPatronymicType, passengerSurnameType,
} from "../../../../constants/passenger";
import { useEffect, useState } from "react";
import "./Passenger.css";

function Passenger({ className, number, open = false, values }) {
  const [form, setForm] = useState({
    age: undefined,
    surname: undefined,
    name: undefined,
    patronymic: undefined,
    gender: undefined,
    has_limited_mobility: false,
    document_type: undefined,
    passport_series: undefined,
    passport_number: undefined,
    birth_certificate_number: undefined,
  });
  const [isValid] = useState(values.birth_certificate_number === undefined ? undefined : true);
  const [validator] = useState({
    birth_certificate_number: values.birth_certificate_number === undefined ? undefined : true,
  });
  const [_open, setOpen] = useState(false);

  useEffect(() => {
    setForm(values);
  }, [values]);
  useEffect(() => {
    setOpen(open);
  }, [open]);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Collapsible.Root className={cn("passenger", className)} open={_open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="passenger__trigger">{`Пассажир ${number}`}</Collapsible.Trigger>
      <Collapsible.Content className="passenger__content">
        <button className="passenger__delete-btn">
          <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.3 0.3L6 4.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L4.6 6L0.3 10.3C-0.1 10.7 -0.1 11.3 0.3 11.6L0.4 11.7C0.8 12.1 1.4 12.1 1.7 11.7L6 7.4L10.2 11.6C10.6 12 11.2 12 11.6 11.6C12 11.2 12 10.6 11.6 10.2L7.4 6L11.7 1.7C12.1 1.3 12.1 0.7 11.7 0.4L11.6 0.3C11.2 -0.1 10.6 -0.1 10.3 0.3Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="passenger__container passenger__container--personal">
          <div className="passenger__row passenger__row--1">
            <Select
              contentClassName="passenger__select-content passenger__select-content--age"
              items={Object.entries(passengerAges).map(([value, text]) => ({ text, value }))}
              name="age"
              onValueChange={(newValue) => {
                setForm(prev => ({ ...prev, age: newValue }));
              }}
              triggerClassName="passenger__select-trigger passenger__select-trigger--age"
              value={form.age}
            />
          </div>
          <div className="passenger__row passenger__row--1">
            <div className="passenger__group">
              <label className="passenger__label" htmlFor="surname">Фамилия</label>
              <Input
                className="passenger__input passenger__input--surname"
                id="surname"
                name="surname"
                onChange={handleChangeInput}
                type="text"
                required
                value={form.surname}
              />
            </div>
            <div className="passenger__group">
              <label className="passenger__label" htmlFor="name">Имя</label>
              <Input
                className="passenger__input passenger__input--name"
                id="name"
                name="name"
                onChange={handleChangeInput}
                type="text"
                required
                value={form.name}
              />
            </div>
            <div className="passenger__group">
              <label className="passenger__label" htmlFor="patronymic">Отчество</label>
              <Input
                className="passenger__input passenger__input--patronymic"
                id="patronymic"
                name="patronymic"
                onChange={handleChangeInput}
                type="text"
                required
                value={form.patronymic}
              />
            </div>
          </div>
          <div className="passenger__row passenger__row--2">
            <fieldset className="passenger__group">
              <legend className="passenger__label">Пол</legend>
              <RadioGroup
                className="passenger__radio-group passenger__radio-group--gender"
                items={Object.entries(passengerGenders).map(([value, item]) => ({ text: item.abbr, value }))}
                name="gender"
                onValueChange={(newValue) => {
                  setForm(prev => ({ ...prev, gender: newValue }));
                }}
                value={form.gender}
              />
            </fieldset>
            <div className="passenger__group">
              <label className="passenger__label" htmlFor="birth_date">Дата рождения</label>
              <Datepicker
                className="passenger__datepicker passenger__datepicker--birth-date"
                id="birth_date"
                name="birth_date"
                onChange={(newValue) => {
                  setForm(prev => ({ ...prev, birth_date: newValue }));
                }}
                placeholder="ДД/ММ/ГГ"
                value={form.birth_date}
              />
            </div>
          </div>
          <div className="passenger__row passenger__row--2">
            <div className="passenger__checkbox-group">
              <Checkbox
                checked={form.has_limited_mobility}
                className="passenger__checkbox passenger__checkbox--has-limited-mobility"
                id="has_limited_mobility"
                name="has_limited_mobility"
                onCheckedChange={(newValue) => {
                  setForm(prev => ({ ...prev, has_limited_mobility: newValue }));
                }}
              />
              <label className="passenger__label" htmlFor="has_limited_mobility">ограниченная подвижность</label>
            </div>
          </div>
        </div>
        <div className="passenger__container passenger__container--document">
          <div className="passenger__row passenger__row--2">
            <div className="passenger__group">
              <label className="passenger__label" htmlFor="document_type">Тип документа</label>
              <Select
                contentClassName="passenger__select-content passenger__select-content--document-type"
                id="document_type"
                items={Object.entries(passengerDocumentTypes).map(([value, text]) => ({ text, value }))}
                name="document_type"
                onValueChange={(newValue) => {
                  setForm(prev => ({ ...prev, document_type: newValue }));
                }}
                triggerClassName={cn(
                  "passenger__select-trigger passenger__select-trigger--document-type",
                  form.document_type === "birth_certificate" && "w-[444px]",
                  form.document_type === "passport" && "w-[205px]",
                )}
                value={form.document_type}
              />
            </div>
            {form.document_type === "passport" && (
              <>
                <div className="passenger__group">
                  <label className="passenger__label mb-[13px]" htmlFor="passport_series">Серия</label>
                  <InputOTP
                    className="passenger__input-otp passenger__input-otp--passport-series"
                    maxLength={4}
                    onChange={(newValue) => {
                      setForm(prev => ({ ...prev, passport_series: newValue }));
                    }}
                    slotWidth="14px"
                    value={form.passport_series}
                  />
                </div>
                <div className="passenger__group">
                  <label className="passenger__label mb-[13px]" htmlFor="passport_number">Номер</label>
                  <InputOTP
                    className="passenger__input-otp passenger__input-otp--passport-number"
                    maxLength={6}
                    onChange={(newValue) => {
                      setForm(prev => ({ ...prev, passport_number: newValue }));
                    }}
                    slotWidth="14px"
                    value={form.passport_number}
                  />
                </div>
              </>
            )}
            {form.document_type === "birth_certificate" && (
              <>
                <div className="passenger__group">
                  <label className="passenger__label mb-[15px] ml-[1px]" htmlFor="birth_certificate_number">
                    Номер
                  </label>
                  <InputOTP
                    className={cn(
                      "passenger__input-otp passenger__input-otp--birth-certificate-number",
                      validator.birth_certificate_number === false && "invalid",
                    )}
                    maxLength={12}
                    onChange={(newValue) => {
                      setForm(prev => ({ ...prev, birth_certificate_number: newValue }));
                    }}
                    slotWidth="18px"
                    value={form.birth_certificate_number}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className={cn(
            "passenger__footer",
            isValid === true && "is-valid",
            isValid === false && "is-invalid",
          )}
        >
          {isValid === true && (
            <p className="passenger__valid-message">Готово</p>
          )}
          {isValid === false && (
            <div className="passenger__invalid-messages">
              {validator.birth_certificate_number === false && (
                <p className="passenger__invalid-message">
                  Номер свидетельства о рождении указан некорректно
                  <br />
                  {"Пример: "}
                  <span className="font-bold">VIII-ЫП-123456</span>
                </p>
              )}
            </div>
          )}
          {isValid !== false && (
            <button className="passenger__btn">Следующий пассажир</button>
          )}
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

Passenger.propTypes = {
  className: classNameType,
  number: PropTypes.number.isRequired,
  open: PropTypes.bool,
  values: PropTypes.shape({
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
  }),
};

export default Passenger;
