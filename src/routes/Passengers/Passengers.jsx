import OrderLayout from "../../components/OrderLayout/OrderLayout";
import PassengersInfo from "./Info/PassengersInfo";
import TripDetails from "../../components/TripDetails/TripDetails";
import "./Passengers.css";

export default function Passengers() {
  return (
    <OrderLayout mainClassName="passengers-page">
      <TripDetails className="passengers-page__trip-details" />
      <PassengersInfo className="passengers-page__info" />
    </OrderLayout>
  );
}
