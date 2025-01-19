import PropTypes from "prop-types";
import IconTrainOptions from "../../routes/Selection/IconTrainOptions";
import TrainDirection from "../TrainDirection/TrainDirection";
import TrainSeatPopover from "./SeatPopover/TrainSeatPopover.jsx";
import TrainShortInfo from "../TrainShortInfo/TrainShortInfo";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./TrainInfo.css";

function TrainInfo({ btn, className, item }) {
  return (
    <div className={cn("train-info", className)}>
      <div className="train-info__left">
        <TrainShortInfo
          cityFrom={item.departure.city_from}
          cityStart={item.departure.city_start}
          cityTo={item.departure.city_to}
          className={cn("train-info__left-container", "arrival" in item && "py-14.5")}
          name={item.departure.train_name}
        />
      </div>
      <div className="train-info__center">
        <div className="train-info__center-container">
          <TrainDirection
            className="train-info__departure"
            duration={item.departure.duration}
            fromCity={item.departure.from.city}
            fromRailwayStation={item.departure.from.railway_station}
            fromTime={item.departure.from.time}
            toCity={item.departure.to.city}
            toRailwayStation={item.departure.to.railway_station}
            toTime={item.departure.to.time}
            variant="departure"
          />
          {"arrival" in item && (
            <TrainDirection
              className="train-info__arrival"
              duration={item.arrival.duration}
              fromCity={item.arrival.from.city}
              fromRailwayStation={item.arrival.from.railway_station}
              fromTime={item.arrival.from.time}
              toCity={item.arrival.to.city}
              toRailwayStation={item.arrival.to.railway_station}
              toTime={item.arrival.to.time}
              variant="arrival"
            />
          )}
        </div>
      </div>
      <div className="train-info__right">
        <div className="train-info__right-container">
          <div className="train-info__seats">
            {"fourth" in item.departure && (
              <TrainSeatPopover
                bottomPrice={item.departure.fourth.bottom_price}
                bottomQuantity={item.departure.fourth.bottom_quantity}
                className="train-info__seat"
                key="fourth"
                title="Сидячий"
                topPrice={item.departure.fourth.top_price}
                topQuantity={item.departure.fourth.top_quantity}
              />
            )}
            {"third" in item.departure && (
              <TrainSeatPopover
                bottomPrice={item.departure.third.bottom_price}
                bottomQuantity={item.departure.third.bottom_quantity}
                className="train-info__seat"
                key="third"
                title="Плацкарт"
                topPrice={item.departure.third.top_price}
                topQuantity={item.departure.third.top_quantity}
              />
            )}
            {"second" in item.departure && (
              <TrainSeatPopover
                bottomPrice={item.departure.second.bottom_price}
                bottomQuantity={item.departure.second.bottom_quantity}
                className="train-info__seat"
                key="second"
                title="Купе"
                topPrice={item.departure.second.top_price}
                topQuantity={item.departure.second.top_quantity}
              />
            )}
            {"first" in item.departure && (
              <TrainSeatPopover
                bottomPrice={item.departure.first.bottom_price}
                bottomQuantity={item.departure.first.bottom_quantity}
                className="train-info__seat"
                key="first"
                title="Люкс"
                topPrice={item.departure.first.top_price}
                topQuantity={item.departure.first.top_quantity}
              />
            )}
          </div>
          <IconTrainOptions className="train-info__options" />
          {btn}
        </div>
      </div>
    </div>
  );
}

TrainInfo.propTypes = { btn: PropTypes.node, className: classNameType, item: PropTypes.object };

export default TrainInfo;
