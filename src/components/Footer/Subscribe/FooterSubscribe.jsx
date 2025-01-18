import Button from "../../Button/Button";
import FooterSubscribeSocial from "./Social/FooterSubscribeSocial";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./FooterSubscribe.css";

function FooterSubscribe({ className }) {
  return (
    <div className={cn("footer-subscribe", className)}>
      <h2 className="footer-subscribe__title">Подписка</h2>
      <p className="footer-subscribe__subtitle">Будьте в курсе событий</p>
      <form className="footer-subscribe__form">
        <input className="footer-subscribe__input" name="email" placeholder="e-mail" required type="email" />
        <span className="footer-subscribe__error">Введите e-mail в формате example@site.com</span>
        <Button className="footer-subscribe__button" type="submit" variant="send">отправить</Button>
      </form>
      <FooterSubscribeSocial className="footer-subscribe__social" />
    </div>
  );
}

FooterSubscribe.propTypes = { className: classNameType };

export default FooterSubscribe;
