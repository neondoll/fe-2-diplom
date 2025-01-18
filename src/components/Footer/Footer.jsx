import FooterContact from "./Contact/FooterContact";
import FooterCopyright from "./Copyright/FooterCopyright";
import FooterSubscribe from "./Subscribe/FooterSubscribe";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./Footer.css";

function Footer({ className }) {
  return (
    <footer className={cn("footer", className)}>
      <div className="footer__container container">
        <FooterContact className="footer__contact" id="contacts" />
        <FooterSubscribe className="footer__subscribe" />
      </div>
      <hr className="footer__line" />
      <FooterCopyright className="footer__copyright" />
    </footer>
  );
}

Footer.propTypes = { className: classNameType };

export default Footer;
