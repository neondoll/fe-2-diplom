import Button from "../../components/Button/Button";
import OrderConfirmationPassenger from "./Passenger/OrderConfirmationPassenger";
import OrderLayout from "../../components/OrderLayout/OrderLayout";
import Paths from "../../paths";
import RouteInfo from "../../components/RouteInfo/RouteInfo";
import TripDetails from "../../components/TripDetails/TripDetails";
import { formatPrice } from "../../lib/utils";
import { selectChosenRoute } from "../../slices/chosenRoute";
import { selectOrder } from "../../slices/order";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./OrderConfirmation.css";

export default function OrderConfirmation() {
  const chosenRoute = useSelector(selectChosenRoute);
  const navigate = useNavigate();
  const order = useSelector(selectOrder);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    if (order.arrival_options) {
      Object.values(order.arrival_options).forEach((value) => {
        price += value;
      });
    }

    if (order.arrival_seats) {
      order.arrival_seats.forEach((seat) => {
        price += seat.price;
      });
    }

    if (order.departure_options) {
      Object.values(order.departure_options).forEach((value) => {
        price += value;
      });
    }

    if (order.departure_seats) {
      order.departure_seats.forEach((seat) => {
        price += seat.price;
      });
    }

    setFinalPrice(price);
  }, [order.arrival_options, order.arrival_seats, order.departure_options, order.departure_seats]);

  const handleConfirmClick = (event) => {
    event.preventDefault();

    navigate(Paths.SUCCESSFUL_ORDER);
  };
  const handlePassengersClick = (event) => {
    event.preventDefault();

    navigate(Paths.PASSENGERS);
  };
  const handlePaymentClick = (event) => {
    event.preventDefault();

    navigate(Paths.PAYMENT);
  };
  const handleTrainClick = (event) => {
    event.preventDefault();

    navigate(Paths.SELECTION_SEATS);
  };

  return (
    <OrderLayout mainClassName="order-confirmation-page">
      <TripDetails className="order-confirmation-page__trip-details" />
      <div className="order-confirmation-page__info">
        <div className="order-confirmation-page__train">
          <h2 className="order-confirmation-page__title">Поезд</h2>
          <RouteInfo
            btn={(
              <Button
                className="order-confirmation-page__content-btn"
                onClick={handleTrainClick}
                type="button"
                variant="change"
              >
                Изменить
              </Button>
            )}
            className="order-confirmation-page__content"
            item={{
              arrival: chosenRoute.arrival_id
                ? {
                    available_seats_info: chosenRoute.arrival_available_seats_info,
                    duration: chosenRoute.arrival_duration,
                    from: {
                      city: { name: chosenRoute.arrival_from_city_name },
                      datetime: chosenRoute.arrival_from_datetime,
                      railway_station_name: chosenRoute.arrival_from_railway_station_name,
                    },
                    have_first_class: chosenRoute.arrival_have_first_class,
                    have_fourth_class: chosenRoute.arrival_have_fourth_class,
                    have_second_class: chosenRoute.arrival_have_second_class,
                    have_third_class: chosenRoute.arrival_have_third_class,
                    have_wifi: chosenRoute.arrival_have_wifi,
                    is_express: chosenRoute.arrival_is_express,
                    price_info: chosenRoute.arrival_price_info,
                    to: {
                      city: { name: chosenRoute.arrival_to_city_name },
                      datetime: chosenRoute.arrival_to_datetime,
                      railway_station_name: chosenRoute.arrival_to_railway_station_name,
                    },
                    train: { name: chosenRoute.arrival_train_name },
                  }
                : null,
              departure: chosenRoute.departure_id
                ? {
                    available_seats_info: chosenRoute.departure_available_seats_info,
                    duration: chosenRoute.departure_duration,
                    from: {
                      city: { name: chosenRoute.departure_from_city_name },
                      datetime: chosenRoute.departure_from_datetime,
                      railway_station_name: chosenRoute.departure_from_railway_station_name,
                    },
                    have_first_class: chosenRoute.departure_have_first_class,
                    have_fourth_class: chosenRoute.departure_have_fourth_class,
                    have_second_class: chosenRoute.departure_have_second_class,
                    have_third_class: chosenRoute.departure_have_third_class,
                    have_wifi: chosenRoute.departure_have_wifi,
                    is_express: chosenRoute.departure_is_express,
                    price_info: chosenRoute.departure_price_info,
                    to: {
                      city: { name: chosenRoute.departure_to_city_name },
                      datetime: chosenRoute.departure_to_datetime,
                      railway_station_name: chosenRoute.departure_to_railway_station_name,
                    },
                    train: { name: chosenRoute.departure_train_name },
                  }
                : null,
            }}
          />
        </div>
        <div className="order-confirmation-page__passengers">
          <h2 className="order-confirmation-page__title">Пассажиры</h2>
          <div className="order-confirmation-page__content">
            <div className="order-confirmation-page__list">
              {order.departure_passengers.map((passenger, index) => (
                <OrderConfirmationPassenger
                  className="order-confirmation-page__item"
                  item={passenger}
                  key={`departure-${index}`}
                />
              ))}
              {order.arrival_passengers.map((passenger, index) => (
                <OrderConfirmationPassenger
                  className="order-confirmation-page__item"
                  item={passenger}
                  key={`arrival-${index}`}
                />
              ))}
            </div>
            <div className="order-confirmation-page__sidebar">
              <div className="order-confirmation-page__final-price">
                <p className="order-confirmation-page__final-price-prefix">Всего</p>
                <p className="order-confirmation-page__final-price-value">{formatPrice(finalPrice)}</p>
                <span className="order-confirmation-page__final-price-currency" />
              </div>
              <Button
                className="order-confirmation-page__sidebar-btn"
                onClick={handlePassengersClick}
                type="button"
                variant="change"
              >
                Изменить
              </Button>
            </div>
          </div>
        </div>
        <div className="order-confirmation-page__payment-method">
          <h2 className="order-confirmation-page__title">Способ оплаты</h2>
          <div className="order-confirmation-page__content">
            <div className="order-confirmation-page__main">
              {order.user.payment_method === "online" && (
                <p className="order-confirmation-page__payment-method-value">Онлайн</p>
              )}
              {order.user.payment_method === "cash" && (
                <p className="order-confirmation-page__payment-method-value">Наличными</p>
              )}
            </div>
            <div className="order-confirmation-page__sidebar">
              <Button
                className="order-confirmation-page__sidebar-btn"
                onClick={handlePaymentClick}
                type="button"
                variant="change"
              >
                Изменить
              </Button>
            </div>
          </div>
        </div>
        <Button className="order-confirmation-page__btn" onClick={handleConfirmClick} type="button" variant="confirm">
          подтвердить
        </Button>
      </div>
    </OrderLayout>
  );
}
