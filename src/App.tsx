import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import CategoryChart from './views/CategoryTotal/CategoryTotal';
import Country from './views/Country/Country';
import Start from './views/Start/Start';
import Gender from './views/Gender/Gender';
import Price from './views/Price/Price';
import './App.scss';

function App() {
  const [animation, setAnimation] = useState<string>("fade-in")

  return (
    <div className="App">
      <Header animation={animation} setAnimation={setAnimation} />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Price" element={<Price animation={animation} />} />
          <Route path="/Gender" element={<Gender animation={animation} />} />
          <Route path="/Country" element={<Country animation={animation} />} />
          <Route path="/CategoryTotal" element={<CategoryChart animation={animation} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
