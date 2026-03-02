import React from "react";

export const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const { location, current } = weatherData;

  const details = [
    { label: "Odczuwalna", value: `${Math.round(current.feelslike_c)}°C` },
    { label: "Wiatr", value: `${current.wind_kph} km/h` },
    { label: "Wilgotność", value: `${current.humidity}%` },
    { label: "Ciśnienie", value: `${current.pressure_mb} hPa` },
    { label: "UV Index", value: current.uv },
    { label: "Widoczność", value: `${current.vis_km} km` },
    { label: "Zachmurzenie", value: `${current.cloud}%` },
    { label: "Kierunek wiatru", value: current.wind_dir },
    { label: "Porywy", value: `${current.gust_kph} km/h` },
  ];

  return (
    <div className="weather-container fadeIn">
      <div className="main-hero-card">
        <div className="hero-header">
          <h2>{location.name}</h2>
          <p>{location.country}</p>
        </div>
        <div className="hero-body">
          <img src={current.condition.icon} alt={current.condition.text} />
          <div className="hero-temp">
            {Math.round(current.temp_c)}
            <span> °C</span>
          </div>
          <p className="hero-condition">{current.condition.text}</p>
        </div>
      </div>
      <div className="details-grid">
        {details.map((item, index) => (
          <div key={index} className="detail-tile">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};
