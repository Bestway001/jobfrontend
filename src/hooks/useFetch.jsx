import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = async (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const { data } = await axios(url);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);
  return { isLoading, data };
};
