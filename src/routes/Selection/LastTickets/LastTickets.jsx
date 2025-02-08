import Api from "../../../api";
import RouteOptions from "../../../components/RouteOptions";
import useApi from "../../../services/useApi";
import { capitalizeFirstLetter, cn, formatPrice } from "../../../lib/utils";
import { classNameType } from "../../../types/base";
import "./LastTickets.css";

function LastTickets({ className }) {
  const { data } = useApi(Api.ROUTES_LAST, []);

  return (
    <div className={cn("last-tickets", className)}>
      <h2 className="last-tickets__title">последние билеты</h2>
      <div className="last-tickets__container">
        {data.map((item, index) => (
          <div className="last-tickets__item last-ticket" key={index}>
            <div className="last-ticket__cities">
              <p className="last-ticket__city-from">{capitalizeFirstLetter(item.departure.from.city.name)}</p>
              <p className="last-ticket__city-to">{capitalizeFirstLetter(item.departure.to.city.name)}</p>
            </div>
            <div className="last-ticket__railway-stations">
              <p className="last-ticket__railway-station-from">{item.departure.from.railway_station_name}</p>
              <p className="last-ticket__railway-station-to">{item.departure.to.railway_station_name}</p>
            </div>
            <div className="last-ticket__footer">
              <RouteOptions
                className="last-ticket__options"
                haveWifi={item.departure.have_wifi}
                isExpress={item.departure.is_express}
              />
              <p className="last-ticket__price">
                <span className="last-ticket__price-prefix">от</span>
                <span className="last-ticket__price-value">{formatPrice(item.departure.min_price)}</span>
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
