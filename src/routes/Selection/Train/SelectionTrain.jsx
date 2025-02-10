import Dialog from "../../../components/Dialog/Dialog";
import Pagination from "../../../components/Pagination/Pagination";
import SelectionTrainLimit from "./Limit/SelectionTrainLimit";
import SelectionTrainSort from "./Sort/SelectionTrainSort";
import Trains from "./Trains/Trains";
import useGetRoutes from "../../../services/useGetRoutes";
import { cn } from "../../../lib/utils";
import { selectRoutesSearch } from "../../../slices/routesSearch";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SelectionTrain.css";

const plug = {
  items: [
    {
      available_seats: 160,
      available_seats_info: { first: 18, second: 32, third: 48, fourth: 62 },
      departure: {
        _id: "66ac8bb0cb563f0052178e01",
        available_seats: 160,
        available_seats_info: { first: 18, second: 32, third: 48, fourth: 62 },
        duration: 144960,
        from: {
          city: { _id: "66ac8b69cb563f0052174f45", name: "москва" },
          datetime: 1676722684,
          railway_station_name: "Курский",
        },
        have_air_conditioning: true,
        have_first_class: true,
        have_fourth_class: true,
        have_second_class: true,
        have_third_class: true,
        have_wifi: true,
        is_express: false,
        min_price: 521,
        price_info: {
          first: { bottom_price: 2655, price: 2830, top_price: 3525 },
          second: { bottom_price: 1965, top_price: 2682 },
          third: { bottom_price: 2895, side_price: 3260, top_price: 2585 },
          fourth: { bottom_price: 768, top_price: 521 },
        },
        to: {
          city: { _id: "66ac8b69cb563f0052174f46", name: "санкт-петербург" },
          datetime: 1676867644,
          railway_station_name: "Ладожский",
        },
        train: { _id: "66ac8b6fcb563f00521759fb", name: "Зевс - 55" },
      },
      have_air_conditioning: false,
      have_first_class: false,
      have_fourth_class: false,
      have_second_class: false,
      have_third_class: false,
      have_wifi: false,
      is_express: false,
      min_price: 521,
    },
    {
      available_seats: 160,
      available_seats_info: { first: 18, fourth: 62, second: 32, third: 48 },
      departure: {
        _id: "66ac8bf9cb563f005217ca80",
        available_seats: 160,
        available_seats_info: { first: 18, fourth: 62, second: 32, third: 48 },
        duration: 272940,
        from: {
          city: { _id: "66ac8b69cb563f0052174f45", name: "москва" },
          datetime: 1679797397,
          railway_station_name: "Ярославский",
        },
        have_air_conditioning: true,
        have_first_class: true,
        have_fourth_class: true,
        have_second_class: true,
        have_third_class: true,
        have_wifi: true,
        is_express: false,
        min_price: 543,
        price_info: {
          first: { bottom_price: 3625, price: 2690, top_price: 2780 },
          fourth: { bottom_price: 996, top_price: 543 },
          second: { bottom_price: 2385, top_price: 2850 },
          third: { bottom_price: 3845, side_price: 4810, top_price: 4650 },
        },
        to: {
          city: { _id: "66ac8b69cb563f0052174f46", name: "санкт-петербург" },
          datetime: 1680070337,
          railway_station_name: "Московский",
        },
        train: { _id: "66ac8b6ecb563f0052175904", name: "Транзит - 99" },
      },
      have_air_conditioning: false,
      have_first_class: false,
      have_fourth_class: false,
      have_second_class: false,
      have_third_class: false,
      have_wifi: false,
      is_express: false,
      min_price: 543,
    },
  ],
  total_count: 2,
};

export default function SelectionTrain() {
  const routesSearch = useSelector(selectRoutesSearch);
  const { className, setLoading } = useOutletContext();
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(5);
  const [loadingPage, setLoadingPage] = useState(true);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("date");

  const api = useGetRoutes({
    from_city_id: routesSearch.from_city?._id, // Идентификатор города, откуда планируется путешествие (обязательный)
    to_city_id: routesSearch.to_city?._id, // Идентификатор города, куда планируется путешествие (обязательный)
    date_start: routesSearch.date_start, // Дата отбытия туда (в формате YYYY-MM-DD; например 2030-03-01)
    date_end: routesSearch.date_end, // Дата отбытия обратно (в формате YYYY-MM-DD; например 2030-03-01)
    date_start_arrival: routesSearch.date_start_arrival, // Дата прибытия туда (в формате YYYY-MM-DD; например 2030-03-01)
    date_end_arrival: routesSearch.date_end_arrival, // Дата прибытия обратно (в формате YYYY-MM-DD; например 2030-03-01)
    have_first_class: routesSearch.have_first_class, // Люкс (true/false)
    have_second_class: routesSearch.have_second_class, // Купе (true/false)
    have_third_class: routesSearch.have_third_class, // Плацкарт (true/false)
    have_fourth_class: routesSearch.have_fourth_class, // Сидячее место (true/false)
    have_wifi: routesSearch.have_wifi, // Имеется WiFi (true/false)
    have_air_conditioning: routesSearch.have_air_conditioning, // Имеется кондиционер (true/false)
    have_express: routesSearch.have_express, // Экспресс (true/false)
    price_from: routesSearch.price_from, // Цена от
    price_to: routesSearch.price_to, // Цена до
    start_departure_hour_from: routesSearch.start_departure_hour_from, // Час отбытия от (число)
    start_departure_hour_to: routesSearch.start_departure_hour_to, // Час отбытия до (число)
    start_arrival_hour_from: routesSearch.start_arrival_hour_from, // Час прибытия от (число)
    start_arrival_hour_to: routesSearch.start_arrival_hour_to, // Час прибытия до (число)
    end_departure_hour_from: routesSearch.end_departure_hour_from, // Час отбытия назад от (число)
    end_departure_hour_to: routesSearch.end_departure_hour_to, // Час отбытия назад до (число)
    end_arrival_hour_from: routesSearch.end_arrival_hour_from, // Час прибытия назад от (работает при установленном параметре date_end)
    end_arrival_hour_to: routesSearch.end_arrival_hour_to, // Час прибытия назад до (работает при установленном параметре date_end)
    limit, // Количество результатов на странице
    offset: limit * page, // Количество результатов, которое необходимо пропустить в выдаче
    sort, // Сортировка результатов (date, price, duration)
  });

  useEffect(() => {
    if (!api.loading) {
      if (api.data) {
        setData(api.data);
      }
      else {
        setData(plug);
      }
    }
  }, [api.data, api.loading]);
  useEffect(() => {
    if (api.error) {
      console.error(api.error);
      setOpen(true);
    }
  }, [api.error]);
  useEffect(() => {
    if (!api.loading) {
      setLoadingPage(false);
    }
  }, [api.loading]);
  useEffect(() => {
    setLoading(loadingPage);
  }, [loadingPage, setLoading]);

  if (loadingPage) {
    return null;
  }

  const handlePageChange = selectedItem => setPage(selectedItem.selected);

  return (
    <div className={cn("selection-train-page", className)}>
      <div className="selection-train-page__control">
        <p className="selection-train-page__found">{`найдено ${data?.total_count || 0}`}</p>
        <SelectionTrainSort className="selection-train-page__sort" onChange={setSort} value={sort} />
        <SelectionTrainLimit className="selection-train-page__limit" onChange={setLimit} value={limit} />
      </div>
      <Trains className="selection-train-page__trains" items={data?.items ? data.items : []} loading={api.loading} />
      {data?.total_count > 0 && (
        <Pagination
          className="selection-train-page__pagination"
          forcePage={page}
          onPageChange={handlePageChange}
          pageCount={Math.ceil(data.total_count / limit)}
        />
      )}
      <Dialog description={api.error} onOpenChange={setOpen} open={open} title="Сообщение об ошибке" type="error" />
    </div>
  );
}
