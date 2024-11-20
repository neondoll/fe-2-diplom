import Paths from "../paths";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container header__container--logo container">
        <Link className="header__logo" to={Paths.ROOT}>Лого</Link>
      </div>
      <div className="header__container header__container--nav container">
        <ul className="header__nav nav">
          <li className="nav__item">О нас</li>
          <li className="nav__item">Как это работает</li>
          <li className="nav__item">Отзывы</li>
          <li className="nav__item">Контакты</li>
        </ul>
      </div>
    </header>
  );
}
