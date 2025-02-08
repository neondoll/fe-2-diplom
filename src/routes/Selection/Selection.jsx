import LastTickets from "./LastTickets/LastTickets";
import OrderLayout from "../../components/OrderLayout/OrderLayout";
import RoutesSearchFilter from "../../components/RoutesSearch/Filter/RoutesSearchFilter";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./Selection.css";

export default function Selection() {
  const [loading, setLoading] = useState(true);

  return (
    <OrderLayout className="selection-page" loading={loading} mainClassName="selection-page__layout-main">
      {!loading && (
        <div className="selection-page__sidebar">
          <RoutesSearchFilter className="selection-page__filter" />
          <LastTickets className="selection-page__last-tickets" />
        </div>
      )}
      <Outlet context={{ className: "selection-page__main", setLoading }} />
    </OrderLayout>
  );
}
