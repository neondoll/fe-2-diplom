import Layout from "../../components/Layout/Layout";
import SuccessfulOrderCard from "./Card/SuccessfulOrderCard";
import "./SuccessfulOrder.css";

export default function SuccessfulOrder() {
  return (
    <Layout mainClassName="successful-order-page">
      <div className="successful-order-page__container container">
        <h1 className="successful-order-page__title">Благодарим Вас за заказ!</h1>
        <SuccessfulOrderCard className="successful-order-page__card" />
      </div>
    </Layout>
  );
}
