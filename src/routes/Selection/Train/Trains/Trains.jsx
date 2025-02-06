import Button from "../../../../components/Button/Button";
import Paths from "../../../../paths";
import PropTypes from "prop-types";
import RouteInfo from "../../../../components/RouteInfo/RouteInfo";
import { changeOrder } from "../../../../slices/order";
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

    dispatch(initChosenRoute({ arrival: item.arrival, departure: item.departure }));
    dispatch(changeOrder({ name: "arrival", value: { route_direction_id: item.arrival?._id } }));
    dispatch(changeOrder({ name: "departure", value: { route_direction_id: item.departure?._id } }));

    navigate(Paths.SELECTION_SEATS);
  };

  return (
    <div className={cn("trains", className)} data-loading={loading}>
      {items.map((item, index) => (
        <RouteInfo
          btn={(
            <Button
              className="trains__item-btn"
              onClick={event => handleClick(event, item)}
              type="button"
              variant="choose-places"
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
