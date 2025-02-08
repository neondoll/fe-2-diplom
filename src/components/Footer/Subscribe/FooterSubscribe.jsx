import Api from "../../../api";
import Button from "../../Button/Button";
import Dialog from "../../Dialog/Dialog";
import FooterSubscribeSocial from "./Social/FooterSubscribeSocial";
import Input from "../../Fields/Input/Input";
import Validator from "validator/es";
import { classNameType } from "../../../types/base";
import { cn, getResponseError } from "../../../lib/utils";
import { useState } from "react";
import "./FooterSubscribe.css";

function FooterSubscribe({ className }) {
  const [form, setForm] = useState({ email: "" });
  const [subscribeErrorOpen, setSubscribeErrorOpen] = useState(false);
  const [subscribeInfoOpen, setSubscribeInfoOpen] = useState(false);
  const [validator, setValidator] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm(prev => ({ ...prev, [name]: value }));

    if (name === "email") {
      setValidator(prev => ({ ...prev, [name]: Validator.isEmail(value) }));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(Api.SUBSCRIBE, {
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setSubscribeInfoOpen(true);
        setForm({ email: "" });
        setValidator({});
      })
      .catch((e) => {
        console.error(getResponseError(e));
        setSubscribeErrorOpen(true);
      });
  };

  return (
    <div className={cn("footer-subscribe", className)}>
      <h2 className="footer-subscribe__title">Подписка</h2>
      <p className="footer-subscribe__subtitle">Будьте в курсе событий</p>
      <form className="footer-subscribe__form" onSubmit={handleSubmit}>
        <Input
          className={cn("footer-subscribe__input", validator.email === false && "invalid")}
          name="email"
          onChange={handleChange}
          placeholder="e-mail"
          required
          type="email"
          value={form.email}
        />
        <span className="footer-subscribe__error">Введите e-mail в формате example@site.com</span>
        <Button className="footer-subscribe__button" type="submit" variant="send">отправить</Button>
        <Dialog
          description="Сервер недоступен. Пожалуйста, попробуйте позже"
          onOpenChange={setSubscribeErrorOpen}
          open={subscribeErrorOpen}
          title="Сообщение об ошибке"
          type="error"
        />
        <Dialog
          onOpenChange={setSubscribeInfoOpen}
          open={subscribeInfoOpen}
          title="Вы успешно подписались на рассылку"
          type="info"
        />
      </form>
      <FooterSubscribeSocial className="footer-subscribe__social" />
    </div>
  );
}

FooterSubscribe.propTypes = { className: classNameType };

export default FooterSubscribe;
