import Api from "../../api";
import LocationIcon from "../../icons/LocationIcon";
import PropTypes from "prop-types";
import useApi from "../../services/useApi";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import { Select } from "antd";
import { useEffect, useState } from "react";
import "./SelectLocation.css";

function SelectLocation({ className, onChange, value, ...props }) {
  const [name, setName] = useState("");
  const { data } = useApi(`${Api.ROUTES_CITIES}?name=${name}`, []);

  useEffect(() => {
    if (value) {
      setName(value.name);
    }
  }, [value]);

  const options = (data) => {
    if (Array.isArray(data)) {
      return data.map(item => ({ label: item.name.toUpperCase(), value: item.name }));
    }

    return [];
  };
  const handleChange = (value) => {
    onChange(data.find(item => item.name === value));
  };

  return (
    <Select
      className={cn("select-location", className)}
      onChange={handleChange}
      onSearch={setName}
      options={options(data)}
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
