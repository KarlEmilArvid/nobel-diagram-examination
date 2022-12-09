import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Header from './components/Header/Header'
import Category from './views/Category/Category'
import Country from './views/Country/Country'
import Start from './views/Start/Start'
import Gender from './views/Gender/Gender'
import Price from './views/Price/Price'
import TopTen from './views/TopTen/TopTen'
import './App.scss'

function App() {
  const [animation, setAnimation] = useState<string>('')

  return (
    <div className="App">
      <Header animation={animation} setAnimation={setAnimation} />
      <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Category" element={<Category animation={animation} />} />
          <Route path="/Gender" element={<Gender animation={animation} />} />
          <Route path="/Country" element={<Country animation={animation} />} />
          <Route path="/Price" element={<Price animation={animation} />} />
          <Route path="/TopTen" element={<TopTen animation={animation} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
