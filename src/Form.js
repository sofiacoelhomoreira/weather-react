import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form">
        <input
          type="search"
          placeholder="type a city .."
          id="search-text-input"
          className="type-city"
        />
        <button
          type="submit"
          id="search-press"
          className="click-search"
          title="Search city"
        >
          <img
            src="https://icons-for-free.com/iconfiles/png/512/svg+location+magnifying+glass+navigation+position+search+icon-1320185158232551016.png"
            alt="location-search-icon"
            width="40px"
          />
        </button>
        <button
          id="current-location-button"
          className="here-search"
          title="My location"
        >
          <img
            src="https://img.icons8.com/windows/50/000000/search-location.png"
            alt="location-search-icon"
            width="40px"
          />
        </button>
      </form>
    </div>
  );
}
