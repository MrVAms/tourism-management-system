import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Checkout from "./Checkout";
import HotelRoom from "./HotelRoom";
import Contact from "./Contact";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/hotelroom" element={<HotelRoom />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
