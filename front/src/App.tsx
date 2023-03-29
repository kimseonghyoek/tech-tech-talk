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
import User from "./pages/user/User";
import Comm from "./pages/comm/Community";
import UsedMarket from "./pages/used/UsedMarket";
import { CookiesProvider } from "react-cookie";
import Software from "./pages/comm/softwares/Software";
import KeyBoard from "./pages/comm/keyboard/KeyBoard";

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <RecoilRoot>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Promotion />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/user" element={<User />} />
              <Route path="/comm" element={<Comm />} />
              <Route path="/comm/softwares" element={<Software/>}/>
              <Route path="/comm/keyboard" element={<KeyBoard/>}/>
              <Route path="/used" element={<UsedMarket />} />
              <Route path="/test" element={<Test />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/manage" element={<DevManage />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </RecoilRoot>
      </CookiesProvider>
    </div>
  );
}

export default App;