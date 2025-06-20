import React from 'react';
import './Filter.jsx';  

export default function Filter({ options, value, onChange }) {
  return (
    <div className="filter-container">
      <label htmlFor="category-filter" className="filter-label">
        Filter by category:
      </label>
      <select
        id="category-filter"
        className="filter-select"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
