import Button from "../../../components/Button/Button";
import Dialog from "../../../components/Dialog/Dialog";
import Paths from "../../../paths";
import SelectionSeatsCoachClassType from "./CoachClassType/SelectionSeatsCoachClassType";
import SelectionSeatsCoachDetails from "./CoachDetails/SelectionSeatsCoachDetails";
import SelectionSeatsExchange from "./Exchange/SelectionSeatsExchange";
import SelectionSeatsRoute from "./Route/SelectionSeatsRoute";
import SelectionSeatsTicketQuantity from "./TicketQuantity/SelectionSeatsTicketQuantity";
import useGetSeats from "../../../services/useGetSeats";
import { changeChosenSeats, selectChosenSeats } from "../../../slices/chosenSeats";
import { changeOrder, selectOrder } from "../../../slices/order";
import { cn } from "../../../lib/utils";
import { selectRoutesSearch } from "../../../slices/routesSearch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SelectionSeats.css";

export default function SelectionSeats() {
  const chosenSeats = useSelector(selectChosenSeats);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector(selectOrder);
  const routesSearch = useSelector(selectRoutesSearch);
  const { className, setLoading } = useOutletContext();
  const [arrivalOpen, setArrivalOpen] = useState(false);
  const [departureOpen, setDepartureOpen] = useState(false);
  // const [form, setForm] = useState({
  //  arrival_coach_class_type: undefined,
  //  arrival_ticket_quantity: { adults: 0, babies: 0, children: 0 },
  //  departure_coach_class_type: undefined,
  //  departure_ticket_quantity: { adults: 0, babies: 0, children: 0 },
  // });
  const [loadingPage, setLoadingPage] = useState(true);

  const arrivalApi = useGetSeats(order.arrival.route_direction_id, {
    have_first_class: routesSearch.have_first_class, // Люкс (true/false)
    have_second_class: routesSearch.have_second_class, // Купе (true/false)
    have_third_class: routesSearch.have_third_class, // Плацкарт (true/false)
    have_fourth_class: routesSearch.have_fourth_class, // Сидячее место (true/false)
    have_wifi: routesSearch.have_wifi, // Имеется WiFi (true/false)
    have_air_conditioning: routesSearch.have_air_conditioning, // Имеется кондиционер (true/false)
    have_express: routesSearch.have_express, // Экспресс (true/false)
  });
  const departureApi = useGetSeats(order.departure.route_direction_id, {
    have_first_class: routesSearch.have_first_class, // Люкс (true/false)
    have_second_class: routesSearch.have_second_class, // Купе (true/false)
    have_third_class: routesSearch.have_third_class, // Плацкарт (true/false)
    have_fourth_class: routesSearch.have_fourth_class, // Сидячее место (true/false)
    have_wifi: routesSearch.have_wifi, // Имеется WiFi (true/false)
    have_air_conditioning: routesSearch.have_air_conditioning, // Имеется кондиционер (true/false)
    have_express: routesSearch.have_express, // Экспресс (true/false)
  });

  useEffect(() => {
    if (arrivalApi.error) {
      console.error(arrivalApi.error);

      if (order.arrival.route_direction_id) {
        setArrivalOpen(true);
      }
    }
  }, [arrivalApi.error, order.arrival.route_direction_id]);
  useEffect(() => {
    if (!arrivalApi.loading && !departureApi.loading) {
      setLoadingPage(false);
    }
  }, [arrivalApi.loading, departureApi.loading]);
  useEffect(() => {
    if (departureApi.error) {
      console.error(departureApi.error);

      if (order.departure.route_direction_id) {
        setDepartureOpen(true);
      }
    }
  }, [departureApi.error, order.departure.route_direction_id]);
  useEffect(() => {
    setLoading(loadingPage);
  }, [loadingPage, setLoading]);

  if (loadingPage) {
    return null;
  }

  const btnEnabled = () => {
    return chosenSeats.departure_ticket_quantity.adults > 0
      && chosenSeats.departure_ticket_quantity.babies <= chosenSeats.departure_ticket_quantity.adults
      && order.departure_seats.length === (chosenSeats.departure_ticket_quantity.adults + chosenSeats.departure_ticket_quantity.children)
      && (
        arrivalApi.data.length === 0 || (
          chosenSeats.arrival_ticket_quantity.adults > 0
          && chosenSeats.arrival_ticket_quantity.babies <= chosenSeats.arrival_ticket_quantity.adults
          && order.arrival_seats.length === (chosenSeats.arrival_ticket_quantity.adults + chosenSeats.arrival_ticket_quantity.children)
        )
      );
  };
  const handleChange = (data) => {
    Object.entries(data).forEach(([name, value]) => {
      dispatch(changeOrder({ name, value }));
    });
  };
  const handleChangeChosenSeats = (data) => {
    Object.entries(data).forEach(([name, value]) => {
      dispatch(changeChosenSeats({ name, value }));
    });
  };
  const handleClick = (event) => {
    event.preventDefault();

    navigate(Paths.PASSENGERS);
  };

  return (
    <div className={cn("selection-seats", className)}>
      <h1 className="selection-seats__title">Выбор мест</h1>
      {departureApi.data.length > 0 && (
        <div className="selection-seats__container" data-loading={departureApi.loading}>
          <SelectionSeatsExchange className="selection-seats__exchange" variant="departure" />
          <SelectionSeatsRoute className="selection-seats__route" variant="departure" />
          <SelectionSeatsTicketQuantity
            className="selection-seats__ticket-quantity"
            onChange={(newValues) => {
              handleChangeChosenSeats({ departure_ticket_quantity: newValues });
            }}
            values={chosenSeats.departure_ticket_quantity}
          />
          <SelectionSeatsCoachClassType
            className="selection-seats__coach-class-type"
            itemDisabled={value => !departureApi.data.map(item => item.coach.class_type).includes(value)}
            onChange={(newValue) => {
              handleChangeChosenSeats({ departure_coach_class_type: newValue });
              handleChange({
                departure_coach_id: undefined,
                departure_options: { linens: 0, wifi: 0 },
                departure_seats: [],
              });
            }}
            value={chosenSeats.departure_coach_class_type}
          />
          <SelectionSeatsCoachDetails
            className="selection-seats__coach-details"
            classType={chosenSeats.departure_coach_class_type}
            coaches={departureApi.data}
            onChange={(newValues) => {
              handleChange({
                departure_coach_id: "coach_id" in newValues ? newValues.coach_id : order.departure_coach_id,
                departure_options: "options" in newValues ? newValues.options : order.departure_options,
                departure_seats: "seats" in newValues ? newValues.seats : order.departure_seats,
              });
            }}
            values={{
              coach_id: order.departure_coach_id,
              options: order.departure_options,
              seats: order.departure_seats,
            }}
          />
        </div>
      )}
      {arrivalApi.data.length > 0 && (
        <div className="selection-seats__container" data-loading={arrivalApi.loading}>
          <SelectionSeatsExchange className="selection-seats__exchange" variant="arrival" />
          <SelectionSeatsRoute className="selection-seats__route" variant="arrival" />
          <SelectionSeatsTicketQuantity
            className="selection-seats__ticket-quantity"
            onChange={(newValues) => {
              handleChangeChosenSeats({ arrival_ticket_quantity: newValues });
            }}
            values={chosenSeats.arrival_ticket_quantity}
          />
          <SelectionSeatsCoachClassType
            className="selection-seats__wagon-type"
            itemDisabled={value => !arrivalApi.data.map(item => item.coach.class_type).includes(value)}
            onChange={(newValue) => {
              handleChangeChosenSeats({ arrival_coach_class_type: newValue });
              handleChange({
                arrival_coach_id: undefined,
                arrival_options: { linens: 0, wifi: 0 },
                arrival_seats: [],
              });
            }}
            value={chosenSeats.arrival_coach_class_type}
          />
          <SelectionSeatsCoachDetails
            className="selection-seats__wagon-details"
            classType={chosenSeats.arrival_coach_class_type}
            coaches={arrivalApi.data}
            onChange={(newValues) => {
              handleChange({
                arrival_coach_id: "coach_id" in newValues ? newValues.coach_id : order.arrival_coach_id,
                arrival_options: "options" in newValues ? newValues.options : order.arrival_options,
                arrival_seats: "seats" in newValues ? newValues.seats : order.arrival_seats,
              });
            }}
            values={{ coach_id: order.arrival_coach_id, options: order.arrival_options, seats: order.arrival_seats }}
          />
        </div>
      )}
      <Button className="selection-seats__btn" disabled={!btnEnabled()} onClick={handleClick} variant="further">
        ДАЛЕЕ
      </Button>
      <Dialog
        description={departureApi.error}
        onOpenChange={setDepartureOpen}
        open={departureOpen}
        title="Сообщение об ошибке"
        type="error"
      />
      <Dialog
        description={arrivalApi.error}
        onOpenChange={setArrivalOpen}
        open={arrivalOpen}
        title="Сообщение об ошибке"
        type="error"
      />
    </div>
  );
}
