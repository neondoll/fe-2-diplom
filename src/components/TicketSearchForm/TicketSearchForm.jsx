import Button from "../Button/Button";
import CalendarIcon from "../../icons/CalendarIcon";
import Datepicker from "../Fields/Datepicker/Datepicker";
import Dialog from "../Dialog/Dialog";
import Paths from "../../paths";
import SelectLocation from "../SelectLocation/SelectLocation.jsx";
import { changeTicketSearchFormInput, selectTicketSearchForm } from "../../slices/ticketSearchForm";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./TicketSearchForm.css";

function TicketSearchForm({ className }) {
  const dispatch = useDispatch();
  const form = useSelector(selectTicketSearchForm);
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClickCityReplace = (event) => {
    event.preventDefault();

    handleChange({ from_city: form.to_city, to_city: form.from_city });
  };
  const handleChange = (data) => {
    console.log(data);

    Object.entries(data).forEach(([name, value]) => {
      dispatch(changeTicketSearchFormInput({ name, value }));
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.from_city && form.to_city) {
      navigate(Paths.SELECTION_TRAIN);
    }
    else {
      setDialogOpen(true);
    }
  };

  return (
    <form className={cn("ticket-search-form", className)} onSubmit={handleSubmit}>
      <div className="ticket-search-form__content">
        <fieldset className="ticket-search-form__fieldset ticket-search-form__fieldset--cities">
          <legend className="ticket-search-form__legend">Направление</legend>
          <SelectLocation
            className="ticket-search-form__select-location"
            onChange={(newValue) => {
              handleChange({ from_city: newValue });
            }}
            placeholder="Откуда"
            value={form.from_city}
          />
          <button className="ticket-search-form__btn-replace" type="button" onClick={handleClickCityReplace}>
            <span className="icon" />
          </button>
          <SelectLocation
            className="ticket-search-form__select-location"
            onChange={(newValue) => {
              handleChange({ to_city: newValue });
            }}
            placeholder="Куда"
            value={form.to_city}
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
      <Dialog
        description={`Поля "Откуда" и "Куда" обязательны для заполнения`}
        onOpenChange={setDialogOpen}
        open={dialogOpen}
        title="Информационное сообщение"
        type="info"
      />
    </form>
  );
}

TicketSearchForm.propTypes = { className: classNameType };

export default TicketSearchForm;
