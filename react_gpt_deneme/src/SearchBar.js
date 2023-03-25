import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      {/* Arama çubuğu içeriği */}
      <input type="text" placeholder="Arama..." />
    </div>
  );
};

export default SearchBar;