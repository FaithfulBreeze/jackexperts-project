import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage/Homepage'
import Loginpage from './pages/Loginpage/Loginpage'
import Signuppage from './pages/Signuppage/Signuppage'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/login" element={<Loginpage />}/>
          <Route path="/signup" element={<Signuppage />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
