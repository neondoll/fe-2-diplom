import { getResponseError } from "../lib/utils";
import { useEffect, useState } from "react";

const useApi = (url, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let inProgress = true;

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        if (inProgress) {
          if ("error" in data) {
            setData(initialData);
            setError(data.error);
          }
          else {
            setData(data);
            setError(null);
          }

          setLoading(false);
        }
      })
      .catch((error) => {
        if (inProgress) {
          setData(initialData);
          setError(getResponseError(error));
          setLoading(false);
        }
      });

    return () => {
      inProgress = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, error, loading };
};

export default useApi;
