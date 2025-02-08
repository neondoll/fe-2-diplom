import Button from "../../Button/Button";
import CalendarIcon from "../../../icons/CalendarIcon";
import Datepicker from "../../Fields/Datepicker/Datepicker";
import Dialog from "../../Dialog/Dialog";
import Paths from "../../../paths";
import SelectLocation from "../../SelectLocation/SelectLocation";
import { changeRoutesSearchInput, selectRoutesSearch } from "../../../slices/routesSearch";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./RoutesSearchForm.css";

function RoutesSearchForm({ className }) {
  const dispatch = useDispatch();
  const form = useSelector(selectRoutesSearch);
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (data) => {
    Object.entries(data).forEach(([name, value]) => {
      dispatch(changeRoutesSearchInput({ name, value }));
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
    <form className={cn("routes-search-form", className)} onSubmit={handleSubmit}>
      <div className="routes-search-form__content">
        <fieldset className="routes-search-form__fieldset routes-search-form__fieldset--cities">
          <legend className="routes-search-form__legend">Направление</legend>
          <SelectLocation
            className="routes-search-form__select-location"
            onChange={newValue => handleChange({ from_city: newValue })}
            placeholder="Откуда"
            value={form.from_city}
          />
          <button
            className="routes-search-form__btn-replace"
            onClick={(event) => {
              event.preventDefault();
              handleChange({ from_city: form.to_city, to_city: form.from_city });
            }}
            type="button"
          >
            <span className="icon" />
          </button>
          <SelectLocation
            className="routes-search-form__select-location"
            onChange={newValue => handleChange({ to_city: newValue })}
            placeholder="Куда"
            value={form.to_city}
          />
        </fieldset>
        <fieldset className="routes-search-form__fieldset routes-search-form__fieldset--dates">
          <legend className="routes-search-form__legend">Дата</legend>
          <Datepicker
            className="routes-search-form__datepicker"
            onChange={newValue => handleChange({ date_start: newValue })}
            placeholder="ДД/ММ/ГГ"
            suffixIcon={<CalendarIcon />}
            value={form.date_start}
          />
          <Datepicker
            className="routes-search-form__datepicker"
            onChange={newValue => handleChange({ date_end: newValue })}
            placeholder="ДД/ММ/ГГ"
            suffixIcon={<CalendarIcon />}
            value={form.date_end}
          />
        </fieldset>
      </div>
      <div className="routes-search-form__footer">
        <Button className="routes-search-form__btn" type="submit" variant="find-tickets">Найти билеты</Button>
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

RoutesSearchForm.propTypes = { className: classNameType };

export default RoutesSearchForm;
