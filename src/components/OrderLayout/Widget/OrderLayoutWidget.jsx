import TicketSearchForm from "../../TicketSearchForm/TicketSearchForm";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./OrderLayoutWidget.css";

function OrderLayoutWidget({ className }) {
  return (
    <div className={cn("order-layout-widget", className)}>
      <div className="order-layout-widget__container container">
        <TicketSearchForm className="order-layout-widget__search" />
      </div>
    </div>
  );
}

OrderLayoutWidget.propTypes = { className: classNameType };

export default OrderLayoutWidget;
