import PropTypes from "prop-types";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useEffect, useState } from "react";
import "./SelectionSeatsTicketQuantity.css";

const fields = [
  {
    label: "Взрослых",
    value: "adults",
    description: "Можно добавить еще \n3 пассажиров ",
    inputClassName: "pl-[120.422px]",
  },
  {
    label: "Детских",
    value: "children",
    description: "Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле \nв среднем на 50-65%",
    inputClassName: "pl-[106.359px]",
  },
  { label: "Детских «без места»", value: "children_without_seat", inputClassName: "pl-[211.391px]" },
];

function SelectionSeatsTicketQuantity({ className, onChange, values }) {
  const [form, setForm] = useState({ adults: 0, children: 0, children_without_seat: 0 });

  useEffect(() => {
    if (values) {
      setForm(values);
    }
  }, [values]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const values = { ...form, [name]: value };

    setForm(values);

    if (onChange) {
      onChange(values);
    }
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
              <input
                className={cn("selection-seats-ticket-quantity__input", field.inputClassName)}
                name={field.value}
                type="number"
                value={form[field.value]}
                onChange={handleChange}
              />
            </div>
            {form[field.value] > 0 && (
              <p className="selection-seats-ticket-quantity__description">{field.description}</p>
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
    children_without_seat: PropTypes.number,
  }),
};

export default SelectionSeatsTicketQuantity;
