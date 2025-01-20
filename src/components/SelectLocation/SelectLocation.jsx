import Api from "../../api";
import LocationIcon from "../../icons/LocationIcon";
import useApi from "../../services/useApi";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import { Select } from "antd";
import { useEffect, useState } from "react";
import "./SelectLocation.css";
import PropTypes from "prop-types";

function SelectLocation({ className, value, ...props }) {
  const [name, setName] = useState("");
  const { data } = useApi(Api.cities(name), []);

  useEffect(() => {
    if (value) {
      setName(value);
    }
  }, [value]);

  const options = (data) => {
    if (Array.isArray(data)) {
      return data.map(item => ({ label: item.name.toUpperCase(), value: item.name }));
    }

    return [];
  };

  return (
    <Select
      className={cn("select-location", className)}
      onSearch={setName}
      options={options(data)}
      showSearch
      suffixIcon={<LocationIcon />}
      value={value}
      {...props}
    />
  );
}

SelectLocation.propTypes = { className: classNameType, value: PropTypes.any };

export default SelectLocation;
