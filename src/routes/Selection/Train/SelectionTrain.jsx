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

export default function SelectionTrain() {
  const routesSearch = useSelector(selectRoutesSearch);
  const { className, setLoading } = useOutletContext();
  const [limit, setLimit] = useState(5);
  const [loadingPage, setLoadingPage] = useState(true);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("date");

  const { data, error, loading } = useGetRoutes({
    from_city_id: routesSearch.from_city._id, // Идентификатор города, откуда планируется путешествие (обязательный)
    to_city_id: routesSearch.to_city._id, // Идентификатор города, куда планируется путешествие (обязательный)
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
    if (error) {
      console.error(error);
      setOpen(true);
    }
  }, [error]);
  useEffect(() => {
    if (!loading) {
      setLoadingPage(false);
    }
  }, [loading]);
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
        <p className="selection-train-page__found">{`найдено ${data.total_count || 0}`}</p>
        <SelectionTrainSort className="selection-train-page__sort" onChange={setSort} value={sort} />
        <SelectionTrainLimit className="selection-train-page__limit" onChange={setLimit} value={limit} />
      </div>
      <Trains className="selection-train-page__trains" items={data?.items ? data.items : []} loading={loading} />
      {data.total_count > 0 && (
        <Pagination
          className="selection-train-page__pagination"
          forcePage={page}
          onPageChange={handlePageChange}
          pageCount={Math.ceil(data.total_count / limit)}
        />
      )}
      <Dialog description={error} onOpenChange={setOpen} open={open} title="Сообщение об ошибке" type="error" />
    </div>
  );
}
