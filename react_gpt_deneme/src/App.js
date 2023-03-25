import React from "react";
import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages
import Homepage from "./Pages/Homepage";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
