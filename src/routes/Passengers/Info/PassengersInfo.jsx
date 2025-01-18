import Button from "../../../components/Button/Button";
import Paths from "../../../paths";
import Passenger from "./Item/Passenger";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { useNavigate } from "react-router-dom";
import "./PassengersInfo.css";

const passengers = [
  {
    age: "adults",
    surname: "Мартынюк",
    name: "Ирина",
    patronymic: "Эдуардовна",
    gender: "female",
    birth_date: "1985-02-17",
    has_limited_mobility: false,
    document_type: "passport",
    passport_series: "4204",
    passport_number: "380694",
    birth_certificate_number: undefined,
  },
  {
    age: "children",
    surname: "Мартынюк",
    name: "Кирилл",
    patronymic: "Сергеевич",
    gender: "male",
    birth_date: "2006-01-25",
    has_limited_mobility: false,
    document_type: "birth_certificate",
    passport_series: undefined,
    passport_number: undefined,
    birth_certificate_number: "VIIIУН256319",
  },
  {
    age: undefined,
    surname: undefined,
    name: undefined,
    patronymic: undefined,
    gender: undefined,
    birth_date: undefined,
    has_limited_mobility: false,
    document_type: undefined,
    passport_series: undefined,
    passport_number: undefined,
    birth_certificate_number: undefined,
  },
];

function PassengersInfo({ className }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    navigate(Paths.PAYMENT);
  };

  return (
    <div className={cn("passengers-info", className)}>
      <div className="passengers-info__list">
        {passengers.map((passenger, index) => (
          <Passenger
            className="passengers-info__item"
            key={index}
            number={index + 1}
            open={index < 2}
            values={passenger}
          />
        ))}
        <button className="passengers-info__add-btn">Добавить пассажира</button>
      </div>
      <Button className="passengers-info__btn" variant="further" onClick={handleClick}>ДАЛЕЕ</Button>
    </div>
  );
}

PassengersInfo.propTypes = { className: classNameType };

export default PassengersInfo;
