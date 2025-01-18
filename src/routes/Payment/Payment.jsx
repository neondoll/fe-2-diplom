import OrderLayout from "../../components/OrderLayout/OrderLayout";
import PaymentInfo from "./Info/PaymentInfo";
import TripDetails from "../../components/TripDetails/TripDetails";
import "./Payment.css";

export default function Payment() {
  return (
    <OrderLayout mainClassName="payment-page">
      <TripDetails className="payment-page__trip-details" />
      <PaymentInfo className="payment-page__payment-info" />
    </OrderLayout>
  );
}
