import AdditionalOptionsInCarriages from "../components/AdditionalOptionsInCarriages/AdditionalOptionsInCarriages";
import AirDatepicker from "air-datepicker";
import Button from "../components/Button/Button";
import MinusSquareIcon from "../icons/MinusSquareIcon.jsx";
import Pagination from "../components/Pagination/Pagination";
import PlusSquareIcon from "../icons/PlusSquareIcon.jsx";
import SelectionTrainControlSortBy from "./Selection/Train/Control/SortBy/SelectionTrainControlSortBy";
import { cn } from "../lib/utils";
import { useEffect, useRef } from "react";

const additionalOptionsInCarriagesItems = [
  { btnClassName: "text-[#f4f2f6] bg-[#fdb935] border-transparent", className: "top-[1166px]", state: "selected" },
  { btnClassName: "", className: "top-[1253px]", state: "default" },
  {
    btnClassName: "text-[#928f94] bg-[#fcdc9d] border-transparent cursor-default",
    className: "top-[1340px]",
    state: "included",
  },
  { btnClassName: "text-[#292929] bg-[#ffa800] border-[#292929]", className: "top-[1428px]", state: "hover" },
];
const additionalOptionsInCarriagesTooltipItems = [
  { className: "top-[1564px] left-[1039px] w-[130px]", text: "кондиционер" },
  { className: "top-[1564px] left-[1179px] w-[84px]", text: "WI-FI" },
  { className: "top-[1615px] left-[1039px] w-[84px]", text: "белье" },
  { className: "top-[1615px] left-[1133px] w-[84px]", text: "питание" },
];
const buttonItems = {
  change: [
    { className: "left-[1806px]", state: "default" },
    { className: "left-[2252px] text-[var(--color-orange)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", state: "hover" },
    {
      className: "left-[2697px] text-[#292929] bg-[var(--color-orange)] border-transparent shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
      state: "active",
    },
  ],
  choosePlaces: [
    { className: "left-[1448px] bg-[#918f94] cursor-not-allowed", state: "disabled" },
    { className: "left-[1806px]", state: "default" },
    { className: "left-[2252px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", state: "hover" },
    {
      className: "left-[2697px] text-[var(--color-orange)] bg-transparent border-[var(--color-orange)]",
      state: "active",
    },
  ],
  confirm: [
    { className: "left-[1448px] bg-[#918f94]", state: "disabled" },
    { className: "left-[1806px]", state: "default" },
    { className: "left-[2252px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", state: "hover" },
    {
      className: "left-[2697px] text-[var(--color-orange)] bg-transparent border-[var(--color-orange)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
      state: "active",
    },
  ],
  findTickets: [
    { className: "left-[1806px]", state: "default" },
    { className: "left-[2252px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", state: "hover" },
    {
      className: "left-[2697px] text-[var(--color-orange)] bg-transparent border-[var(--color-orange)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
      state: "active",
    },
  ],
  further: [
    { className: "top-[494px] left-[1448px] bg-[#928F94] cursor-not-allowed", state: "disabled" },
    { className: "left-[1806px]", state: "default" },
    { className: "left-[2252px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", state: "hover" },
    {
      className: "left-[2697px] text-[var(--color-orange)] bg-transparent border-[var(--color-orange)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
      state: "active",
    },
  ],
  learnMore: [
    { className: "left-[195px]", state: "default" },
    { className: "left-[573px] text-[#2D2B2F] bg-[var(--color-yellow)] border-transparent", state: "hover" },
    { className: "left-[951px] text-[#2D2B2F] bg-white border-transparent", state: "active" },
  ],
  send: [
    { className: "left-[199px]", state: "default" },
    { className: "left-[577px] text-[#2D2B2F] bg-[var(--color-yellow)] border-transparent", state: "hover" },
    { className: "left-[955px] text-[#2D2B2F] bg-white border-transparent", state: "active" },
  ],
};
const paginationItems = [
  { className: "left-[225px]", pageCount: 3 },
  { className: "left-[883px]", pageCount: 10 },
];
const selectionFilterCollapsibleTriggerItems = [
  { className: "left-[199px] text-white", icon: PlusSquareIcon, state: "default" },
  { className: "left-[577px] text-[#fcdc9d]", icon: PlusSquareIcon, state: "hover" },
  { className: "left-[955px] text-[#c4c4c4]", icon: MinusSquareIcon, state: "active" },
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
    <div className="relative w-[5715px] h-[1808px]">
      <div className="absolute top-[310px] left-[92px] w-[1271px] h-[662px] bg-[#2D2B2F]" />
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
          <Icon className={cn("absolute top-[675px] size-[20px] rounded-[5px]", item.className)} key={item.state} />
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
      <div className="absolute top-[1127px] left-[91px]" id="calendar-1" />
      <div className="absolute top-[1127px] left-[528px]" id="calendar-2" />
      {additionalOptionsInCarriagesItems.map(item => (
        <AdditionalOptionsInCarriages
          btnClassName={item.btnClassName}
          className={cn("absolute left-[1039px]", item.className)}
          key={item.state}
        />
      ))}
      {selectionTrainControlSortByItems.map(item => (
        <SelectionTrainControlSortBy
          className={cn("absolute left-[3194px]", item.className)}
          key={item.state}
          optionsClassName={item.optionsClassName}
        />
      ))}
      {additionalOptionsInCarriagesTooltipItems.map(item => (
        <div
          className={cn("absolute px-[11px] pt-[9px] pb-[7px] text-base/[calc(18/16)] font-normal text-center text-[#292929] bg-[#f5f4f6] rounded-[5px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", item.className)}
          key={item.text}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
