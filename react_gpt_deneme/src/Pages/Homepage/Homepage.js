import React from "react";

import Navbar from "../../Navbar";
import SearchBar from "../../SearchBar";
import Categories from "../../Categories";
import Footer from "../../Footer";

function Homepage() {
  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <Categories />
      <Footer />
    </div>
  );
}

export default Homepage;
