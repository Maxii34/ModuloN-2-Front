import { createContext, useContext, useState, useEffect } from "react";
import { listarRecetas } from "../helpers/queries";

const cargarContext = createContext();

export const useDatosTurnos = () => {
  const context = useContext(cargarContext);
  if (!context) {
    throw new Error(
      "useRecetas solo se puede usar dentro de un cargarProvider"
    );
  }
  return context;
};

// Proveedor del contexto
export const cargarProvider = ({ children }) => {
  const [cargar, setCargar] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    //Se solicita los datos al backend, con la funcion listarRecetas()
    const respuesta = await listarRecetas();
    //Se verifican los datos recibidos
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      //Cargarlo al estado
      setCargar(data);
    }
  };

  return (
    <cargarContext.Provider
      value={{
        cargar,
        setCargar,
        cargarDatos,
      }}
    >
      {children}
    </cargarContext.Provider>
  );
};