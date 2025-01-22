import { getResponseError } from "../lib/utils";
import { useEffect, useState } from "react";

const useApi = (url, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let inProgress = true;

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        if (inProgress) {
          setData(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (inProgress) {
          setError(getResponseError(error));
          setLoading(false);
        }
      });

    return () => {
      inProgress = false;
    };
  }, [url]);

  return { data, error, loading };
};

export default useApi;
