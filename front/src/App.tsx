import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Promotion from './pages/Promotion';
import Login from './pages/Login';
import Footer from './components/Footer';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Promotion/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
