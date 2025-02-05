import Button from "../../../components/Button/Button";
import Paths from "../../../paths";
import Passenger from "./Item/Passenger";
import { changeOrder, selectOrder } from "../../../slices/order";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./PassengersInfo.css";

function PassengersInfo({ className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector(selectOrder);

  const arrivalTicketQuantity = order.arrival_ticket_quantity.adults + order.arrival_ticket_quantity.children;
  const departureTicketQuantity = order.departure_ticket_quantity.adults + order.departure_ticket_quantity.children;

  const btnEnable = () => {
    return order.departure_passengers.length === departureTicketQuantity
      && order.departure_passengers.every(passenger => typeof passenger === "object")
      && order.arrival_passengers.length === arrivalTicketQuantity
      && order.arrival_passengers.every(passenger => typeof passenger === "object");
  };
  const changeOrderPassengers = (type, passengers) => {
    if (type === "departure") {
      dispatch(changeOrder({ name: "departure_passengers", value: passengers }));
    }
    else if (type === "arrival") {
      dispatch(changeOrder({ name: "arrival_passengers", value: passengers }));
    }
  };
  const handleAdd = (event) => {
    event.preventDefault();

    if (order.departure_passengers.length < departureTicketQuantity) {
      const passengers = [...order.departure_passengers];

      passengers.push(undefined);

      changeOrderPassengers("departure", passengers);
    }
    else if (order.arrival_passengers.length < arrivalTicketQuantity) {
      const passengers = [...order.arrival_passengers];

      passengers.push(undefined);

      changeOrderPassengers("arrival", passengers);
    }
    else {
      console.warn("Не удалось определить куда должен быть добавлен пассажир");
    }
  };
  const handleClick = (event) => {
    event.preventDefault();

    navigate(Paths.PAYMENT);
  };
  const handleDelete = (type, index) => {
    if (type === "departure") {
      const passengers = [...order.departure_passengers];

      passengers[index] = undefined;

      changeOrderPassengers("departure", passengers);
    }
    else if (type === "arrival") {
      const passengers = [...order.arrival_passengers];

      passengers[index] = undefined;

      changeOrderPassengers("arrival", passengers);
    }
    else {
      console.warn("Не удалось определить откуда должен быть удален пассажир");
    }
  };
  const handleSubmit = (type, index, passenger) => {
    if (type === "departure") {
      const passengers = [...order.departure_passengers];

      passengers[index] = passenger;

      changeOrderPassengers("departure", passengers);
    }
    else if (type === "arrival") {
      const passengers = [...order.arrival_passengers];

      passengers[index] = passenger;

      changeOrderPassengers("arrival", passengers);
    }
    else {
      console.warn("Не удалось определить куда должен быть записан пассажир");
    }
  };

  return (
    <div className={cn("passengers-info", className)}>
      <div className="passengers-info__list">
        {order.departure_passengers.map((passenger, index) => {
          const number = index + 1;

          return (
            <Passenger
              className="passengers-info__item"
              key={number}
              number={number}
              onDelete={() => handleDelete("departure", index)}
              onSubmit={passenger => handleSubmit("departure", index, passenger)}
              values={passenger}
            />
          );
        })}
        {order.arrival_passengers.map((passenger, index) => {
          const number = order.departure_passengers.length + index + 1;

          return (
            <Passenger
              className="passengers-info__item"
              key={number}
              number={number}
              onDelete={() => handleDelete("arrival", index)}
              onSubmit={passenger => handleSubmit("arrival", index, passenger)}
              values={passenger}
            />
          );
        })}
        {(order.arrival_passengers.length + order.departure_passengers.length) < (arrivalTicketQuantity + departureTicketQuantity) && (
          <button className="passengers-info__add-btn" onClick={handleAdd} type="button">Добавить пассажира</button>
        )}
      </div>
      <Button
        className="passengers-info__btn"
        disabled={!btnEnable()}
        onClick={handleClick}
        type="button"
        variant="further"
      >
        ДАЛЕЕ
      </Button>
    </div>
  );
}

PassengersInfo.propTypes = { className: classNameType };

export default PassengersInfo;
