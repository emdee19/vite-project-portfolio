import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";

function App() {

  return (
    <>
      <BrowserRouter>
        
        <Navbar home="Home" about="About" services="Services" experience="Experience" portfolio="Portfolio" contact="Contact" />
      
        <Routes>

          <Route path="/" element={ <Homepage /> } />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
