import Button from "../../components/Button/Button";
import OrderConfirmationPassenger from "./Passenger/OrderConfirmationPassenger";
import OrderLayout from "../../components/OrderLayout/OrderLayout";
import Paths from "../../paths";
import TrainInfo from "../../components/TrainInfo/TrainInfo";
import TripDetails from "../../components/TripDetails/TripDetails";
import { formatPrice } from "../../lib/utils";
import { useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";

const passengers = [
  {
    age: "adults",
    surname: "Мартынюк",
    name: "Ирина",
    patronymic: "Эдуардовна",
    gender: "female",
    birth_date: "1985-02-17",
    document_type: "passport",
    passport_series: "4204",
    passport_number: "380694",
    birth_certificate_number: undefined,
  },
  {
    age: "children",
    surname: "Мартынюк",
    name: "Кирилл",
    patronymic: "Сергеевич",
    gender: "male",
    birth_date: "2006-01-25",
    document_type: "birth_certificate",
    passport_series: undefined,
    passport_number: undefined,
    birth_certificate_number: "VIII УН 256319",
  },
  {
    age: "adults",
    surname: "Мартынюк",
    name: "Сергей",
    patronymic: "Петрович",
    gender: "male",
    birth_date: "1982-06-19",
    document_type: "passport",
    passport_series: "4204",
    passport_number: "380694",
    birth_certificate_number: undefined,
  },
];
const train = {
  arrival: {
    duration: "9 : 42",
    from: { city: "Москва", railway_station: "Курский вокзал", time: "00:10" },
    to: { city: "Санкт-Петербург", railway_station: "Ладожский вокзал", time: "09:52" },
  },
  departure: {
    city_from: "Москва",
    city_start: "Адлер      \n",
    city_to: "Санкт-Петербург",
    duration: "9 : 42",
    first: { bottom_price: 4950, quantity: 15, top_price: 4950 },
    fourth: { bottom_price: 1920, quantity: 88, top_price: 1920 },
    from: { city: "Москва", railway_station: "Курский вокзал", time: "00:10" },
    second: { bottom_price: 3820, quantity: 24, top_price: 3820 },
    third: { bottom_price: 2530, quantity: 52, top_price: 2530 },
    to: { city: "Санкт-Петербург", railway_station: "Ладожский вокзал", time: "09:52" },
    train_name: "116С" + "\u00A0",
  },
};

export default function OrderConfirmation() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    navigate(Paths.SUCCESSFUL_ORDER);
  };

  return (
    <OrderLayout mainClassName="order-confirmation-page">
      <TripDetails className="order-confirmation-page__trip-details" />
      <div className="order-confirmation-page__info">
        <div className="order-confirmation-page__train">
          <h2 className="order-confirmation-page__title">Поезд</h2>
          <TrainInfo
            btn={<Button className="order-confirmation-page__content-btn" variant="change">Изменить</Button>}
            className="order-confirmation-page__content"
            item={train}
          />
        </div>
        <div className="order-confirmation-page__passengers">
          <h2 className="order-confirmation-page__title">Пассажиры</h2>
          <div className="order-confirmation-page__content">
            <div className="order-confirmation-page__list">
              {passengers.map((passenger, index) => (
                <OrderConfirmationPassenger className="order-confirmation-page__item" item={passenger} key={index} />
              ))}
            </div>
            <div className="order-confirmation-page__sidebar">
              <div className="order-confirmation-page__final-price">
                <p className="order-confirmation-page__final-price-prefix">Всего</p>
                <p className="order-confirmation-page__final-price-value">{formatPrice(7760)}</p>
                <span className="order-confirmation-page__final-price-currency" />
              </div>
              <Button className="order-confirmation-page__sidebar-btn" variant="change">Изменить</Button>
            </div>
          </div>
        </div>
        <div className="order-confirmation-page__payment-method">
          <h2 className="order-confirmation-page__title">Способ оплаты</h2>
          <div className="order-confirmation-page__content">
            <div className="order-confirmation-page__main">
              <p className="order-confirmation-page__payment-method-value">Наличными</p>
            </div>
            <div className="order-confirmation-page__sidebar">
              <Button className="order-confirmation-page__sidebar-btn" variant="change">Изменить</Button>
            </div>
          </div>
        </div>
        <Button className="order-confirmation-page__btn" variant="confirm" onClick={handleClick}>подтвердить</Button>
      </div>
    </OrderLayout>
  );
}
