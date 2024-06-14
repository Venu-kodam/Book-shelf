import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Shelf from "./components/Shelf"

function App() {
  return (
    <div className="main">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shelf" element={<Shelf/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
