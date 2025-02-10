import Button from "../../../components/Button/Button";
import Dialog from "../../../components/Dialog/Dialog";
import Paths from "../../../paths";
import SelectionSeatsCoachClassType from "./CoachClassType/SelectionSeatsCoachClassType";
import SelectionSeatsCoachDetails from "./CoachDetails/SelectionSeatsCoachDetails";
import SelectionSeatsExchange from "./Exchange/SelectionSeatsExchange";
import SelectionSeatsRoute from "./Route/SelectionSeatsRoute";
import SelectionSeatsTicketQuantity from "./TicketQuantity/SelectionSeatsTicketQuantity";
import useGetSeats from "../../../services/useGetSeats";
import { changeOrder, selectOrder } from "../../../slices/order";
import { cn } from "../../../lib/utils";
import { initChosenCoach, selectChosenCoach } from "../../../slices/chosenCoach";
import { selectRoutesSearch } from "../../../slices/routesSearch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SelectionSeats.css";

const plug = [
  {
    coach: {
      _id: "66ac8b6ccb563f00521754c7",
      name: "ПТН-86",
      class_type: "first",
      have_wifi: true,
      have_air_conditioning: true,
      price: 2830,
      top_price: 3525,
      bottom_price: 2655,
      side_price: 0,
      linens_price: 83,
      wifi_price: 285,
      is_linens_included: true,
      available_seats: 5,
      train: "66ac8b6fcb563f00521759fb",
    },
    seats: [
      { index: 1, available: true },
      { index: 2, available: true },
      { index: 3, available: true },
      { index: 4, available: true },
      { index: 5, available: true },
    ],
  },
  {
    coach: {
      _id: "66ac8b6ccb563f00521754c8",
      name: "БЛИММ-74",
      class_type: "fourth",
      have_wifi: false,
      have_air_conditioning: true,
      price: 0,
      top_price: 521,
      bottom_price: 768,
      side_price: 0,
      linens_price: 0,
      wifi_price: 73,
      is_linens_included: false,
      available_seats: 49,
      train: "66ac8b6fcb563f00521759fb",
    },
    seats: [
      { index: 1, available: true },
      { index: 2, available: true },
      { index: 3, available: true },
      { index: 4, available: true },
      { index: 5, available: true },
      { index: 6, available: true },
      { index: 7, available: true },
      { index: 8, available: true },
      { index: 9, available: true },
      { index: 10, available: true },
      { index: 11, available: true },
      { index: 12, available: true },
      { index: 13, available: true },
      { index: 14, available: true },
      { index: 15, available: true },
      { index: 16, available: true },
      { index: 17, available: true },
      { index: 18, available: true },
      { index: 19, available: true },
      { index: 20, available: true },
      { index: 21, available: true },
      { index: 22, available: true },
      { index: 23, available: true },
      { index: 24, available: true },
      { index: 25, available: true },
      { index: 26, available: true },
      { index: 27, available: true },
      { index: 28, available: true },
      { index: 29, available: true },
      { index: 30, available: true },
      { index: 31, available: true },
      { index: 32, available: true },
      { index: 33, available: true },
      { index: 34, available: true },
      { index: 35, available: true },
      { index: 36, available: true },
      { index: 37, available: true },
      { index: 38, available: true },
      { index: 39, available: true },
      { index: 40, available: true },
      { index: 41, available: true },
      { index: 42, available: true },
      { index: 43, available: true },
      { index: 44, available: true },
      { index: 45, available: true },
      { index: 46, available: true },
      { index: 47, available: true },
      { index: 48, available: true },
      { index: 49, available: true },
    ],
  },
  {
    coach: {
      _id: "66ac8b6ccb563f00521754c9",
      name: "УУУ-46",
      class_type: "third",
      have_wifi: false,
      have_air_conditioning: true,
      price: 0,
      top_price: 2585,
      bottom_price: 2895,
      side_price: 3260,
      linens_price: 113,
      wifi_price: 261,
      is_linens_included: false,
      available_seats: 35,
      train: "66ac8b6fcb563f00521759fb",
    },
    seats: [
      { index: 1, available: true },
      { index: 2, available: true },
      { index: 3, available: true },
      { index: 4, available: true },
      { index: 5, available: true },
      { index: 6, available: true },
      { index: 7, available: true },
      { index: 8, available: true },
      { index: 9, available: true },
      { index: 10, available: true },
      { index: 11, available: true },
      { index: 12, available: true },
      { index: 13, available: true },
      { index: 14, available: true },
      { index: 15, available: true },
      { index: 16, available: true },
      { index: 17, available: true },
      { index: 18, available: true },
      { index: 19, available: true },
      { index: 20, available: true },
      { index: 21, available: true },
      { index: 22, available: true },
      { index: 23, available: true },
      { index: 24, available: true },
      { index: 25, available: true },
      { index: 26, available: true },
      { index: 27, available: true },
      { index: 28, available: true },
      { index: 29, available: true },
      { index: 30, available: true },
      { index: 31, available: true },
      { index: 32, available: true },
      { index: 33, available: true },
      { index: 34, available: true },
      { index: 35, available: true },
    ],
  },
  {
    coach: {
      _id: "66ac8b6ccb563f00521754ca",
      name: "ДЖЗИИЛ-72",
      class_type: "second",
      have_wifi: false,
      have_air_conditioning: true,
      price: 0,
      top_price: 2682,
      bottom_price: 1965,
      side_price: 0,
      linens_price: 197,
      wifi_price: 103,
      is_linens_included: true,
      available_seats: 19,
      train: "66ac8b6fcb563f00521759fb",
    },
    seats: [
      { index: 1, available: true },
      { index: 2, available: true },
      { index: 3, available: true },
      { index: 4, available: true },
      { index: 5, available: true },
      { index: 6, available: true },
      { index: 7, available: true },
      { index: 8, available: true },
      { index: 9, available: true },
      { index: 10, available: true },
      { index: 11, available: true },
      { index: 12, available: true },
      { index: 13, available: true },
      { index: 14, available: true },
      { index: 15, available: true },
      { index: 16, available: true },
      { index: 17, available: true },
      { index: 18, available: true },
      { index: 19, available: true },
    ],
  },
];

export default function SelectionSeats() {
  const chosenCoach = useSelector(selectChosenCoach);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector(selectOrder);
  const routesSearch = useSelector(selectRoutesSearch);
  const { className, setLoading } = useOutletContext();
  const [arrivalData, setArrivalData] = useState([]);
  const [arrivalOpen, setArrivalOpen] = useState(false);
  const [departureData, setDepartureData] = useState([]);
  const [departureOpen, setDepartureOpen] = useState(false);
  const [form, setForm] = useState({
    arrival_coach_class_type: undefined,
    arrival_coach_id: undefined,
    arrival_options: { linens: false, wifi: false },
    arrival_seats: [],
    arrival_ticket_quantity: { adults: 0, babies: 0, children: 0 },
    departure_coach_class_type: undefined,
    departure_coach_id: undefined,
    departure_options: { linens: false, wifi: false },
    departure_seats: [],
    departure_ticket_quantity: { adults: 0, babies: 0, children: 0 },
  });
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

  const isAdult = item => !item.is_child;
  const isBaby = item => item.include_children_seat;
  const isChild = item => item.is_child;

  useEffect(() => {
    if (!arrivalApi.loading) {
      setArrivalData(arrivalApi.data);
    }
  }, [arrivalApi.data, arrivalApi.loading]);
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
    setForm({
      arrival_coach_class_type: chosenCoach.arrival ? chosenCoach.arrival.class_type : undefined,
      arrival_coach_id: chosenCoach.arrival ? chosenCoach.arrival._id : undefined,
      arrival_seats: order.arrival.seats
        ? order.arrival.seats.map(item => ({ index: item.seat_number, price: item.seat_price }))
        : [],
      arrival_ticket_quantity: {
        adults: order.arrival.seats ? order.arrival.seats.filter(isAdult).length : 0,
        babies: order.arrival.seats ? order.arrival.seats.filter(isBaby).length : 0,
        children: order.arrival.seats ? order.arrival.seats.filter(isChild).length : 0,
      },
      departure_coach_class_type: chosenCoach.departure ? chosenCoach.departure.class_type : undefined,
      departure_coach_id: chosenCoach.departure ? chosenCoach.departure._id : undefined,
      departure_seats: order.departure.seats
        ? order.departure.seats.map(item => ({ index: item.seat_number, price: item.seat_price }))
        : [],
      departure_ticket_quantity: {
        adults: order.departure.seats ? order.departure.seats.filter(isAdult).length : 0,
        babies: order.departure.seats ? order.departure.seats.filter(isBaby).length : 0,
        children: order.departure.seats ? order.departure.seats.filter(isChild).length : 0,
      },
    });
  }, [chosenCoach.arrival, chosenCoach.departure, order.arrival.seats, order.departure.seats]);
  useEffect(() => {
    if (!departureApi.loading) {
      if (departureApi.data.length > 0) {
        setDepartureData(departureApi.data);
      }
      else {
        setDepartureData(plug);
      }
    }
  }, [departureApi.data, departureApi.loading]);
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
    return form.departure_ticket_quantity.adults > 0
      && form.departure_ticket_quantity.babies <= form.departure_ticket_quantity.adults
      && form.departure_seats.length === (form.departure_ticket_quantity.adults + form.departure_ticket_quantity.children)
      && (
        arrivalData.length === 0 || (
          form.arrival_ticket_quantity.adults > 0
          && form.arrival_ticket_quantity.babies <= form.arrival_ticket_quantity.adults
          && form.arrival_seats.length === (form.arrival_ticket_quantity.adults + form.arrival_ticket_quantity.children)
        )
      );
  };
  const handleClick = (event) => {
    event.preventDefault();

    dispatch(initChosenCoach({
      arrival: arrivalData.find(item => item.coach._id === form.arrival_coach_id && item.coach.class_type === form.arrival_coach_class_type)?.coach,
      departure: departureData.find(item => item.coach._id === form.departure_coach_id && item.coach.class_type === form.departure_coach_class_type)?.coach,
    }));
    dispatch(changeOrder({
      name: "arrival",
      value: {
        ...order.arrival,
        seats: form.arrival_seats.map((seat, index) => ({
          coach_id: form.arrival_coach_id,
          include_children_seat: index <= form.arrival_ticket_quantity.babies - 1,
          is_child: index > form.arrival_ticket_quantity.adults - 1,
          person_info: undefined,
          seat_number: seat.index,
          seat_price: seat.price,
        })),
      },
    }));
    dispatch(changeOrder({
      name: "departure",
      value: {
        ...order.departure,
        seats: form.departure_seats.map((seat, index) => ({
          coach_id: form.departure_coach_id,
          include_children_seat: index <= form.departure_ticket_quantity.babies - 1,
          is_child: index > form.departure_ticket_quantity.adults - 1,
          person_info: undefined,
          seat_number: seat.index,
          seat_price: seat.price,
        })),
      },
    }));

    navigate(Paths.PASSENGERS);
  };

  return (
    <div className={cn("selection-seats", className)}>
      <h1 className="selection-seats__title">Выбор мест</h1>
      {departureData.length > 0 && (
        <div className="selection-seats__container" data-loading={departureApi.loading}>
          <SelectionSeatsExchange className="selection-seats__exchange" variant="departure" />
          <SelectionSeatsRoute className="selection-seats__route" variant="departure" />
          <SelectionSeatsTicketQuantity
            className="selection-seats__ticket-quantity"
            onChange={newValues => setForm(prev => ({ ...prev, departure_ticket_quantity: newValues }))}
            values={form.departure_ticket_quantity}
          />
          <SelectionSeatsCoachClassType
            className="selection-seats__coach-class-type"
            itemDisabled={value => !departureData.map(item => item.coach.class_type).includes(value)}
            onChange={newValue => setForm(prev => ({
              ...prev,
              departure_coach_class_type: newValue,
              departure_coach_id: undefined,
              departure_options: { linens: false, wifi: false },
              departure_seats: [],
            }))}
            value={form.departure_coach_class_type}
          />
          <SelectionSeatsCoachDetails
            className="selection-seats__coach-details"
            classType={form.departure_coach_class_type}
            coaches={departureData}
            onChange={newValues => setForm(prev => ({
              ...prev,
              departure_coach_id: "coach_id" in newValues ? newValues.coach_id : form.departure_coach_id,
              departure_options: "options" in newValues ? newValues.options : form.departure_options,
              departure_seats: "seats" in newValues ? newValues.seats : form.departure_seats,
            }))}
            values={{
              coach_id: form.departure_coach_id,
              options: form.departure_options,
              seats: form.departure_seats,
            }}
          />
        </div>
      )}
      {arrivalData.length > 0 && (
        <div className="selection-seats__container" data-loading={arrivalApi.loading}>
          <SelectionSeatsExchange className="selection-seats__exchange" variant="arrival" />
          <SelectionSeatsRoute className="selection-seats__route" variant="arrival" />
          <SelectionSeatsTicketQuantity
            className="selection-seats__ticket-quantity"
            onChange={newValues => setForm(prev => ({ ...prev, arrival_ticket_quantity: newValues }))}
            values={form.arrival_ticket_quantity}
          />
          <SelectionSeatsCoachClassType
            className="selection-seats__wagon-type"
            itemDisabled={value => !arrivalData.map(item => item.coach.class_type).includes(value)}
            onChange={newValue => setForm(prev => ({
              ...prev,
              arrival_coach_class_type: newValue,
              arrival_coach_id: undefined,
              arrival_options: { linens: false, wifi: false },
              arrival_seats: [],
            }))}
            value={form.arrival_coach_class_type}
          />
          <SelectionSeatsCoachDetails
            className="selection-seats__wagon-details"
            classType={form.arrival_coach_class_type}
            coaches={arrivalData}
            onChange={newValues => setForm(prev => ({
              ...prev,
              arrival_coach_id: "coach_id" in newValues ? newValues.coach_id : form.arrival_coach_id,
              arrival_options: "options" in newValues ? newValues.options : form.arrival_options,
              arrival_seats: "seats" in newValues ? newValues.seats : form.arrival_seats,
            }))}
            values={{ coach_id: form.arrival_coach_id, options: form.arrival_options, seats: form.arrival_seats }}
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
