import Layout from "../Layout/Layout";
import Loading from "../Loading/Loading";
import OrderLayoutProgressLine from "./ProgressLine/OrderLayoutProgressLine";
import OrderLayoutWidget from "./Widget/OrderLayoutWidget";
import Paths from "../../paths";
import { childrenType, classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import { fetchRoutes, selectRoutesLoading } from "../../slices/routes";
import { selectTicketSearchForm } from "../../slices/ticketSearchForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./OrderLayout.css";

function OrderLayout({ children, className, mainClassName }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const routesLoading = useSelector(selectRoutesLoading);
  const ticketSearchForm = useSelector(selectTicketSearchForm);

  useEffect(() => {
    if (location.pathname === Paths.SELECTION_TRAIN) {
      dispatch(fetchRoutes({ from_city_id: ticketSearchForm.from_city?._id, to_city_id: ticketSearchForm.to_city?._id }));
    }
  }, [dispatch, location.pathname, ticketSearchForm.from_city?._id, ticketSearchForm.to_city?._id]);

  return (
    <Layout className={cn("order-layout", className)} mainClassName={cn("order-layout__main", mainClassName)}>
      <OrderLayoutWidget className="order-layout__widget" />
      {(location.pathname === Paths.SELECTION_TRAIN && routesLoading)
        ? <Loading />
        : (
            <>
              <OrderLayoutProgressLine className="order-layout__progress-line" />
              <div className="order-layout__container container">
                {children}
              </div>
            </>
          )}
    </Layout>
  );
}

OrderLayout.propTypes = { children: childrenType, className: classNameType, mainClassName: classNameType };

export default OrderLayout;
