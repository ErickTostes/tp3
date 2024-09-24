import React, { useState } from 'react';
import Filter from './Filter';
import './App.css';

const productsData = [
  { id: 1, name: 'Camiseta', category: 'Roupas' },
  { id: 2, name: 'Tenis', category: 'Calçados' },
  { id: 3, name: 'Relógio', category: 'Acessórios' },
  { id: 4, name: 'Jaqueta', category: 'Roupas' },
  { id: 5, name: 'Chinelo', category: 'Calçados' },
];

function App() {
  const [category, setCategory] = useState('Todas');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleFilterChange = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === 'Todas') {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container">
      <h1>Loja de E-commerce</h1>
      <Filter selectedCategory={category} onFilterChange={handleFilterChange} />

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              {product.name} - {product.category}
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>
    </div>
  );
}

export default App;
