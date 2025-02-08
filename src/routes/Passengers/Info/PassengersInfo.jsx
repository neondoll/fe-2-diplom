import Button from "../../../components/Button/Button";
import Paths from "../../../paths";
import Passenger from "./Item/Passenger";
import { changeOrder, selectOrder } from "../../../slices/order";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PassengersInfo.css";

function PassengersInfo({ className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector(selectOrder);
  const [numberPassengers, setNumberPassengers] = useState(0);

  useEffect(() => {
    setNumberPassengers(
      order.departure.seats.filter(item => item.person_info).length
      + order.arrival.seats.filter(item => item.person_info).length,
    );
  }, [order.arrival.seats, order.departure.seats]);

  const btnEnable = () => {
    return order.departure.seats.every(item => typeof item.person_info === "object")
      && order.arrival.seats.every(item => typeof item.person_info === "object");
  };
  const changeOrderSeatPersonInfo = (name, seatIndex, passenger) => {
    dispatch(changeOrder({
      name, value: {
        ...order[name],
        seats: order[name].seats.map((item, index) => {
          return index === seatIndex
            ? {
                ...item,
                person_info: passenger ? getPersonInfo(passenger) : undefined,
              }
            : item;
        }),
      },
    }));
  };
  const getPassenger = (personInfo) => {
    return {
      birth_certificate_number: personInfo.document_type === "birth_certificate" ? personInfo.document_data : undefined,
      birthday: personInfo.birthday,
      document_type: personInfo.document_type,
      first_name: personInfo.first_name,
      gender: personInfo.gender,
      is_adult: personInfo.is_adult,
      last_name: personInfo.last_name,
      passport_number: personInfo.document_type === "passport" ? personInfo.document_data.split(" ")[1] : undefined,
      passport_series: personInfo.document_type === "passport" ? personInfo.document_data.split(" ")[0] : undefined,
      patronymic: personInfo.patronymic,
    };
  };
  const getPersonInfo = (passenger) => {
    let documentData = "";

    switch (passenger.document_type) {
      case "birth_certificate":
        documentData = `${passenger.birth_certificate_number}`;
        break;
      case "passport":
        documentData = `${passenger.passport_series} ${passenger.passport_number}`;
        break;
    }

    return {
      birthday: passenger.birthday,
      document_data: documentData,
      document_type: passenger.document_type,
      first_name: passenger.first_name,
      gender: passenger.gender,
      is_adult: passenger.is_adult,
      last_name: passenger.last_name,
      patronymic: passenger.patronymic,
    };
  };
  const handleAdd = (event) => {
    event.preventDefault();

    setNumberPassengers(prev => prev + 1);
  };
  const handleClick = (event) => {
    event.preventDefault();

    navigate(Paths.PAYMENT);
  };
  const handleDelete = (type, index) => changeOrderSeatPersonInfo(type, index, undefined);
  const handleSubmit = (type, index, passenger) => changeOrderSeatPersonInfo(type, index, passenger);

  return (
    <div className={cn("passengers-info", className)}>
      <div className="passengers-info__list">
        {order.departure.seats.map((item, index) => {
          const number = index + 1;

          if (number > numberPassengers) {
            return null;
          }

          return (
            <Passenger
              className="passengers-info__item"
              key={number}
              number={number}
              onDelete={() => handleDelete("departure", index)}
              onSubmit={passenger => handleSubmit("departure", index, passenger)}
              values={item.person_info ? getPassenger(item.person_info) : undefined}
            />
          );
        })}
        {order.arrival.seats.map((item, index) => {
          const number = order.departure.seats.length + index + 1;

          if (number > numberPassengers) {
            return null;
          }

          return (
            <Passenger
              className="passengers-info__item"
              key={number}
              number={number}
              onDelete={() => handleDelete("arrival", index)}
              onSubmit={passenger => handleSubmit("arrival", index, passenger)}
              values={item.person_info ? getPassenger(item.person_info) : undefined}
            />
          );
        })}
        {numberPassengers < (order.arrival.seats.length + order.departure.seats.length) && (
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
