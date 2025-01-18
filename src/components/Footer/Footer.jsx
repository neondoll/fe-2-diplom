import FooterContact from "./Contact/FooterContact";
import FooterCopyright from "./Copyright/FooterCopyright";
import FooterSubscribe from "./Subscribe/FooterSubscribe";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <FooterContact className="footer__contact" id="contacts" />
        <FooterSubscribe className="footer__subscribe" />
      </div>
      <hr className="footer__line" />
      <FooterCopyright />
    </footer>
  );
}
