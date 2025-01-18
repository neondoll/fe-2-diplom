import Paths from "../../../paths";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { HashLink } from "react-router-hash-link";
import "./HeaderNav.css";

const links = [
  { text: "О нас", to: Paths.ROOT_ABOUT },
  { text: "Как это работает", to: Paths.ROOT_WORK },
  { text: "Отзывы", to: Paths.ROOT_FEEDBACKS },
  { text: "Контакты", to: Paths.ROOT_CONTACTS },
];

function HeaderNav({ className }) {
  return (
    <div className={cn("header-nav", className)}>
      <nav className="header-nav__container container">
        <ul className="header-nav__list">
          {links.map(link => (
            <li className={cn("header-nav__item", link.className)} key={link.to}>
              <HashLink className="header-nav__link" to={link.to}>{link.text}</HashLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

HeaderNav.propTypes = { className: classNameType };

export default HeaderNav;
