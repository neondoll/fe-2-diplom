import { useEffect, useState } from "react";

const useApi = (url, initialData = undefined) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(undefined);
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
          setError(error.message);
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
