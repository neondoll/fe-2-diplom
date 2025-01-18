import LastTickets from "./LastTickets/LastTickets";
import OrderLayout from "../../components/OrderLayout/OrderLayout";
import SelectionFilter from "./Filter/SelectionFilter";
import { Outlet } from "react-router-dom";
import "./Selection.css";

export default function Selection() {
  return (
    <OrderLayout className="selection-page" mainClassName="selection-page__layout-main">
      <div className="selection-page__sidebar">
        <SelectionFilter className="selection-page__filter" />
        <LastTickets className="selection-page__last-tickets" />
      </div>
      <Outlet context={{ className: "selection-page__main" }} />
    </OrderLayout>
  );
}
