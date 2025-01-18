import Button from "../Button/Button";
import CalendarIcon from "../../icons/CalendarIcon";
import Datepicker from "../Fields/Datepicker/Datepicker";
import LocationIcon from "../../icons/LocationIcon";
import Paths from "../../paths";
import InputSelect from "../Fields/InputSelect/InputSelect";
import { changeTicketSearchFormInput, selectTicketSearchForm } from "../../slices/ticketSearchForm";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./TicketSearchForm.css";

function fetchCities(name) {
  console.log("fetching city", name);

  return fetch(`${import.meta.env.VITE_BACKEND_URL}/routes/cities?name=${name}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      if (Array.isArray(data)) {
        return data.map(d => ({ value: d.name, label: d.name.toUpperCase() }));
      }

      return [];
    });
}

function TicketSearchForm({ className }) {
  const dispatch = useDispatch();
  const form = useSelector(selectTicketSearchForm);
  const navigate = useNavigate();

  const handleClickCityReplace = (event) => {
    event.preventDefault();

    handleChange({ cityFrom: form.cityTo, cityTo: form.cityFrom });
  };
  const handleChange = (data) => {
    console.log(data);

    Object.entries(data).forEach(([name, value]) => {
      dispatch(changeTicketSearchFormInput({ name, value }));
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(Paths.SELECTION_TRAIN);
  };

  return (
    <form className={cn("ticket-search-form", className)} onSubmit={handleSubmit}>
      <div className="ticket-search-form__content">
        <fieldset className="ticket-search-form__fieldset ticket-search-form__fieldset--cities">
          <legend className="ticket-search-form__legend">Направление</legend>
          <InputSelect
            className="ticket-search-form__input-select"
            fetchOptions={fetchCities}
            onChange={(newValue) => {
              handleChange({ cityFrom: newValue });
            }}
            placeholder="Откуда"
            suffixIcon={<LocationIcon />}
            value={form.cityFrom}
          />
          <button className="ticket-search-form__btn-replace" type="button" onClick={handleClickCityReplace}>
            <span className="icon" />
          </button>
          <InputSelect
            className="ticket-search-form__input-select"
            fetchOptions={fetchCities}
            onChange={(newValue) => {
              handleChange({ cityTo: newValue });
            }}
            placeholder="Куда"
            suffixIcon={<LocationIcon />}
            value={form.cityTo}
          />
        </fieldset>
        <fieldset className="ticket-search-form__fieldset ticket-search-form__fieldset--dates">
          <legend className="ticket-search-form__legend">Дата</legend>
          <Datepicker
            className="ticket-search-form__datepicker"
            onChange={(newValue) => {
              handleChange({ dateStart: newValue });
            }}
            placeholder="ДД/ММ/ГГ"
            suffixIcon={<CalendarIcon />}
          />
          <Datepicker
            className="ticket-search-form__datepicker"
            onChange={(newValue) => {
              handleChange({ dateEnd: newValue });
            }}
            placeholder="ДД/ММ/ГГ"
            suffixIcon={<CalendarIcon />}
          />
        </fieldset>
      </div>
      <div className="ticket-search-form__footer">
        <Button className="ticket-search-form__btn" type="submit" variant="find-tickets">Найти билеты</Button>
      </div>
    </form>
  );
}

TicketSearchForm.propTypes = { className: classNameType };

export default TicketSearchForm;
