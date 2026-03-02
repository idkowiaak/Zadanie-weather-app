import { useState, useCallback } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const useWeather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}?key=${API_KEY}&q=${city}&lang=pl&aqi=no`,
      );

      if (!response.ok) {
        if (response.status === 400)
          throw new Error("Nie znaleziono takiego miasta. Sprawdź pisownię.");
        if (response.status === 401) throw new Error("Błąd autoryzacji API.");
        throw new Error("Wystąpił problem z serwerem.");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchWeather };
};
