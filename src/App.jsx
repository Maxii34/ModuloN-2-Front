
import './App.css'
import Admin from './components/Admin';
import Contacto from './components/Contacto';
import Error404 from './components/Error404';
import FormularioTurnos from './components/FormularioTurnos';
import Inicio from './components/Inicio';
import Footer from './components/shared/Footer'
import Menu from './components/shared/Menu'
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <>
      <BrowserRouter>
      <Menu />
      <main>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        <Route path='/crear' element={<FormularioTurnos />}></Route>
        <Route path='/editar' element={<FormularioTurnos />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
