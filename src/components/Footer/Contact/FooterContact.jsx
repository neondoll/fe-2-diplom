import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";
import "./FooterContact.css";

const contacts = [
  { href: "tel:88000000000", text: "8 (800) 000 00 00", type: "phone" },
  { href: "mailto:inbox@mail.ru", text: "inbox@mail.ru", type: "email" },
  { href: "Skype:tu.train.tickets?call", text: "tu.train.tickets", type: "skype" },
  { href: "https://yandex.ru/maps/-/CDFwyMjA", text: "г. Москва \nул. Московская 27-35\n555 555", type: "location" },
];

function FooterContact({ className, ...props }) {
  return (
    <div className={cn("footer-contact", className)} {...props}>
      <h2 className="footer-contact__title">Свяжитесь с нами</h2>
      <ul className="footer-contact__list">
        {contacts.map(contact => (
          <li className={`footer-contact__item footer-contact__item--${contact.type}`} key={contact.type}>
            <Link className="footer-contact__link" target="_blank" to={contact.href}>{contact.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterContact.propTypes = { className: classNameType };

export default FooterContact;
