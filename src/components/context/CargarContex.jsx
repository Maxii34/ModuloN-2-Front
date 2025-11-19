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

  // Estado para el turno seleccionado del modalver para el admin.
  const [turnoSelecionado, setTurnoSelecionado] = useState(null);
  // Estado para el turno solicitado en el formulario por el usuario.
  const [turnoSolicitado, setTurnoSolicitado] = useState({});

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

  const actualizarTurno = async (id) => {
  // Volver a cargar todos los turnos desde el backend
  const respuesta = await listarTurnos();
  if (respuesta.status === 200) {
    const data = await respuesta.json();
    // Actualizar la lista de turnos
    setTurnos(data);
    // Buscar el turno específico por ID y actualizar el turnoSeleccionado
    const turnoActualizado = data.find(turno => turno._id === id);
    if (turnoActualizado) {
      //actualiza el alert con los nuevos datos
      setTurnoSolicitado(turnoActualizado);
      //actualiza la tabla admin con los nuevos datos
      setTurnos(turnoActualizado)
    }
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
        turnoSelecionado,
        setTurnoSelecionado,
        turnoSolicitado,
        setTurnoSolicitado,
        actualizarTurno,
      }}
    >
      {children}
    </cargarContext.Provider>
  );
};