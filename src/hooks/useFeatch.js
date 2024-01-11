import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://beautyproducts.website";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}${url}`);
      setData(res.data);
    } catch (error) {
      setError(error);
      console.error("Error fetching data:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
