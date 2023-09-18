import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Promotion from "./pages/Promotion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/header/Header";
import NotFound from "./pages/error/404";
import Test from "./pages/Test";
import DevManage from "./pages/DevManage";
import Setting from "./pages/setting/Setting";
import User from "./pages/user/User";
import Comm from "./pages/comm/Community";
import UsedMarket from "./pages/used/UsedMarket";
import { CookiesProvider } from "react-cookie";
import Software from "./pages/comm/softwares/Software";
import KeyBoard from "./pages/comm/keyboard/KeyBoard";
import Mouse from "./pages/comm/mouse/Mouse";
import PC from "./pages/comm/pc/PC";
import Other from "./pages/comm/other/Other";
import { Footer } from "antd/es/layout/layout";
import { Provider } from "react-redux";
import palette from "./palette";
import Write from "./pages/write/Write";
import UserInfo from "./pages/UserInfo";
import configureStores from "./redux/ConfigureStore";
// import { PersistGate } from 'redux-persist/integration/react';

const store = configureStores();

function App() {
  const my_github_link = "https://github.com/kimseonghyoek/";
  return (
    <div className="App">
      <CookiesProvider>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor}> */}
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Promotion />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/user" element={<User />} />
                <Route path="/comm" element={<Comm />} />
                <Route path="/comm/softwares" element={<Software />} />
                <Route path="/comm/keyboard" element={<KeyBoard />} />
                <Route path="/comm/mouse" element={<Mouse />} />
                <Route path="/comm/pc" element={<PC />} />
                <Route path="/comm/other" element={<Other />} />
                <Route path="/used" element={<UsedMarket />} />
                <Route path="/post" element={<Write />} />
                <Route path="/test" element={<Test />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/manage" element={<DevManage />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
              <Footer
                style={{
                  textAlign: "center",
                  padding: "2rem 5rem",
                  backgroundColor: palette.main_color1,
                }}
              >
                <h3>Tech-Tech-Talk _ Dev 2023 ~ </h3>
                <a href={my_github_link}>
                  <p>- Develop & Design by Overloper</p>
                </a>
              </Footer>
            </BrowserRouter>
          {/* </PersistGate> */}
        </Provider>
      </CookiesProvider>
    </div>
  );
}

export default App;
