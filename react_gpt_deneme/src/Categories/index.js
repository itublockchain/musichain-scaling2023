import React from 'react';
import '../Categories.css';

const Categories = () => {
  return (
    <div className="categories">
      {/* Kategori kartları */}
      <div className="category-card">Kategori 1</div>
      <div className="category-card">Kategori 2</div>
      <div className="category-card">Kategori 3</div>
    </div>
  );
};

export default Categories;