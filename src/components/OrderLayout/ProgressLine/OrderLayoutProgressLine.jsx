import ChevronIcon from "./ChevronIcon";
import Paths from "../../../paths";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./OrderLayoutProgressLine.css";

const items = [
  { className: "!gap-x-[28px] !pt-[23px] !pr-[125px] !pb-[19px]", text: "Билеты", value: "tickets" },
  { className: "!gap-x-[21px] !py-[21px] !pr-[7px]", text: "Пассажиры", value: "passengers" },
  { className: "!gap-x-[23px] !pt-[22px] !pr-[73px] !pb-[20px]", text: "Оплата", value: "payment" },
  { className: "!gap-x-[24px] !py-[21px] !pr-[94px]", text: "Проверка", value: "verification" },
];

function OrderLayoutProgressLine({ className }) {
  const element = useRef();
  const location = useLocation();

  const setElementStyle = (value, isEnd) => {
    if (isEnd) {
      const right = "0";
      console.log(right);

      element.current.style.setProperty("--order-layout-progress-line-clip-path", "none");
      element.current.style.setProperty("--order-layout-progress-line-right", right);
    }
    else {
      const itemElement = element.current.querySelector(`.order-layout-progress-line__item[data-value="${value}"]`);
      console.log(itemElement);

      const iconElement = itemElement.nextSibling;
      console.log(iconElement);

      const iconElementRect = iconElement.getBoundingClientRect();
      console.log(iconElementRect);

      const right = `${100 - (100 * (iconElementRect.right / element.current.clientWidth))}%`;
      console.log(right);

      element.current.style.setProperty("--order-layout-progress-line-clip-path", "");
      element.current.style.setProperty("--order-layout-progress-line-right", right);
    }
  };

  useEffect(() => {
    console.log(location);

    if (element.current) {
      console.log(element.current.clientWidth);

      switch (true) {
        case location.pathname.includes(Paths.SELECTION, 0):
          setElementStyle(items[0].value, false);
          break;
        case location.pathname.includes(Paths.PASSENGERS, 0):
          setElementStyle(items[1].value, false);
          break;
        case location.pathname.includes(Paths.PAYMENT, 0):
          setElementStyle(items[2].value, false);
          break;
        case location.pathname.includes(Paths.ORDER_CONFIRMATION, 0):
          setElementStyle(items[3].value, true);
          break;
      }
    }
  }, [location]);

  return (
    <div className={cn("order-layout-progress-line", className)} ref={element}>
      <div className="order-layout-progress-line__container container">
        <ol className="order-layout-progress-line__list">
          <li
            className={cn("order-layout-progress-line__item", items[0].className)}
            data-number="1"
            data-value={items[0].value}
          >
            {items[0].text}
          </li>
          <li className="order-layout-progress-line__icon"><ChevronIcon /></li>
          <li
            className={cn("order-layout-progress-line__item", items[1].className)}
            data-number="2"
            data-value={items[1].value}
          >
            {items[1].text}
          </li>
          <li className="order-layout-progress-line__icon"><ChevronIcon /></li>
          <li
            className={cn("order-layout-progress-line__item", items[2].className)}
            data-number="3"
            data-value={items[2].value}
          >
            {items[2].text}
          </li>
          <li className="order-layout-progress-line__icon"><ChevronIcon /></li>
          <li
            className={cn("order-layout-progress-line__item", items[3].className)}
            data-number="4"
            data-value={items[3].value}
          >
            {items[3].text}
          </li>
        </ol>
      </div>
    </div>
  );
}

OrderLayoutProgressLine.propTypes = { className: classNameType };

export default OrderLayoutProgressLine;
