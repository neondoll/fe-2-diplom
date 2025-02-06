import AdditionalOptionsInCarriages from "../components/AdditionalOptionsInCarriages/AdditionalOptionsInCarriages";
import AirDatepicker from "air-datepicker";
import Button from "../components/Button/Button";
import Dialog from "../components/Dialog/Dialog";
import MinusSquareIcon from "../icons/MinusSquareIcon.jsx";
import Pagination from "../components/Pagination/Pagination";
import PlusSquareIcon from "../icons/PlusSquareIcon.jsx";
import SelectionTrainSort from "./Selection/Train/Sort/SelectionTrainSort";
import { cn } from "../lib/utils";
import { useEffect, useRef } from "react";

const additionalOptionsInCarriagesItems = [
  {
    btnClassName: "text-ghost-white-1.94 bg-xanthous border-transparent",
    className: "top-[1166px]",
    state: "selected",
  },
  { btnClassName: "", className: "top-[1253px]", state: "default" },
  {
    btnClassName: "text-taupe-gray-3.62 bg-navajo-white-3.53 border-transparent cursor-default",
    className: "top-[1340px]",
    state: "included",
  },
  {
    btnClassName: "text-dark-charcoal-3.19 bg-chrome-yellow border-dark-charcoal-3.19",
    className: "top-[1428px]",
    state: "hover",
  },
];
const additionalOptionsInCarriagesTooltipItems = [
  { className: "top-[1564px] left-[1039px] w-32.5", text: "кондиционер" },
  { className: "top-[1564px] left-[1179px] w-21", text: "WI-FI" },
  { className: "top-[1615px] left-[1039px] w-21", text: "белье" },
  { className: "top-[1615px] left-[1133px] w-21", text: "питание" },
];
const buttonItems = {
  change: [
    { className: "left-[1806px]", state: "default" },
    { className: "left-[2252px] text-chrome-yellow shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", state: "hover" },
    {
      className: "left-[2697px] text-dark-charcoal-3.19 bg-chrome-yellow border-transparent shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
      state: "active",
    },
  ],
  choosePlaces: [
    { className: "left-[1448px] bg-taupe-gray-3.79 cursor-not-allowed", state: "disabled" },
    { className: "left-[1806px]", state: "default" },
    { className: "left-[2252px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", state: "hover" },
    {
      className: "left-[2697px] text-chrome-yellow bg-transparent border-chrome-yellow",
      state: "active",
    },
  ],
  confirm: [
    { className: "left-[1448px] bg-taupe-gray-3.79", state: "disabled" },
    { className: "left-[1806px]", state: "default" },
    { className: "left-[2252px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", state: "hover" },
    {
      className: "left-[2697px] text-chrome-yellow bg-transparent border-chrome-yellow shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
      state: "active",
    },
  ],
  findTickets: [
    { className: "left-[1806px]", state: "default" },
    { className: "left-[2252px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", state: "hover" },
    {
      className: "left-[2697px] text-chrome-yellow bg-transparent border-chrome-yellow shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
      state: "active",
    },
  ],
  further: [
    { className: "top-[494px] left-[1448px] bg-taupe-gray-3.62 cursor-not-allowed", state: "disabled" },
    { className: "left-[1806px]", state: "default" },
    { className: "left-[2252px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", state: "hover" },
    {
      className: "left-[2697px] text-chrome-yellow bg-transparent border-chrome-yellow shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
      state: "active",
    },
  ],
  learnMore: [
    { className: "left-[195px]", state: "default" },
    { className: "left-[573px] text-raisin-black bg-maximum-yellow-red border-transparent", state: "hover" },
    { className: "left-[951px] text-raisin-black bg-white border-transparent", state: "active" },
  ],
  send: [
    { className: "left-[199px]", state: "default" },
    { className: "left-[577px] text-raisin-black bg-maximum-yellow-red border-transparent", state: "hover" },
    { className: "left-[955px] text-raisin-black bg-white border-transparent", state: "active" },
  ],
};
const dialogItems = [
  {
    contentClassName: "!top-[278px] !left-[3837.69px]",
    description: (
      <>
        Повседневная практика показывает, что сложившаяся структура организации играет важную роль в формировании
        существенных финансовых и административных
      </>
    ),
    title: (
      <>
        Таким образом консультация с широким активом
        <br />
        в значительной степени обуславливает создание модели развития.
      </>
    ),
    type: "error",
  },
  {
    contentClassName: "!top-[949px] !left-[3836.31px]",
    description: (
      <>
        Таким образом консультация с широким активом в значительной степени обуславливает создание модели развития.
        <br />
        <br />
        Повседневная практика показывает, что сложившаяся структура организации играет важную роль в формировании
        существенных финансовых и административных
      </>
    ),
    title: undefined,
    type: "info",
  },
];
const paginationItems = [
  { className: "left-[225px]", pageCount: 3 },
  { className: "left-[883px]", pageCount: 10 },
];
const selectionFilterCollapsibleTriggerItems = [
  { className: "left-[199px] text-white", icon: PlusSquareIcon, state: "default" },
  { className: "left-[577px] text-navajo-white-3.53", icon: PlusSquareIcon, state: "hover" },
  { className: "left-[955px] text-silver", icon: MinusSquareIcon, state: "active" },
];
const selectionTrainControlSortByItems = [
  { className: "top-[313px]", optionsClassName: undefined, state: "default" },
  { className: "top-[409px]", optionsClassName: "visible", state: "visible" },
  { className: "top-[569px]", optionsClassName: "visible", state: "visible_hover" },
];

export default function Explication() {
  const airDatepicker1 = useRef();
  const airDatepicker2 = useRef();

  useEffect(() => {
    if (airDatepicker1.current) {
      airDatepicker1.current.destroy();
    }

    airDatepicker1.current = new AirDatepicker("#calendar-1", {
      classes: "calendar",
      inline: true,
      startDate: new Date("2018-08-01"),
    });

    if (airDatepicker2.current) {
      airDatepicker2.current.destroy();
    }

    airDatepicker2.current = new AirDatepicker("#calendar-2", {
      inline: true,
      selectedDates: [new Date("2018-08-30")],
      startDate: new Date("2018-08-01"),
    });
  }, []);

  return (
    <div className="relative w-[5715px] h-[1808px] bg-ghost-white-1.64">
      <div className="absolute top-[310px] left-[92px] w-[1271px] h-[662px] bg-raisin-black" />
      {paginationItems.map((item, index) => (
        <Pagination className={cn("absolute top-[134px]", item.className)} key={index + 1} pageCount={item.pageCount} />
      ))}
      {buttonItems.findTickets.map(item => (
        <Button className={cn("absolute top-[387px]", item.className)} key={item.state} variant="find-tickets">
          Найти билеты
        </Button>
      ))}
      {buttonItems.learnMore.map(item => (
        <Button className={cn("absolute top-[429px]", item.className)} key={item.state} variant="learn-more">
          Узнать больше
        </Button>
      ))}
      {buttonItems.further.map(item => (
        <Button className={cn("absolute top-[497px]", item.className)} key={item.state} variant="further">
          ДАЛЕЕ
        </Button>
      ))}
      {buttonItems.send.map(item => (
        <Button className={cn("absolute top-[537px]", item.className)} key={item.state} variant="send">
          отправить
        </Button>
      ))}
      {selectionFilterCollapsibleTriggerItems.map((item) => {
        const Icon = item.icon;

        return (
          <Icon className={cn("absolute top-[675px] size-5 rounded-5", item.className)} key={item.state} />
        );
      })}
      {buttonItems.choosePlaces.map(item => (
        <Button className={cn("absolute top-[704px]", item.className)} key={item.state} variant="choose-places">
          Выбрать места
        </Button>
      ))}
      {buttonItems.change.map(item => (
        <Button className={cn("absolute top-[787px]", item.className)} key={item.state} variant="change">
          Изменить
        </Button>
      ))}
      {buttonItems.confirm.map(item => (
        <Button className={cn("absolute top-[886px]", item.className)} key={item.state} variant="confirm">
          подтвердить
        </Button>
      ))}
      {dialogItems.map(item => (
        <Dialog
          contentClassName={cn("!absolute !translate-x-0 !translate-y-0", item.contentClassName)}
          description={item.description}
          key={item.type}
          modal={false}
          open={true}
          title={item.title}
          type={item.type}
        />
      ))}
      <div className="absolute top-[1127px] left-[91px]" id="calendar-1" />
      <div className="absolute top-[1127px] left-[528px]" id="calendar-2" />
      {additionalOptionsInCarriagesItems.map(item => (
        <AdditionalOptionsInCarriages
          btnClassName={item.btnClassName}
          className={cn("absolute left-[1039px]", item.className)}
          haveAirConditioning={false}
          haveWifi={false}
          isLinensIncluded={false}
          linensPrice={0}
          key={item.state}
          wifiPrice={0}
        />
      ))}
      {selectionTrainControlSortByItems.map(item => (
        <SelectionTrainSort
          className={cn("absolute left-[3194px]", item.className)}
          key={item.state}
          optionsClassName={item.optionsClassName}
        />
      ))}
      {additionalOptionsInCarriagesTooltipItems.map(item => (
        <div
          className={cn("absolute px-[11px] pt-[9px] pb-[7px] text-base/[calc(18/16)] font-normal text-center text-dark-charcoal-3.19 bg-white-smoke-1.3 rounded-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", item.className)}
          key={item.text}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
