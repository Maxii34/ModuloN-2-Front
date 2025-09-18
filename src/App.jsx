

import './App.css'
import Admin from './components/pages/Admin';
import Contacto from './components/pages/Contacto';
import Error404 from './components/pages/Error404';
import FormularioTurnos from './components/pages/FormularioTurnos';
import Inicio from './components/pages/Inicio';
import Tablaturnos from './components/Tablaturnos';
import Footer from './components/shared/Footer'
import Menu from './components/shared/Menu'
import Login from "./components/Login";
import Registro from "./components/Registro";
import Nosotros from "./components/pages/Nosotros";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";


function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <BrowserRouter>
        <Menu openModal={openModal} />
        <Login showModal={showModal} closeModal={closeModal} />
        <main className="container-fluid">
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/registro" element={<Registro openModal={openModal} />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/nosotros" element={<Nosotros />}></Route>
            <Route path="/crear" element={<FormularioTurnos />}></Route>
            <Route path="/editar" element={<FormularioTurnos />}></Route>
            <Route path='/turnos' element={<Tablaturnos />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
