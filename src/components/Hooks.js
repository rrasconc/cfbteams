import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../config/api";

export const useConferences = () => {
  const [conferences, setConferences] = useState([]);

  const fetchConferencess = () => {
    axios
      .get(baseURL + "conferences")
      .then((res) => {
        let conferences = res.data;
        setConferences(conferences);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchConferencess();
  }, []);

  return conferences;
};
