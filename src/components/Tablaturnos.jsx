import { Table } from "react-bootstrap";
import { ItemTabla } from "./ItemTabla";
import { useDatosTurnos } from "./context/CargarContex";

export const Tablaturnos = () => {
  //Se obtene los turnos desde el contexto.
  const { turnos, handleShow } = useDatosTurnos();

  return (
    <div className="container py-3">

      <div className="d-flex justify-content-between align-items-center mb-3 border-2 border-bottom  ">
        <h1>Tabla de turnos solicitados.</h1>
      </div>

      <div className="table-responsive d-none d-md-block shadown">
        <Table bordered hover className="align-middle text-center">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Nombre Dueño</th>
              <th>Nombre Mascota</th>
              <th>Fecha</th>
              <th>Horario</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {turnos.length === 0 ? (
              <tr>
                <td colSpan="6">Aun no hay turnos cargados.</td>
              </tr>
            ) : (
              turnos.map((turno, index) => (
                <ItemTabla key={turno._id} turno={turno} fila={index + 1} />
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
