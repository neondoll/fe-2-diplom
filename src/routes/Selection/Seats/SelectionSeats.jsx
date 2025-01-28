import Button from "../../../components/Button/Button";
import Paths from "../../../paths";
import SelectionSeatsCoachClassType from "./CoachClassType/SelectionSeatsCoachClassType";
import SelectionSeatsCoachDetails from "./CoachDetails/SelectionSeatsCoachDetails";
import SelectionSeatsExchange from "./Exchange/SelectionSeatsExchange";
import SelectionSeatsRoute from "./Route/SelectionSeatsRoute";
import SelectionSeatsTicketQuantity from "./TicketQuantity/SelectionSeatsTicketQuantity";
import useGetSeats from "../../../services/useGetSeats";
import { changeOrder, selectOrder } from "../../../slices/order";
import { cn } from "../../../lib/utils";
import { selectChosenRoute } from "../../../slices/chosenRoute";
import { selectRoutesSearch } from "../../../slices/routesSearch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SelectionSeats.css";

export default function SelectionSeats() {
  const chosenRoute = useSelector(selectChosenRoute);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector(selectOrder);
  const routesSearch = useSelector(selectRoutesSearch);
  const { className, setLoading } = useOutletContext();
  const [loadingPage, setLoadingPage] = useState(true);

  const arrivalApi = useGetSeats(chosenRoute.arrival_id, {
    have_air_conditioning: routesSearch.have_air_conditioning,
    have_first_class: routesSearch.have_first_class,
    have_fourth_class: routesSearch.have_fourth_class,
    have_second_class: routesSearch.have_second_class,
    have_third_class: routesSearch.have_third_class,
    have_wifi: routesSearch.have_wifi,
  });
  const departureApi = useGetSeats(chosenRoute.departure_id, {
    have_air_conditioning: routesSearch.have_air_conditioning,
    have_first_class: routesSearch.have_first_class,
    have_fourth_class: routesSearch.have_fourth_class,
    have_second_class: routesSearch.have_second_class,
    have_third_class: routesSearch.have_third_class,
    have_wifi: routesSearch.have_wifi,
  });

  useEffect(() => {
    if (arrivalApi.error) {
      console.error(arrivalApi.error);
    }
  }, [arrivalApi.error]);
  useEffect(() => {
    if (departureApi.error) {
      console.error(departureApi.error);
    }
  }, [departureApi.error]);
  useEffect(() => {
    console.log("loading in SelectionSeats", arrivalApi.loading || departureApi.loading);

    if (!arrivalApi.loading && !departureApi.loading) {
      setLoadingPage(false);
    }
  }, [arrivalApi.loading, departureApi.loading]);
  useEffect(() => {
    console.log("setLoading in SelectionSeats", loadingPage);
    setLoading(loadingPage);
  }, [loadingPage, setLoading]);

  if (loadingPage) {
    return null;
  }

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
      {departureApi.data.length > 0 && (
        <div className="selection-seats__container" data-loading={departureApi.loading}>
          <SelectionSeatsExchange className="selection-seats__exchange" variant="departure" />
          <SelectionSeatsRoute className="selection-seats__route" variant="departure" />
          <SelectionSeatsTicketQuantity
            className="selection-seats__ticket-quantity"
            onChange={(newValues) => {
              handleChange({ departure_ticket_quantity: newValues });
            }}
            values={order.departure_ticket_quantity}
          />
          <SelectionSeatsCoachClassType
            className="selection-seats__coach-class-type"
            itemDisabled={value => !departureApi.data.map(item => item.coach.class_type).includes(value)}
            onChange={(newValue) => {
              handleChange({
                departure_coach_class_type: newValue,
                departure_coach_id: undefined,
                departure_options: { linens: false, wifi: false },
                departure_seats: [],
              });
            }}
            value={order.departure_coach_class_type}
          />
          <SelectionSeatsCoachDetails
            className="selection-seats__coach-details"
            classType={order.departure_coach_class_type}
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
              handleChange({ arrival_ticket_quantity: newValues });
            }}
            values={order.arrival_ticket_quantity}
          />
          <SelectionSeatsCoachClassType
            className="selection-seats__wagon-type"
            itemDisabled={value => !arrivalApi.data.map(item => item.coach.class_type).includes(value)}
            onChange={(newValue) => {
              handleChange({
                arrival_coach_class_type: newValue,
                arrival_coach_id: undefined,
                arrival_options: { linens: false, wifi: false },
                arrival_seats: [],
              });
            }}
            value={order.arrival_coach_class_type}
          />
          <SelectionSeatsCoachDetails
            className="selection-seats__wagon-details"
            classType={order.arrival_coach_class_type}
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
      <Button className="selection-seats__btn" variant="further" onClick={handleClick}>ДАЛЕЕ</Button>
    </div>
  );
}
