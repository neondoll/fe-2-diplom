import Button from "../../../components/Button/Button";
import Paths from "../../../paths";
import SelectionSeatsExchange from "./Exchange/SelectionSeatsExchange";
import SelectionSeatsTicketQuantity from "./TicketQuantity/SelectionSeatsTicketQuantity";
import SelectionSeatsTrain from "./Train/SelectionSeatsTrain";
import SelectionSeatsWagonDetails from "./WagonDetails/SelectionSeatsWagonDetails";
import SelectionSeatsWagonType from "./WagonType/SelectionSeatsWagonType";
import { changeOrder, selectOrder } from "../../../slices/order";
import { cn } from "../../../lib/utils";
import { train } from "../../../constants/train";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./SelectionSeats.css";

export default function SelectionSeats() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector(selectOrder);
  const { className } = useOutletContext();

  const handleChange = (data) => {
    console.log(data);

    Object.entries(data).forEach(([name, value]) => {
      dispatch(changeOrder({ name, value }));
    });
  };
  const handleClick = (event) => {
    event.preventDefault();

    navigate(Paths.PASSENGERS);
  };

  return (
    <div className={cn("selection-seats", className)}>
      <h1 className="selection-seats__title">Выбор мест</h1>
      <div className="selection-seats__container">
        <SelectionSeatsExchange className="selection-seats__exchange" variant="departure" />
        <SelectionSeatsTrain className="selection-seats__train" variant="departure" />
        <SelectionSeatsTicketQuantity
          className="selection-seats__ticket-quantity"
          onChange={(newValues) => {
            handleChange({ departure_ticket_quantity: newValues });
          }}
          values={order.departure_ticket_quantity}
        />
        <SelectionSeatsWagonType
          className="selection-seats__wagon-type"
          onChange={(newValue) => {
            handleChange({ departure_seats: [], departure_wagon_number: undefined, departure_wagon_type: newValue });
          }}
          value={order.departure_wagon_type}
        />
        <SelectionSeatsWagonDetails
          className="selection-seats__wagon-details"
          onChange={(newValues) => {
            handleChange({
              departure_seats: "seats" in newValues ? newValues.seats : order.departure_seats,
              departure_wagon_number: "wagon_number" in newValues ? newValues.wagon_number : order.departure_wagon_number,
            });
          }}
          train={train}
          type={order.departure_wagon_type}
          values={{ seats: order.departure_seats, wagon_number: order.departure_wagon_number }}
        />
      </div>
      <div className="selection-seats__container">
        <SelectionSeatsExchange className="selection-seats__exchange" variant="arrival" />
        <SelectionSeatsTrain className="selection-seats__train" variant="arrival" />
        <SelectionSeatsTicketQuantity
          className="selection-seats__ticket-quantity"
          onChange={(newValues) => {
            handleChange({ arrival_ticket_quantity: newValues });
          }}
          values={order.arrival_ticket_quantity}
        />
        <SelectionSeatsWagonType
          className="selection-seats__wagon-type"
          onChange={(newValue) => {
            handleChange({ arrival_seats: [], arrival_wagon_number: undefined, arrival_wagon_type: newValue });
          }}
          value={order.arrival_wagon_type}
        />
        <SelectionSeatsWagonDetails
          className="selection-seats__wagon-details"
          onChange={(newValues) => {
            handleChange({
              arrival_seats: "seats" in newValues ? newValues.seats : order.arrival_seats,
              arrival_wagon_number: "wagon_number" in newValues ? newValues.wagon_number : order.arrival_wagon_number,
            });
          }}
          train={train}
          type={order.arrival_wagon_type}
          values={{ seats: order.arrival_seats, wagon_number: order.arrival_wagon_number }}
        />
      </div>
      <Button className="selection-seats__btn" variant="further" onClick={handleClick}>ДАЛЕЕ</Button>
    </div>
  );
}
