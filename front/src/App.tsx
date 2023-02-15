import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Promotion from "./pages/Promotion";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Header from "./components/header/Header";
import NotFound from "./pages/error/404";
import { RecoilRoot } from "recoil";
import Test from "./pages/Test";
import DevManage from "./pages/DevManage";
import Setting from "./pages/setting/Setting";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Promotion />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/test" element={<Test/> }/>
            <Route path="/setting" element={<Setting/>}/>
            <Route path="/manage" element={<DevManage/> }/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
