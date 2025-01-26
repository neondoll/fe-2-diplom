import Button from "../../../../components/Button/Button";
import Paths from "../../../../paths";
import PropTypes from "prop-types";
import RouteInfo from "../../../../components/RouteInfo/RouteInfo";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { initChosenRoute } from "../../../../slices/chosenRoute";
import { routeType } from "../../../../types/route";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Trains.css";

function Trains({ className, items, loading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event, item) => {
    event.preventDefault();

    dispatch(initChosenRoute({
      arrival_duration: "arrival" in item ? item.arrival.duration : null,
      arrival_from_city_name: "arrival" in item ? item.arrival.from.city.name : null,
      arrival_from_datetime: "arrival" in item ? item.arrival.from.datetime : null,
      arrival_from_railway_station_name: "arrival" in item ? item.arrival.from.railway_station_name : null,
      arrival_id: "arrival" in item ? item.arrival._id : null,
      arrival_to_city_name: "arrival" in item ? item.arrival.to.city.name : null,
      arrival_to_datetime: "arrival" in item ? item.arrival.to.datetime : null,
      arrival_to_railway_station_name: "arrival" in item ? item.arrival.to.railway_station_name : null,
      arrival_train_name: "arrival" in item ? item.arrival.train.name : null,
      departure_duration: "departure" in item ? item.departure.duration : null,
      departure_from_city_name: "departure" in item ? item.departure.from.city.name : null,
      departure_from_datetime: "departure" in item ? item.departure.from.datetime : null,
      departure_from_railway_station_name: "departure" in item ? item.departure.from.railway_station_name : null,
      departure_id: "departure" in item ? item.departure._id : null,
      departure_to_city_name: "departure" in item ? item.departure.to.city.name : null,
      departure_to_datetime: "departure" in item ? item.departure.to.datetime : null,
      departure_to_railway_station_name: "departure" in item ? item.departure.to.railway_station_name : null,
      departure_train_name: "departure" in item ? item.departure.train.name : null,
    }));
    navigate(Paths.SELECTION_SEATS);
  };

  return (
    <div className={cn("trains", className)} data-loading={loading}>
      {items.map((item, index) => (
        <RouteInfo
          btn={(
            <Button
              className="trains__item-btn"
              type="button"
              variant="choose-places"
              onClick={event => handleClick(event, item)}
            >
              Выбрать места
            </Button>
          )}
          className="trains__item"
          item={item}
          key={index + 1}
        />
      ))}
    </div>
  );
}

Trains.propTypes = { className: classNameType, items: PropTypes.arrayOf(routeType), loading: PropTypes.bool };

export default Trains;
