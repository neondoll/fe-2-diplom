import HeaderLogo from "./Logo/HeaderLogo";
import HeaderNav from "./Nav/HeaderNav";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./Header.css";

function Header({ className }) {
  return (
    <header className={cn("header", className)}>
      <HeaderLogo className="header__logo" />
      <HeaderNav className="header__nav" />
    </header>
  );
}

Header.propTypes = { className: classNameType };

export default Header;
