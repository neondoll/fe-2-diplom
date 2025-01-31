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
  passengerAges, passengerDocumentTypes, passengerGenders, passengerType,
} from "../../../../constants/passenger";
import { useEffect, useState } from "react";
import "./Passenger.css";

const validators = {
  age: values => Boolean(values.age),
  birth_certificate_number: (values) => {
    return values.document_type === "birth_certificate"
      ? (Boolean(values.birth_certificate_number) && values.birth_certificate_number.length === 12)
      : undefined;
  },
  birth_date: values => Boolean(values.birth_date) && (new Date(values.birth_date)).getTime() <= Date.now(),
  document_type: values => Boolean(values.document_type),
  gender: values => Boolean(values.gender),
  has_limited_mobility: () => true,
  name: values => Boolean(values.name),
  passport_number: (values) => {
    return values.document_type === "passport"
      ? (Boolean(values.passport_number) && values.passport_number.length === 6)
      : undefined;
  },
  passport_series: (values) => {
    return values.document_type === "passport"
      ? (Boolean(values.passport_series) && values.passport_series.length === 4)
      : undefined;
  },
  patronymic: values => Boolean(values.patronymic) || undefined,
  surname: values => Boolean(values.surname),
};

function Passenger({ className, number, onDelete, onSubmit, values }) {
  const [form, setForm] = useState({
    age: null,
    surname: "",
    name: "",
    patronymic: "",
    gender: null,
    birth_date: null,
    has_limited_mobility: false,
    document_type: null,
    passport_series: null,
    passport_number: null,
    birth_certificate_number: null,
  });
  const [isValid, setIsValid] = useState(undefined);
  const [validator, setValidator] = useState({});

  useEffect(() => {
    if (values) {
      setForm(values);
    }
  }, [values]);

  const handleDeleteClick = (event) => {
    event.preventDefault();

    setForm({
      age: null,
      surname: "",
      name: "",
      patronymic: "",
      gender: null,
      birth_date: null,
      has_limited_mobility: false,
      document_type: null,
      passport_series: null,
      passport_number: null,
      birth_certificate_number: null,
    });
    setIsValid(undefined);
    setValidator({});
    onDelete();
  };
  const handleSubmitClick = (event) => {
    event.preventDefault();

    const validator = {};

    Object.keys(form).forEach((key) => {
      validator[key] = validators[key](form);
    });

    const isValid = Object.values(validator).every(value => value !== false);

    setValidator(validator);
    setIsValid(isValid);

    if (isValid) {
      onSubmit(form);
    }
  };
  const handleFullNameChange = (event) => {
    const { name, value } = event.target;

    updateForm(name, value.replace(/[^a-zA-ZА-я]/gi, ""));
  };
  const updateForm = (name, value) => {
    console.log("updateForm", name, value);

    const _form = { ...form, [name]: value };
    const _validator = { ...validator, [name]: validators[name](_form) };

    if (name === "document_type") {
      _validator.birth_certificate_number = validators.birth_certificate_number(_form);
      _validator.passport_number = validators.passport_number(_form);
      _validator.passport_series = validators.passport_series(_form);
    }

    setForm(_form);
    setValidator(_validator);

    if (isValid !== undefined) {
      setIsValid(Object.values(_validator).every(value => value !== false));
    }
  };

  return (
    <Collapsible.Root className={cn("passenger", className)}>
      <Collapsible.Trigger className="passenger__trigger">{`Пассажир ${number}`}</Collapsible.Trigger>
      <Collapsible.Content className="passenger__content">
        <button className="passenger__delete-btn" onClick={handleDeleteClick} type="button">
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
              onValueChange={newValue => updateForm("age", newValue)}
              triggerClassName={cn(
                "passenger__select-trigger passenger__select-trigger--age",
                validator.age === false && "invalid",
              )}
              value={form.age}
            />
          </div>
          <div className="passenger__row passenger__row--1">
            <div className="passenger__group">
              <label className="passenger__label" htmlFor="surname">Фамилия</label>
              <Input
                className={cn(
                  "passenger__input passenger__input--surname",
                  validator.surname === false && "invalid",
                )}
                id="surname"
                name="surname"
                onChange={handleFullNameChange}
                type="text"
                value={form.surname}
              />
            </div>
            <div className="passenger__group">
              <label className="passenger__label" htmlFor="name">Имя</label>
              <Input
                className={cn(
                  "passenger__input passenger__input--name",
                  validator.name === false && "invalid",
                )}
                id="name"
                name="name"
                onChange={handleFullNameChange}
                type="text"
                value={form.name}
              />
            </div>
            <div className="passenger__group">
              <label className="passenger__label" htmlFor="patronymic">Отчество</label>
              <Input
                className={cn(
                  "passenger__input passenger__input--patronymic",
                  validator.patronymic === false && "invalid",
                )}
                id="patronymic"
                name="patronymic"
                onChange={handleFullNameChange}
                type="text"
                value={form.patronymic}
              />
            </div>
          </div>
          <div className="passenger__row passenger__row--2">
            <fieldset className="passenger__group">
              <legend className="passenger__label">Пол</legend>
              <RadioGroup
                className={cn(
                  "passenger__radio-group passenger__radio-group--gender",
                  validator.gender === false && "invalid",
                )}
                items={Object.entries(passengerGenders).map(([value, item]) => ({ text: item.abbr, value }))}
                name="gender"
                onValueChange={newValue => updateForm("gender", newValue)}
                value={form.gender}
              />
            </fieldset>
            <div className="passenger__group">
              <label className="passenger__label" htmlFor="birth_date">Дата рождения</label>
              <Datepicker
                className={cn(
                  "passenger__datepicker passenger__datepicker--birth-date",
                  validator.birth_date === false && "invalid",
                )}
                id="birth_date"
                name="birth_date"
                onChange={newValue => updateForm("birth_date", newValue)}
                placeholder="ДД/ММ/ГГ"
                value={form.birth_date}
              />
            </div>
          </div>
          <div className="passenger__row passenger__row--2">
            <div className="passenger__checkbox-group">
              <Checkbox
                checked={form.has_limited_mobility}
                className={cn(
                  "passenger__checkbox passenger__checkbox--has-limited-mobility",
                  validator.has_limited_mobility === false && "invalid",
                )}
                id="has_limited_mobility"
                name="has_limited_mobility"
                onCheckedChange={newValue => updateForm("has_limited_mobility", newValue)}
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
                onValueChange={newValue => updateForm("document_type", newValue)}
                triggerClassName={cn(
                  "passenger__select-trigger passenger__select-trigger--document-type",
                  form.document_type === "birth_certificate" && "!w-111",
                  form.document_type === "passport" && "!w-51.25",
                  validator.document_type === false && "invalid",
                )}
                value={form.document_type}
              />
            </div>
            {form.document_type === "passport" && (
              <>
                <div className="passenger__group">
                  <label className="passenger__label" htmlFor="passport_series">Серия</label>
                  <InputOTP
                    className={cn(
                      "passenger__input-otp passenger__input-otp--passport-series",
                      validator.passport_series === false && "invalid",
                    )}
                    maxLength={4}
                    onChange={newValue => updateForm("passport_series", newValue)}
                    slotWidth="14px"
                    value={form.passport_series}
                  />
                </div>
                <div className="passenger__group">
                  <label className="passenger__label" htmlFor="passport_number">Номер</label>
                  <InputOTP
                    className={cn(
                      "passenger__input-otp passenger__input-otp--passport-number",
                      validator.passport_number === false && "invalid",
                    )}
                    maxLength={6}
                    onChange={newValue => updateForm("passport_number", newValue)}
                    slotWidth="14px"
                    value={form.passport_number}
                  />
                </div>
              </>
            )}
            {form.document_type === "birth_certificate" && (
              <>
                <div className="passenger__group">
                  <label className="passenger__label" htmlFor="birth_certificate_number">Номер</label>
                  <InputOTP
                    className={cn(
                      "passenger__input-otp passenger__input-otp--birth-certificate-number",
                      validator.birth_certificate_number === false && "invalid",
                    )}
                    maxLength={12}
                    onChange={newValue => updateForm("birth_certificate_number", newValue)}
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
              {validator.age === false && (
                <p className="passenger__invalid-message">Возраст указан некорректно</p>
              )}
              {(validator.surname === false || validator.name === false || validator.patronymic === false) && (
                <p className="passenger__invalid-message">ФИО указано некорректно</p>
              )}
              {validator.gender === false && (
                <p className="passenger__invalid-message">Пол указан некорректно</p>
              )}
              {validator.birth_date === false && (
                <p className="passenger__invalid-message">Дата рождения указана некорректно</p>
              )}
              {validator.document_type === false && (
                <p className="passenger__invalid-message">Тип документа указан некорректно</p>
              )}
              {validator.passport_series === false && (
                <p className="passenger__invalid-message">Серия паспорта РФ указана некорректно</p>
              )}
              {validator.passport_number === false && (
                <p className="passenger__invalid-message">Номер паспорта РФ указан некорректно</p>
              )}
              {validator.birth_certificate_number === false && (
                <p className="passenger__invalid-message">Номер свидетельства о рождении указан некорректно</p>
              )}
            </div>
          )}
          {isValid !== false && (
            <button className="passenger__btn" onClick={handleSubmitClick} type="button">Следующий пассажир</button>
          )}
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

Passenger.propTypes = {
  className: classNameType,
  number: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
  onSubmit: PropTypes.func,
  values: passengerType,
};

export default Passenger;
