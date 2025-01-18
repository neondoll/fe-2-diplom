import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./RootAbout.css";

function RootAbout({ className, ...props }) {
  return (
    <div className={cn("root-about", className)} {...props}>
      <div className="root-about__container container">
        <h2 className="root-about__title">о нас</h2>
        <p className="root-about__content">
          {"Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым "
          + "днем\nвсе больше людей заказывают жд билеты через интернет.\n\nСегодня можно заказать "
          + "железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?\nМы расскажем о "
          + "преимуществах заказа через интернет.\n\n"}
          <span className="font-bold">
            {"Покупать жд билеты дешево можно за 90 суток до отправления поезда.\nБлагодаря "
            + "динамическому ценообразованию цена на билеты в это время самая низкая."}
          </span>
        </p>
      </div>
    </div>
  );
}

RootAbout.propTypes = { className: classNameType };

export default RootAbout;
