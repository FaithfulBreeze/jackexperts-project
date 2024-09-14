import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage/Homepage'
import Loginpage from './pages/Loginpage/Loginpage'
import Signuppage from './pages/Signuppage/Signuppage'
import { createContext, useState } from "react"
import Managerpage from "./pages/Managerpage/Managerpage"

export const LoggedContext = createContext({})

function App() {
  const [loggedUser, setLoggedUser] = useState(false)

  return (
    <LoggedContext.Provider value={{setLoggedUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/login" element={<Loginpage />}/>
          <Route path="/signup" element={<Signuppage />}/>
          {loggedUser && [
            <Route path="/manager" element={<Managerpage />}/>
          ]}
        </Routes>
      </BrowserRouter>
    </LoggedContext.Provider>
  )
}

export default App
