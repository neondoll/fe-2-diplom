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
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("date");

  const { data, error, loading } = useGetRoutes({
    date_end: routesSearch.date_end,
    date_end_arrival: routesSearch.date_end_arrival,
    date_start: routesSearch.date_start,
    date_start_arrival: routesSearch.date_start_arrival,
    end_arrival_hour_from: routesSearch.end_arrival_hour_from,
    end_arrival_hour_to: routesSearch.end_arrival_hour_to,
    end_departure_hour_from: routesSearch.end_departure_hour_from,
    end_departure_hour_to: routesSearch.end_departure_hour_to,
    from_city_id: routesSearch.from_city?._id,
    have_air_conditioning: routesSearch.have_air_conditioning,
    have_express: routesSearch.have_express,
    have_first_class: routesSearch.have_first_class,
    have_fourth_class: routesSearch.have_fourth_class,
    have_second_class: routesSearch.have_second_class,
    have_third_class: routesSearch.have_third_class,
    have_wifi: routesSearch.have_wifi,
    limit,
    offset: limit * page,
    price_from: routesSearch.price_from,
    price_to: routesSearch.price_to,
    sort,
    start_arrival_hour_from: routesSearch.start_arrival_hour_from,
    start_arrival_hour_to: routesSearch.start_arrival_hour_to,
    start_departure_hour_from: routesSearch.start_departure_hour_from,
    start_departure_hour_to: routesSearch.start_departure_hour_to,
    to_city_id: routesSearch.to_city?._id,
  });

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  useEffect(() => {
    console.log("loading in SelectionTrain", loading);

    if (!loading) {
      setLoadingPage(false);
    }
  }, [loading]);
  useEffect(() => {
    console.log("setLoading in SelectionTrain", loadingPage);
    setLoading(loadingPage);
  }, [loadingPage, setLoading]);

  if (loadingPage) {
    return null;
  }

  const handleClick = (clickEvent) => {
    console.log("onClick", clickEvent);
  };
  const handlePageChange = (selectedItem) => {
    console.log("onPageChange", selectedItem);
    setPage(selectedItem.selected);
  };

  return (
    <div className={cn("selection-train-page", className)}>
      <div className="selection-train-page__control">
        <p className="selection-train-page__found">
          {"найдено "}
          {data?.total_count || 0}
        </p>
        <SelectionTrainSort className="selection-train-page__sort" onChange={setSort} value={sort} />
        <SelectionTrainLimit className="selection-train-page__limit" onChange={setLimit} value={limit} />
      </div>
      <Trains className="selection-train-page__trains" items={data?.items ? data.items : []} loading={loading} />
      {data?.total_count > 0 && (
        <Pagination
          className="selection-train-page__pagination"
          forcePage={page}
          onClick={handleClick}
          onPageChange={handlePageChange}
          pageCount={Math.ceil(data.total_count / limit)}
        />
      )}
    </div>
  );
}
