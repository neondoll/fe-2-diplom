import LastTickets from "./LastTickets/LastTickets";
import OrderLayout from "../../components/OrderLayout/OrderLayout";
import SelectionFilter from "./Filter/SelectionFilter";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Selection.css";

export default function Selection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("loading changed in Selection", loading);
  }, [loading]);

  return (
    <OrderLayout className="selection-page" loading={loading} mainClassName="selection-page__layout-main">
      {!loading && (
        <div className="selection-page__sidebar">
          <SelectionFilter className="selection-page__filter" />
          <LastTickets className="selection-page__last-tickets" />
        </div>
      )}
      <Outlet context={{ className: "selection-page__main", setLoading }} />
    </OrderLayout>
  );
}
