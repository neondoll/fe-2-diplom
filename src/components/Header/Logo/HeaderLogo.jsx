import Paths from "../../../paths";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";
import "./HeaderLogo.css";

function HeaderLogo({ className }) {
  return (
    <div className={cn("header-logo", className)}>
      <div className="header-logo__container container">
        <Link className="header-logo__link" to={Paths.ROOT}>Лого</Link>
      </div>
    </div>
  );
}

HeaderLogo.propTypes = { className: classNameType };

export default HeaderLogo;
