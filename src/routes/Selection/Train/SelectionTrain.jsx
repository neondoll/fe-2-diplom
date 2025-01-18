import Pagination from "../../../components/Pagination/Pagination";
import SelectionTrainControl from "./Control/SelectionTrainControl";
import Trains from "./Trains/Trains";
import { cn } from "../../../lib/utils";
import { useOutletContext } from "react-router-dom";
import "./SelectionTrain.css";

const trains = [
  {
    arrival: {
      duration: "9 : 42",
      from: { city: "Москва", railway_station: "Курский вокзал", time: "00:10" },
      to: { city: "Санкт-Петербург", railway_station: "Ладожский вокзал", time: "09:52" },
    },
    departure: {
      city_from: "Москва",
      city_start: "Адлер      \n",
      city_to: "Санкт-Петербург",
      duration: "9 : 42",
      first: { bottom_price: 4950, quantity: 15, top_price: 4950 },
      fourth: { bottom_price: 1920, quantity: 88, top_price: 1920 },
      from: { city: "Москва", railway_station: "Курский вокзал", time: "00:10" },
      second: { bottom_price: 3820, quantity: 24, top_price: 3820 },
      third: { bottom_price: 2530, quantity: 52, top_price: 2530 },
      to: { city: "Санкт-Петербург", railway_station: "Ладожский вокзал", time: "09:52" },
      train_name: "116С" + "\u00A0",
    },
  },
  {
    departure: {
      city_from: "Москва",
      city_start: "Москва",
      city_to: "Санкт-Петербург\n«Мегаполис»",
      duration: "8 : 39",
      first: { bottom_price: 4950, quantity: 31, top_price: 4950 },
      from: { city: "Москва", railway_station: "Ленинградский вокзал", time: "00:20" },
      second: { bottom_price: 3950, quantity: 90, top_price: 3950 },
      to: { city: "Санкт-Петербург", railway_station: "Московский вокзал", time: "08:59" },
      train_name: "020У",
    },
  },
  {
    arrival: {
      duration: "8 : 32",
      from: { city: "Москва", railway_station: "Ленинградский вокзал", time: "00:41" },
      to: { city: "Санкт-Петербург", railway_station: "Ладожский вокзал", time: "09:13" },
    },
    departure: {
      city_from: "Москва",
      city_start: "Нижний Новгород",
      city_to: "Санкт-Петербург\n«Волга»",
      duration: "8 : 32",
      first: { bottom_price: 4950, quantity: 15, top_price: 4950 },
      from: { city: "Москва", railway_station: "Ленинградский вокзал", time: "00:41" },
      second: { bottom_price: 3820, quantity: 24, top_price: 3820 },
      third: { bottom_price: 2530, quantity: 52, top_price: 2530 },
      to: { city: "Санкт-Петербург", railway_station: "Ладожский вокзал", time: "09:13" },
      train_name: "116С" + "\u00A0",
    },
  },
  {
    arrival: {
      duration: "9 : 42",
      from: { city: "Москва", railway_station: "Курский вокзал", time: "00:10" },
      to: { city: "Санкт-Петербург", railway_station: "Ладожский вокзал", time: "09:52" },
    },
    departure: {
      city_from: "Москва",
      city_start: "Адлер",
      city_to: "Санкт-Петербург",
      duration: "9 : 42",
      first: { bottom_price: 4950, quantity: 15, top_price: 4950 },
      fourth: { bottom_price: 1920, quantity: 88, top_price: 1920 },
      from: { city: "Москва", railway_station: "Курский вокзал", time: "00:10" },
      second: { bottom_price: 3820, quantity: 24, top_price: 3820 },
      third: { bottom_price: 2530, quantity: 52, top_price: 2530 },
      to: { city: "Санкт-Петербург", railway_station: "Ладожский вокзал", time: "09:52" },
      train_name: "116С" + "\u00A0",
    },
  },
  {
    arrival: {
      duration: "9 : 42",
      from: { city: "Москва", railway_station: "Курский вокзал", time: "00:10" },
      to: { city: "Санкт-Петербург", railway_station: "Ладожский вокзал", time: "09:52" },
    },
    departure: {
      city_from: "Москва",
      city_start: "Адлер",
      city_to: "Санкт-Петербург",
      duration: "9 : 42",
      first: { bottom_price: 4950, quantity: 15, top_price: 4950 },
      fourth: { bottom_price: 1920, quantity: 88, top_price: 1920 },
      from: { city: "Москва", railway_station: "Курский вокзал", time: "00:10" },
      second: { bottom_price: 3820, quantity: 24, top_price: 3820 },
      third: { bottom_price: 2530, quantity: 52, top_price: 2530 },
      to: { city: "Санкт-Петербург", railway_station: "Ладожский вокзал", time: "09:52" },
      train_name: "116С" + "\u00A0",
    },
  },
];

export default function SelectionTrain() {
  const { className } = useOutletContext();

  return (
    <div className={cn("selection-train-page", className)}>
      <SelectionTrainControl className="selection-train-page__control" />
      <Trains className="selection-train-page__trains" items={trains} />
      <Pagination className="selection-train-page__pagination" pageCount={3} />
    </div>
  );
}
