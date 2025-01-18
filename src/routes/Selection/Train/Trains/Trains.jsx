import Button from "../../../../components/Button/Button";
import Paths from "../../../../paths";
import PropTypes from "prop-types";
import TrainInfo from "../../../../components/TrainInfo/TrainInfo";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
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
        <TrainInfo
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

Trains.propTypes = { className: classNameType, items: PropTypes.array };

export default Trains;
