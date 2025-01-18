import Layout from "../Layout/Layout";
import OrderLayoutProgressLine from "./ProgressLine/OrderLayoutProgressLine";
import OrderLayoutWidget from "./Widget/OrderLayoutWidget";
import { childrenType, classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./OrderLayout.css";

function OrderLayout({ children, className, mainClassName }) {
  return (
    <Layout className={cn("order-layout", className)} mainClassName={cn("order-layout__main", mainClassName)}>
      <OrderLayoutWidget className="order-layout__widget" />
      <OrderLayoutProgressLine className="order-layout__progress-line" />
      <div className="order-layout__container container">
        {children}
      </div>
    </Layout>
  );
}

OrderLayout.propTypes = { children: childrenType, className: classNameType, mainClassName: classNameType };

export default OrderLayout;
