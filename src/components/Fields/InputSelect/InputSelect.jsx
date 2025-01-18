import PropTypes from "prop-types";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { debounce } from "lodash";
import { Select as AntSelect, Spin } from "antd";
import { useMemo, useRef, useState } from "react";
import "./InputSelect.css";

function InputSelect({ className, debounceTimeout = 800, fetchOptions, ...props }) {
  const fetchCounter = useRef(0);
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchCounter.current += 1;

      const fetchId = fetchCounter.current;

      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchCounter.current) {
          // for fetch callback order
          return;
        }

        console.log(newOptions);

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <AntSelect
      className={cn("select", className)}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      onSearch={debounceFetcher}
      showSearch
      {...props}
      options={options}
    />
  );
}

InputSelect.propTypes = {
  className: classNameType,
  debounceTimeout: PropTypes.number,
  fetchOptions: PropTypes.func.isRequired,
};

export default InputSelect;
