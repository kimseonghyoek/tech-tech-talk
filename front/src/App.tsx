import React from 'react';
import Input from './components/Input';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Promotion from './pages/Promotion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Promotion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
