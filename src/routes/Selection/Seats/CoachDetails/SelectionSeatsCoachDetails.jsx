import PropTypes from "prop-types";
import SelectionSeatsCoachDetailsBody from "./Body/SelectionSeatsCoachDetailsBody";
import SelectionSeatsCoachDetailsHeader from "./Header/SelectionSeatsCoachDetailsHeader";
import SelectionSeatsCoachDetailsScheme from "./Scheme/SelectionSeatsCoachDetailsScheme";
import SelectionSeatsCoachDetailsFooter from "./Footer/SelectionSeatsCoachDetailsFooter.jsx";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { coachClassTypeType, coachType } from "../../../../types/coach";
import { orderCoachIdType, orderOptionsType, orderSeatsType } from "../../../../types/order";
import { useEffect, useState } from "react";
import "./SelectionSeatsCoachDetails.css";

function SelectionSeatsCoachDetails({ className, classType, coaches, onChange, values }) {
  const [coach, setCoach] = useState();
  const [coachItems, setCoachItems] = useState([]);
  const [form, setForm] = useState({ coach_id: null, options: { linens: 0, wifi: 0 }, seats: [] });

  useEffect(() => {
    if (coaches) {
      setCoachItems(
        coaches.filter(item => item.coach.class_type === classType)
          .map(item => ({ _id: item.coach._id, name: item.coach.name })),
      );
    }
  }, [classType, coaches]);
  useEffect(() => {
    if (coaches) {
      setCoach(
        coaches.filter(item => item.coach.class_type === classType)
          .find(item => item.coach._id === values.coach_id),
      );
    }
  }, [classType, coaches, values.coach_id]);
  useEffect(() => {
    if (values) {
      setForm(values);
    }
  }, [values]);

  const handleChange = (data) => {
    console.log(data);

    setForm(prev => ({ ...prev, ...data }));
    onChange(data);
  };
  const handleChangeCoachId = (value) => {
    handleChange({ coach_id: value, options: { linens: 0, wifi: 0 }, seats: [] });
    setCoach(
      coaches.filter(item => item.coach.class_type === classType)
        .find(item => item.coach._id === value),
    );
  };

  return (
    <div className={cn("selection-seats-coach-details", className)}>
      {classType && (
        <>
          <SelectionSeatsCoachDetailsHeader
            className="selection-seats-coach-details__header"
            coaches={coachItems}
            onChange={handleChangeCoachId}
            value={form.coach_id}
          />
          <SelectionSeatsCoachDetailsBody
            className="selection-seats-coach-details__body"
            coach={coach}
            onChange={(newValue) => {
              handleChange({ options: newValue });
            }}
            values={form.options}
          />
          <SelectionSeatsCoachDetailsScheme
            className="selection-seats-coach-details__scheme"
            coach={coach}
            onChange={(newValue) => {
              handleChange({ seats: newValue });
            }}
            values={form.seats}
          />
          <SelectionSeatsCoachDetailsFooter
            className="selection-seats-coach-details__footer"
            options={form.options}
            seats={form.seats}
          />
        </>
      )}
    </div>
  );
}

SelectionSeatsCoachDetails.propTypes = {
  className: classNameType,
  classType: coachClassTypeType,
  coaches: PropTypes.arrayOf(coachType).isRequired,
  onChange: PropTypes.func,
  values: PropTypes.shape({ coach_id: orderCoachIdType, options: orderOptionsType, seats: orderSeatsType }),
};

export default SelectionSeatsCoachDetails;
