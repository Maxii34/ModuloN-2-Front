import "./App.css";
import Contacto from "./components/pages/Contacto";
import Error404 from "./components/pages/Error404";
import FormularioTurnos from "./components/pages/FormularioTurnos";
import Inicio from "./components/pages/Inicio";
import Tablaturnos from "./components/Tablaturnos";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Nosotros from "./components/pages/Nosotros";
import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/Routes/ProtectorAdmin";

function App() {
  //lee sessionStorage
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuariokey")) || false;

  const [usuarioLogueado, setUsuariologueado] = useState(sesionUsuario);

  //Guarda el estado de usuario en sessionStore
  useEffect(() => {
    sessionStorage.setItem("usuariokey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <BrowserRouter>
        <Menu
          openModal={openModal}
          usuarioLogueado={usuarioLogueado}
          setUsuariologueado={setUsuariologueado}
        />
        <Login
          showModal={showModal}
          closeModal={closeModal}
          setUsuariologueado={setUsuariologueado}
        />
        <main className="container-fluid">
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route
              path="/registro"
              element={<Registro openModal={openModal} setUsuariologueado={setUsuariologueado} />}
            ></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/nosotros" element={<Nosotros />}></Route>
            <Route
              path="/admin"
              element={<ProtectorAdmin usuarioLogueado={usuarioLogueado} />}
            >
              
              <Route index element={<Tablaturnos />}></Route>
              <Route path="crear" element={<FormularioTurnos />}></Route>
              <Route path="editar/:id" element={<FormularioTurnos />}></Route>
            </Route>
            <Route path="/turnos" element={<Tablaturnos />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>   
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
