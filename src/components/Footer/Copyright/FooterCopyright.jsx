import ChevronUpCircleIcon from "../../../icons/ChevronUpCircleIcon";
import Paths from "../../../paths";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";
import "./FooterCopyright.css";

function FooterCopyright({ className }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={cn("footer-copyright", className)}>
      <div className="footer-copyright__container container">
        <Link className="footer-copyright__link" to={Paths.ROOT}>Лого</Link>
        <button className="footer-copyright__btn" type="button" onClick={handleClick}>
          <ChevronUpCircleIcon />
        </button>
        <p className="footer-copyright__info">2018 WEB</p>
      </div>
    </div>
  );
}

FooterCopyright.propTypes = { className: classNameType };

export default FooterCopyright;
