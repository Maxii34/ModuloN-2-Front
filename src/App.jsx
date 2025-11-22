import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";

// Componentes importados desde el barrel
import {
  Contacto,
  Error404,
  FormularioTurnos,
  Inicio,
  Tablaturnos,
  Footer,
  Menu,
  Login,
  Registro,
  Nosotros,
  ModalVer,
  AlertTurno,
} from "./components/Index.jsx";
import ProtectorAdmin from "./components/Routes/ProtectorAdmin.jsx";
import { CargarProvider } from "./components/context/CargarContex.jsx";


function App() {
  //lee sessionStorage
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuariokey")) || {};

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
      <CargarProvider>
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
          <main>
            <Routes>
              <Route path="/" element={<Inicio />}></Route>
              <Route
                path="/registro"
                element={
                  <Registro
                    openModal={openModal}
                    setUsuariologueado={setUsuariologueado}
                  />
                }
              ></Route>
              <Route path="/contacto" element={<Contacto />}></Route>
              <Route path="/nosotros" element={<Nosotros />}></Route>

              <Route
                path="/admin"
                element={<ProtectorAdmin usuarioLogueado={usuarioLogueado} />}
              >
                <Route index element={<Tablaturnos />}></Route>
                <Route
                  path="crear"
                  element={<FormularioTurnos titulo={"Solicitar un turno"} />}
                ></Route>
                <Route
                  path="editar/:id"
                  element={<FormularioTurnos titulo={"Editar turno"} />}
                ></Route>
              </Route>
              <Route path="/turnos" element={<Tablaturnos />}></Route>

              <Route path="*" element={<Error404 />}></Route>
            </Routes>
            <ModalVer />
          </main>
          <Footer />
        </BrowserRouter>
      </CargarProvider>
    </>
  );
}

export default App;
