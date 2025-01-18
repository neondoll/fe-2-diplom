import IconTrainOptions from "../IconTrainOptions";
import { classNameType } from "../../../types/base";
import { cn, formatPrice } from "../../../lib/utils";
import "./LastTickets.css";

const tickets = [
  {
    city_from: "Санкт-Петербург",
    city_to: "Самара",
    railway_station_from: "Курский вокзал",
    railway_station_to: "Московский\nвокзал",
    min_price: 2500,
  },
  {
    city_from: "Москва",
    city_to: "Казань",
    railway_station_from: "Курский вокзал",
    railway_station_to: "Московский\nвокзал",
    min_price: 3500,
  },
  {
    city_from: "Казань",
    city_to: "Нижний новгород",
    railway_station_from: "Курский вокзал",
    railway_station_to: "Московский\nвокзал",
    min_price: 3800,
  },
];

function LastTickets({ className }) {
  return (
    <div className={cn("last-tickets", className)}>
      <h2 className="last-tickets__title">последние билеты</h2>
      <div className="last-tickets__container">
        {tickets.map((ticket, index) => (
          <div className="last-tickets__item last-ticket" key={index}>
            <div className="last-ticket__cities">
              <p className="last-ticket__city-from">{ticket.city_from}</p>
              <p className="last-ticket__city-to">{ticket.city_to}</p>
            </div>
            <div className="last-ticket__railway-stations">
              <p className="last-ticket__railway-station-from">{ticket.railway_station_from}</p>
              <p className="last-ticket__railway-station-to">{ticket.railway_station_to}</p>
            </div>
            <div className="last-ticket__footer">
              <IconTrainOptions className="last-ticket__options" />
              <p className="last-ticket__price">
                <span className="last-ticket__price-prefix">от</span>
                <span className="last-ticket__price-value">{formatPrice(ticket.min_price)}</span>
                <span className="last-ticket__price-currency" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

LastTickets.propTypes = { className: classNameType };

export default LastTickets;
