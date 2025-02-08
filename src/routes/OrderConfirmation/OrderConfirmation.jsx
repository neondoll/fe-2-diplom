import Api from "../../api";
import Button from "../../components/Button/Button";
import Dialog from "../../components/Dialog/Dialog";
import OrderConfirmationPassenger from "./Passenger/OrderConfirmationPassenger";
import OrderLayout from "../../components/OrderLayout/OrderLayout";
import Paths from "../../paths";
import RouteInfo from "../../components/RouteInfo/RouteInfo";
import TripDetails from "../../components/TripDetails/TripDetails";
import { clearChosenCoach } from "../../slices/chosenCoach";
import { clearChosenRoute, selectChosenRoute } from "../../slices/chosenRoute";
import { clearOrder, selectOrder } from "../../slices/order";
import { clearRoutesSearch } from "../../slices/routesSearch";
import { formatPrice, getResponseError } from "../../lib/utils";
import { initSuccessfulOrderInfo } from "../../slices/successfulOrderInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";

export default function OrderConfirmation() {
  const chosenRoute = useSelector(selectChosenRoute);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector(selectOrder);
  const [finalPrice, setFinalPrice] = useState(0);
  const [orderErrorOpen, setOrderErrorOpen] = useState(false);
  const [orderInfoOpen, setOrderInfoOpen] = useState(false);

  const sumSeatPrice = (acc, item) => acc + item.seat_price;

  useEffect(() => {
    setFinalPrice(
      order.departure.seats.reduce(sumSeatPrice, 0)
      + order.arrival.seats.reduce(sumSeatPrice, 0),
    );
  }, [order.arrival.seats, order.departure.seats]);

  const handleConfirmClick = (event) => {
    event.preventDefault();

    fetch(Api.ORDER, { body: JSON.stringify(order), headers: { "Content-Type": "application/json" }, method: "POST" })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setOrderInfoOpen(true);
        dispatch(initSuccessfulOrderInfo({
          final_price: finalPrice,
          first_name: order.user.first_name,
          patronymic: order.user.patronymic,
        }));

        setTimeout(() => {
          setOrderInfoOpen(false);
          dispatch(clearChosenCoach());
          dispatch(clearChosenRoute());
          dispatch(clearOrder());
          dispatch(clearRoutesSearch());

          navigate(Paths.SUCCESSFUL_ORDER);
        }, 1500);
      })
      .catch((e) => {
        console.error(getResponseError(e));
        setOrderErrorOpen(true);
      });
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
            item={chosenRoute}
          />
        </div>
        <div className="order-confirmation-page__passengers">
          <h2 className="order-confirmation-page__title">Пассажиры</h2>
          <div className="order-confirmation-page__content">
            <div className="order-confirmation-page__list">
              {order.departure.seats.map((item, index) => (
                <OrderConfirmationPassenger
                  className="order-confirmation-page__item"
                  item={item.person_info}
                  key={`departure-${index}`}
                />
              ))}
              {order.arrival.seats.map((item, index) => (
                <OrderConfirmationPassenger
                  className="order-confirmation-page__item"
                  item={item.person_info}
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
        <Dialog
          description="Сервер недоступен. Пожалуйста, попробуйте позже"
          onOpenChange={setOrderErrorOpen}
          open={orderErrorOpen}
          title="Сообщение об ошибке"
          type="error"
        />
        <Dialog onOpenChange={setOrderInfoOpen} open={orderInfoOpen} title="Данные успешно отправлены" type="info" />
      </div>
    </OrderLayout>
  );
}
