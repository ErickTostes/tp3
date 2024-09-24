import React from 'react';

function Filter({ selectedCategory, onFilterChange }) {
  const categories = ['Todas', 'Roupas', 'Calçados', 'Acessórios'];

  return (
    <div className="filter-container">
      <label htmlFor="category">Filtrar por categoria:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
