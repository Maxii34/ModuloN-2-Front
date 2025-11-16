import { Button, Table } from "react-bootstrap";
import { ItemTabla } from "./ItemTabla";
import { useDatosTurnos } from "./context/cargarContex";

export const Tablaturnos = () => {

 const { recetas } = useDatosTurnos();

  return (
    <div className="container py-3">
      <div id="bordeBienvenida">
        <h3>¡Hola!</h3>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Tabla de turnos</h1>
      </div>

      <div className="table-responsive d-none d-md-block">
        <Table bordered hover className="align-middle text-center">
          <thead className="table-success">
            <tr>
              <th>Código</th>
              <th>Nombre Dueño</th>
              <th>Nombre Mascota</th>
              <th>Fecha y Hora</th>
              <th>Estado del turno</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {recetas.length === 0 ? (
            <tr>
              <td colSpan="6">Aun no hay turnos cargados.</td>
            </tr>
            ) : (
            <ItemTabla />
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};