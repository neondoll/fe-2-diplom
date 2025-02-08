import Checkbox from "../../../components/Fields/Checkbox/Checkbox";
import Input from "../../../components/Fields/Input/Input";
import Paths from "../../../paths";
import Validator from "validator/es";
import { changeOrder, selectOrder } from "../../../slices/order";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PaymentInfo.css";

function PaymentInfo({ className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector(selectOrder);
  const [form, setForm] = useState({
    first_name: "", // имя
    last_name: "", // фамилия
    patronymic: "", // отчество
    phone: "", // телефон
    email: "", // E-mail
    payment_method: undefined, // метод оплаты (cash или online)
  });

  useEffect(() => {
    if (order.user) {
      setForm(order.user);
    }
  }, [order.user]);

  const btnEnable = () => form.email && form.first_name && form.last_name && form.payment_method && form.phone;
  const handleClick = (event) => {
    event.preventDefault();

    if (btnEnable()) {
      dispatch(changeOrder({ name: "user", value: form }));
      navigate(Paths.ORDER_CONFIRMATION);
    }
  };
  const handleContactPhoneChange = (event) => {
    const { name, value } = event.target;

    setForm(prev => ({ ...prev, [name]: value.replace(/^((\+7|7|8)+([0-9]){11})$/g, "").replace(/[0-9]{12}/g, "") }));
  };
  const handleEmailChange = (event) => {
    const { name, value } = event.target;

    event.target.style.borderColor = Validator.isEmail(value) ? "" : "#ff3d00";
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleFullNameChange = (event) => {
    const { name, value } = event.target;

    setForm(prev => ({ ...prev, [name]: value.replace(/[^a-zA-ZА-я]/gi, "") }));
  };

  return (
    <div className={cn("payment-info", className)}>
      <div className="payment-info__form">
        <div className="payment-info__personal-data">
          <h2 className="payment-info__title">Персональные данные</h2>
          <div className="payment-info__content">
            <div className="payment-info__row">
              <div className="payment-info__group">
                <label className="payment-info__label" htmlFor="last_name">Фамилия</label>
                <Input
                  className="payment-info__input payment-info__input--last-name"
                  id="last_name"
                  name="last_name"
                  onChange={handleFullNameChange}
                  type="text"
                  value={form.last_name}
                />
              </div>
              <div className="payment-info__group">
                <label className="payment-info__label" htmlFor="first_name">Имя</label>
                <Input
                  className="payment-info__input payment-info__input--first-name"
                  id="first_name"
                  name="first_name"
                  onChange={handleFullNameChange}
                  type="text"
                  value={form.first_name}
                />
              </div>
              <div className="payment-info__group">
                <label className="payment-info__label" htmlFor="patronymic">Отчество</label>
                <Input
                  className="payment-info__input payment-info__input--patronymic"
                  id="patronymic"
                  name="patronymic"
                  onChange={handleFullNameChange}
                  type="text"
                  value={form.patronymic}
                />
              </div>
            </div>
            <div className="payment-info__row">
              <div className="payment-info__group">
                <label className="payment-info__label" htmlFor="phone">Контактный телефон</label>
                <Input
                  className="payment-info__input payment-info__input--phone"
                  id="phone"
                  name="phone"
                  onChange={handleContactPhoneChange}
                  placeholder="+7 ___ ___ __ __"
                  type="tel"
                  value={form.phone}
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
                  onChange={handleEmailChange}
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
                onCheckedChange={newValue => setForm(prev => ({
                  ...prev,
                  payment_method: newValue ? "online" : undefined,
                }))}
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
                onCheckedChange={newValue => setForm(prev => ({
                  ...prev,
                  payment_method: newValue ? "cash" : undefined,
                }))}
                value="cash"
              />
              <label className="payment-info__label" htmlFor="payment_method-cash">Наличными</label>
            </div>
          </div>
        </div>
      </div>
      {btnEnable() && (
        <button className="payment-info__btn" type="button" onClick={handleClick}>КУПИТЬ БИЛЕТЫ</button>
      )}
    </div>
  );
}

PaymentInfo.propTypes = { className: classNameType };

export default PaymentInfo;
