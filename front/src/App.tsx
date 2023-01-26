import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Promotion from "./pages/Promotion";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import NotFound from "./pages/error/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Promotion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
