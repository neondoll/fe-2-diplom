import Paths from "../../../paths";
import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { HashLink } from "react-router-hash-link";
import "./HeaderNav.css";

const links = [
  { text: "О нас", to: Paths.ROOT_ABOUT },
  { className: "ml-[14px]", text: "Как это работает", to: Paths.ROOT_WORK },
  { className: "ml-[11px]", text: "Отзывы", to: Paths.ROOT_FEEDBACKS },
  { text: "Контакты", to: Paths.ROOT_CONTACTS },
];

function HeaderNav({ className }) {
  return (
    <div className={cn("header-nav", className)}>
      <nav className="header-nav__container container">
        <ul className="header-nav__list">
          {links.map((link, index) => <HeaderNavItem key={index} {...link} />)}
        </ul>
      </nav>
    </div>
  );
}

HeaderNav.propTypes = { className: classNameType };

function HeaderNavItem({ className, text, to }) {
  return (
    <li className={cn("header-nav__item", className)}>
      <HashLink className="header-nav__link" to={to}>{text}</HashLink>
    </li>
  );
}

HeaderNavItem.propTypes = { className: classNameType, text: PropTypes.string.isRequired, to: PropTypes.any };

export default HeaderNav;
