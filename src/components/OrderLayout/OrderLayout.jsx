import Layout from "../Layout/Layout";
import Loading from "../Loading/Loading";
import OrderLayoutProgressLine from "./ProgressLine/OrderLayoutProgressLine";
import OrderLayoutWidget from "./Widget/OrderLayoutWidget";
import PropTypes from "prop-types";
import { childrenType, classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./OrderLayout.css";

function OrderLayout({ children, className, loading, mainClassName }) {
  return (
    <Layout className={cn("order-layout", className)} mainClassName={cn("order-layout__main", mainClassName)}>
      <OrderLayoutWidget className="order-layout__widget" />
      {loading
        ? <Loading />
        : <OrderLayoutProgressLine className="order-layout__progress-line" />}
      <div className="order-layout__container container">
        {children}
      </div>
    </Layout>
  );
}

OrderLayout.propTypes = {
  children: childrenType,
  className: classNameType,
  loading: PropTypes.bool,
  mainClassName: classNameType,
};

export default OrderLayout;
