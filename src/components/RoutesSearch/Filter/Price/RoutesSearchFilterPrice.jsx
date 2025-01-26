import Slider from "../../../Fields/Slider/Slider";
import { changeRoutesSearchInput, selectRoutesSearch } from "../../../../slices/routesSearch";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import "./RoutesSearchFilterPrice.css";

function RoutesSearchFilterPrice({ className }) {
  const dispatch = useDispatch();
  const filter = useSelector(selectRoutesSearch);

  const handleChange = (data) => {
    console.log(data);

    Object.entries(data).forEach(([name, value]) => {
      dispatch(changeRoutesSearchInput({ name, value }));
    });
  };

  return (
    <div className={cn("routes-search-filter-price", className)}>
      <label className="routes-search-filter-price__label">Стоимость</label>
      <div className="routes-search-filter-price__under-slider" data-max="до" data-min="от" />
      <Slider
        className="routes-search-filter-price__slider"
        max={9999}
        min={0}
        onChange={(newValue) => {
          handleChange({ price_from: newValue[0], price_to: newValue[1] });
        }}
        step={10}
        tooltip={{ open: true }}
        value={[filter.price_from, filter.price_to]}
      />
    </div>
  );
}

RoutesSearchFilterPrice.propTypes = { className: classNameType };

export default RoutesSearchFilterPrice;
