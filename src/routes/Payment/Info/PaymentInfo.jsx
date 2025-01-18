import Checkbox from "../../../components/Fields/Checkbox/Checkbox";
import Input from "../../../components/Fields/Input/Input";
import Paths from "../../../paths";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./PaymentInfo.css";

function PaymentInfo({ className }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    surname: "Мартынюк",
    name: "Ирина",
    patronymic: "Эдуардовна",
    contact_phone: "+7 953 322 18 18",
    email: "inbox@gmail.ru",
    payment_method: "cash",
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleClick = (event) => {
    event.preventDefault();

    navigate(Paths.ORDER_CONFIRMATION);
  };

  return (
    <div className={cn("payment-info", className)}>
      <div className="payment-info__form">
        <div className="payment-info__personal-data">
          <h2 className="payment-info__title">Персональные данные</h2>
          <div className="payment-info__content">
            <div className="payment-info__row">
              <div className="payment-info__group">
                <label className="payment-info__label" htmlFor="surname">Фамилия</label>
                <Input
                  className="payment-info__input payment-info__input--surname"
                  id="surname"
                  name="surname"
                  onChange={handleChangeInput}
                  type="text"
                  value={form.surname}
                />
              </div>
              <div className="payment-info__group">
                <label className="payment-info__label" htmlFor="name">Имя</label>
                <Input
                  className="payment-info__input payment-info__input--name"
                  id="name"
                  name="name"
                  onChange={handleChangeInput}
                  type="text"
                  value={form.name}
                />
              </div>
              <div className="payment-info__group">
                <label className="payment-info__label" htmlFor="patronymic">Отчество</label>
                <Input
                  className="payment-info__input payment-info__input--patronymic"
                  id="patronymic"
                  name="patronymic"
                  onChange={handleChangeInput}
                  type="text"
                  value={form.patronymic}
                />
              </div>
            </div>
            <div className="payment-info__row">
              <div className="payment-info__group">
                <label className="payment-info__label" htmlFor="contact_phone">Контактный телефон</label>
                <Input
                  className="payment-info__input payment-info__input--contact-phone"
                  id="contact_phone"
                  name="contact_phone"
                  onChange={handleChangeInput}
                  placeholder="+7 ___ ___ __ __"
                  type="tel"
                  value={form.contact_phone}
                />
              </div>
            </div>
            <div className="payment-info__row">
              <div className="payment-info__group">
                <label className="payment-info__label" htmlFor="email">E-mail</label>
                <Input
                  className="payment-info__input payment-info__input--email"
                  id="email"
                  name="email"
                  onChange={handleChangeInput}
                  placeholder="inbox@gmail.ru"
                  type="email"
                  value={form.email}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="payment-info__method">
          <h2 className="payment-info__title">Способ оплаты</h2>
          <div className="payment-info__content">
            <div className="payment-info__checkbox-group">
              <Checkbox
                checked={form.payment_method === "online"}
                className="payment-info__checkbox payment-info__checkbox--payment-method"
                id="payment_method-online"
                name="payment_method"
                onCheckedChange={(newValue) => {
                  setForm(prev => ({ ...prev, payment_method: newValue ? "online" : undefined }));
                }}
                value="online"
              />
              <label className="payment-info__label" htmlFor="payment_method-online">Онлайн</label>
            </div>
            <div className="payment-info__online-methods">
              <p>Банковской картой</p>
              <p>PayPal</p>
              <p>Visa QIWI Wallet</p>
            </div>
          </div>
          <div className="payment-info__content">
            <div className="payment-info__checkbox-group">
              <Checkbox
                checked={form.payment_method === "cash"}
                className="payment-info__checkbox payment-info__checkbox--payment-method"
                id="payment_method-cash"
                name="payment_method"
                onCheckedChange={(newValue) => {
                  setForm(prev => ({ ...prev, payment_method: newValue ? "cash" : undefined }));
                }}
                value="cash"
              />
              <label className="payment-info__label" htmlFor="payment_method-cash">Наличными</label>
            </div>
          </div>
        </div>
      </div>
      <button className="payment-info__btn" type="button" onClick={handleClick}>КУПИТЬ БИЛЕТЫ</button>
    </div>
  );
}

PaymentInfo.propTypes = { className: classNameType };

export default PaymentInfo;
