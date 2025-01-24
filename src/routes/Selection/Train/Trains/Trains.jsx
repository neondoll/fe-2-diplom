import Button from "../../../../components/Button/Button";
import Paths from "../../../../paths";
import PropTypes from "prop-types";
import RouteInfo from "../../../../components/RouteInfo/RouteInfo";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { routeType } from "../../../../types/route";
import { useNavigate } from "react-router-dom";
import "./Trains.css";

function Trains({ className, items }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    navigate(Paths.SELECTION_SEATS);
  };

  return (
    <div className={cn("trains", className)}>
      {items.map((item, index) => (
        <RouteInfo
          btn={(
            <Button className="trains__item-btn" type="button" variant="choose-places" onClick={handleClick}>
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

Trains.propTypes = { className: classNameType, items: PropTypes.arrayOf(routeType) };

export default Trains;
