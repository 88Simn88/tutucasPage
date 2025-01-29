import { Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import Musica from "./pages/Musica"
import Contacto from "./pages/Contacto"
import Footer from "./components/Footer"


const App = () => {

  return(
    <>
    <Navbar/>
   
   <Routes>
    <Route exact path="/" element={<Home />}/>
      {/* <Route exact path="/quienessomos" element={<QuienesSomos/>}/> */}
     {/* <Route exact path="/proyecto" element={<Proyecto />}/> */}
      <Route exact path="/musica" element={<Musica />}/>
      <Route exact path="/contacto" element={<Contacto />}/>
    </Routes>

    <Footer />

    </>
  )
}

export default App