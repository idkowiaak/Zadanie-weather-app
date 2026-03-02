import React, { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Wpisz miasto..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Szukaj
      </button>
    </form>
  );
};
