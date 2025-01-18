import Layout from "../Layout/Layout";
import OrderLayoutProgressLine from "./ProgressLine/OrderLayoutProgressLine";
import OrderLayoutWidget from "./Widget/OrderLayoutWidget";
import { childrenType, classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./OrderLayout.css";

function OrderLayout({ children, mainClassName }) {
  return (
    <Layout mainClassName={cn("order-layout", mainClassName)}>
      <OrderLayoutWidget className="order-layout__widget" />
      <OrderLayoutProgressLine className="order-layout__progress-line" />
      <div className="order-layout__container container">
        {children}
      </div>
    </Layout>
  );
}

OrderLayout.propTypes = { children: childrenType, mainClassName: classNameType };

export default OrderLayout;
