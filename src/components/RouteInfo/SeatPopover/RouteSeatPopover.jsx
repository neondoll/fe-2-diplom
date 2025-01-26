import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn, formatPrice } from "../../../lib/utils";
import { routeDirectionAvailableSeatsInfoClassType, routeDirectionPriceInfoClassType } from "../../../types/route";
import "./RouteSeatPopover.css";

function RouteSeatPopover({ availableSeatsInfo, className, priceInfo, title }) {
  const minPrice = Math.min(...Object.values(priceInfo));

  return (
    <div className={cn("route-seat-popover", className)}>
      <Popover.Root>
        <Popover.Trigger className="route-seat-popover__trigger">
          <p className="route-seat-popover__trigger-title">{title}</p>
          <p className="route-seat-popover__trigger-available-seats">{availableSeatsInfo}</p>
          <p className="route-seat-popover__trigger-price">
            <span className="route-seat-popover__trigger-price-prefix">от</span>
            <span className="route-seat-popover__trigger-price-value">{formatPrice(minPrice)}</span>
            <span className="route-seat-popover__trigger-price-currency" />
          </p>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="route-seat-popover__content">
            <div className="route-seat-popover__content-list">
              {"top_price" in priceInfo && (
                <div className="route-seat-popover__content-item">
                  <p className="route-seat-popover__content-title">верхние</p>
                  {/* <p className="route-seat-popover__content-available-seats">{availableSeatsInfo.top_seats}</p> */}
                  <p className="route-seat-popover__content-price">
                    <span className="route-seat-popover__content-price-prefix">от</span>
                    <span className="route-seat-popover__content-price-value">{formatPrice(priceInfo.top_price)}</span>
                    <span className="route-seat-popover__content-price-currency" />
                  </p>
                </div>
              )}
              {"bottom_price" in priceInfo && (
                <div className="route-seat-popover__content-item">
                  <p className="route-seat-popover__content-title">нижние</p>
                  {/* <p className="route-seat-popover__content-available-seats">{availableSeatsInfo.bottom_seats}</p> */}
                  <p className="route-seat-popover__content-price">
                    <span className="route-seat-popover__content-price-prefix">от</span>
                    <span className="route-seat-popover__content-price-value">{formatPrice(priceInfo.bottom_price)}</span>
                    <span className="route-seat-popover__content-price-currency" />
                  </p>
                </div>
              )}
              {"side_price" in priceInfo && (
                <div className="route-seat-popover__content-item">
                  <p className="route-seat-popover__content-title">боковые</p>
                  {/* <p className="route-seat-popover__content-available-seats">{availableSeatsInfo.side_seats}</p> */}
                  <p className="route-seat-popover__content-price">
                    <span className="route-seat-popover__content-price-prefix">от</span>
                    <span className="route-seat-popover__content-price-value">{formatPrice(priceInfo.side_price)}</span>
                    <span className="route-seat-popover__content-price-currency" />
                  </p>
                </div>
              )}
            </div>
            <Popover.Arrow className="route-seat-popover__arrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

RouteSeatPopover.propTypes = {
  availableSeatsInfo: routeDirectionAvailableSeatsInfoClassType.isRequired,
  className: classNameType,
  priceInfo: routeDirectionPriceInfoClassType.isRequired,
  title: PropTypes.string.isRequired,
};

export default RouteSeatPopover;
