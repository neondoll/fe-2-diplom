import Pagination from "../../../components/Pagination/Pagination";
import SelectionTrainLimit from "./Limit/SelectionTrainLimit";
import SelectionTrainSort from "./Sort/SelectionTrainSort";
import Trains from "./Trains/Trains";
import { cn } from "../../../lib/utils";
import { fetchRoutes, selectRoutes } from "../../../slices/routes";
import { selectRoutesSearch } from "../../../slices/routesSearch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./SelectionTrain.css";

export default function SelectionTrain() {
  const dispatch = useDispatch();
  const routesSearch = useSelector(selectRoutesSearch);
  const { className, setLoading } = useOutletContext();
  const { data, loading } = useSelector(selectRoutes);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("date");

  useEffect(() => {
    dispatch(fetchRoutes({
      date_end: routesSearch.date_end,
      date_start: routesSearch.date_start,
      from_city_id: routesSearch.from_city?._id,
      limit,
      offset: limit * page,
      sort,
      to_city_id: routesSearch.to_city?._id,
    }));
  }, [
    dispatch, limit, page, routesSearch.date_end, routesSearch.date_start, routesSearch.from_city?._id,
    routesSearch.to_city?._id, sort,
  ]);
  useEffect(() => {
    console.log("setLoading in SelectionTrain", loading);
    setLoading(loading);
  }, [loading, setLoading]);

  if (loading) {
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
      {data?.items && (
        <Trains className="selection-train-page__trains" items={data.items} />
      )}
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
