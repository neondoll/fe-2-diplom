import Api from "../../api";
import LocationIcon from "../../icons/LocationIcon";
import PropTypes from "prop-types";
import useApi from "../../services/useApi";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import { Select } from "antd";
import { useEffect, useState } from "react";
import "./SelectLocation.css";

const plug = [
  { _id: "66ac8b69cb563f0052174f45", name: "москва" },
  { _id: "66ac8b69cb563f0052174f46", name: "санкт-петербург" },
];

function SelectLocation({ className, onChange, value, ...props }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const api = useApi(`${Api.ROUTES_CITIES}?name=${name}`, []);

  useEffect(() => {
    if (!api.loading) {
      if (name) {
        if (api.data.length > 0) {
          setData(api.data);
        }
        else {
          setData(plug);
        }
      }
      else {
        setData([]);
      }
    }
  }, [api.data, api.loading, name]);
  useEffect(() => {
    if (value) {
      setName(value.name);
    }
  }, [value]);

  const handleChange = (value) => {
    onChange(data.find(item => item.name === value));
  };

  return (
    <Select
      className={cn("select-location", className)}
      notFoundContent={(
        <>
          <div className="font-bold text-center">Нет данных</div>
          {!name && (
            <div className="text-center">Для поиска начните вводит название города</div>
          )}
        </>
      )}
      onChange={handleChange}
      onSearch={setName}
      options={Array.isArray(data) ? data.map(item => ({ label: item.name.toUpperCase(), value: item.name })) : []}
      showSearch
      suffixIcon={<LocationIcon />}
      value={value?.name}
      {...props}
    />
  );
}

SelectLocation.propTypes = {
  className: classNameType,
  onChange: PropTypes.func,
  placeholder: PropTypes.node,
  value: PropTypes.shape({ _id: PropTypes.string, name: PropTypes.string }),
};

export default SelectLocation;
