import React from "react";
import { Route, Routes } from "react-router-dom";
//footer and navabr
import Footer from "./components/All Rounder/Footer";
import Navbar from "./components/All Rounder/Navbar";
//pages import
import Home from "./pages/Home";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
