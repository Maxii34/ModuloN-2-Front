import { createContext, useContext, useState, useEffect } from "react";
import { listarTurnos } from "../helpers/queries";

const cargarContext = createContext();

export const useDatosTurnos = () => {
  const context = useContext(cargarContext);
  if (!context) {
    throw new Error(
      "useDatosTurnos solo se puede usar dentro de un CargarProvider"
    );
  }
  return context;
};

// Proveedor del contexto - MAYÚSCULA
export const CargarProvider = ({ children }) => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    //Se solicita los datos al backend, con la funcion listarTurnos()
    const respuesta = await listarTurnos();
    //Se verifican los datos recibidos
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      //Cargarlo al estado
      setTurnos(data);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <cargarContext.Provider
      value={{
        turnos,
        setTurnos,
        cargarDatos,
        show,
        setShow,
        handleClose,
        handleShow,
      }}
    >
      {children}
    </cargarContext.Provider>
  );
};