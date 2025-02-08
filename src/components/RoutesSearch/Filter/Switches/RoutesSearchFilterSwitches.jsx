import Switch from "../../../Fields/Switch/Switch";
import { changeRoutesSearchInput, selectRoutesSearch } from "../../../../slices/routesSearch";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import "./RoutesSearchFilterSwitches.css";

const switches = [
  { text: "Купе", value: "have_second_class" },
  { text: "Плацкарт", value: "have_third_class" },
  { text: "Сидячий", value: "have_fourth_class" },
  { text: "Люкс", value: "have_first_class" },
  { text: "Wi-Fi", value: "have_wifi" },
  { text: "Экспресс", value: "have_express" },
];

function RoutesSearchFilterSwitches({ className }) {
  const dispatch = useDispatch();
  const filter = useSelector(selectRoutesSearch);

  const handleChange = (data) => {
    Object.entries(data).forEach(([name, value]) => {
      dispatch(changeRoutesSearchInput({ name, value }));
    });
  };

  return (
    <div className={cn("routes-search-filter-switches", className)}>
      <ul className="routes-search-filter-switches__list">
        {switches.map(item => (
          <li className="routes-search-filter-switches__item" key={item.value}>
            <label
              className={`routes-search-filter-switches__label routes-search-filter-switches__label--${item.value}`}
              htmlFor={`routes-search-filter-switch-${item.value}`}
            >
              {item.text}
            </label>
            <Switch
              className="routes-search-filter-switches__switch"
              id={`routes-search-filter-switch-${item.value}`}
              onChange={(newValue) => {
                handleChange({ [item.value]: newValue });
              }}
              value={filter[item.value]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

RoutesSearchFilterSwitches.propTypes = { className: classNameType };

export default RoutesSearchFilterSwitches;
