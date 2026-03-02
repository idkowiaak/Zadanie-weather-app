import React from "react";
import { useWeather } from "./hooks/useWeather";
import { SearchBar } from "./components/SearchBar";
import { WeatherDisplay } from "./components/WeatherDisplay";
import "./styles.css";

const App = () => {
  const { data, loading, error, fetchWeather } = useWeather();

  return (
    <div className="app-container">
      <main className="main-panel">
        <header>
          <h1>WeatherApp</h1>
          <p>Sprawdź warunki w dowolnym mieście</p>
        </header>

        <SearchBar onSearch={fetchWeather} />
        <div className="content-area">
          {loading && <div className="loader">Ładowanie danych...</div>}
          {error && <div className="error-message">{error}</div>}
          {!loading && !error && data && <WeatherDisplay weatherData={data} />}
          {!loading && !error && !data && (
            <div className="empty-state">
              Wpisz nazwę miasta powyżej, aby zobaczyć pogodę.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
