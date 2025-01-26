import Input from "../../../../components/Fields/Input/Input";
import PropTypes from "prop-types";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useEffect, useState } from "react";
import "./SelectionSeatsTicketQuantity.css";

const fields = [
  {
    description: v => `Можно добавить еще\n${5 - v} пассажиров`,
    inputClassName: "ps-[120.453px]!",
    label: "Взрослых",
    max: 5,
    min: 0,
    value: "adults",
  },
  {
    description: v => `Можно добавить еще ${4 - v} детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле\nв среднем на 50-65%`,
    inputClassName: "ps-[106.406px]!",
    label: "Детских",
    max: 4,
    min: 0,
    value: "children",
  },
  {
    inputClassName: "ps-[211.484px]!",
    label: "Детских «без места»",
    max: 5,
    min: 0,
    value: "babies",
  },
];

function SelectionSeatsTicketQuantity({ className, onChange, values }) {
  const [form, setForm] = useState({ adults: 0, children: 0, babies: 0 });

  useEffect(() => {
    if (values) {
      setForm(values);
    }
  }, [values]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const values = { ...form, [name]: value };

    setForm(values);
    onChange(values);
  };

  return (
    <div className={cn("selection-seats-ticket-quantity", className)}>
      <p className="selection-seats-ticket-quantity__title">Количество билетов</p>
      <form className="selection-seats-ticket-quantity__form">
        {fields.map(field => (
          <div className="selection-seats-ticket-quantity__field" key={field.value}>
            <div className="selection-seats-ticket-quantity__control">
              <div className="selection-seats-ticket-quantity__leading">
                {field.label + " —"}
                &nbsp;
              </div>
              <Input
                className={cn("selection-seats-ticket-quantity__input", field.inputClassName)}
                max={field.max}
                min={field.min}
                name={field.value}
                type="number"
                value={form[field.value]}
                onChange={handleChange}
              />
            </div>
            {form[field.value] < field.max && field.description && (
              <p className="selection-seats-ticket-quantity__description">{field.description(form[field.value])}</p>
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

SelectionSeatsTicketQuantity.propTypes = {
  className: classNameType,
  onChange: PropTypes.func,
  values: PropTypes.shape({
    adults: PropTypes.number,
    children: PropTypes.number,
    babies: PropTypes.number,
  }),
};

export default SelectionSeatsTicketQuantity;
