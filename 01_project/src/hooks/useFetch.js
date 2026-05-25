import React, { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState({ loading: false, error: null, data: null });

  useEffect(() => {
    if (options?.skip) return;
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, error: null, loading: true }));
        const response = await fetch(url, {
          ...options,
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData((prev) => ({ ...prev, data: result }));
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        setData((prev) => ({ ...prev, error }));
      } finally {
        setData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url, options]);

  return data;
};

export default useFetch;
