import React from 'react';
import './App.css';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Categories from './Categories';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <Categories />
      <Footer />
    </div>
  );
};

export default App;