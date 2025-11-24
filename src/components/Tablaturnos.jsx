import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ItemTabla } from "./ItemTabla";
import { useDatosTurnos } from "./context/CargarContex";

export const Tablaturnos = () => {
  //Se obtiene los turnos desde el contexto.
  const { turnos } = useDatosTurnos();
  
  // Estados para paginación
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // 10 turnos por página
  const [turnosPaginados, setTurnosPaginados] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  // Efecto que se ejecuta cuando cambia la página o los turnos
  useEffect(() => {
    paginarTurnos();
  }, [page, turnos]);

  const paginarTurnos = () => {
    // Calcular índices
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    // Obtener turnos de la página actual
    const turnosActuales = turnos.slice(startIndex, endIndex);
    
    // Calcular total de páginas
    const totalPaginas = Math.ceil(turnos.length / limit);
    
    setTurnosPaginados(turnosActuales);
    setTotalPages(totalPaginas);
  };

  return (
    <div className="container py-3">

      <div className="d-flex justify-content-between align-items-center mb-3 border-2 border-bottom">
        <h1>Tabla de turnos solicitados.</h1>
        <small className="text-muted">Total: {turnos.length} turnos</small>
      </div>

      <div className="table-responsive my-4">
        <Table striped bordered hover className="align-middle text-center shadow-sm">
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
                <td colSpan="7">Aun no hay turnos solicitados.</td>
              </tr>
            ) : (
              turnosPaginados.map((turno, index) => (
                <ItemTabla 
                  key={turno._id} 
                  turno={turno} 
                  fila={(page - 1) * limit + index + 1}
                />
              ))
            )}
          </tbody>
        </Table>
      </div>

      {/* Controles de paginación - Solo se muestran si hay turnos */}
      {turnos.length > 0 && (
        <div className="d-flex justify-content-center align-items-center my-3">
          <Button
            variant="secondary"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="shadow-lg btn-sm btn-dark"
          >
            Anterior
          </Button>
          <span className="mx-3">
            Página {page} de {totalPages}
          </span>
          <Button
            variant="secondary"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="shadow-lg btn-sm btn-dark"
          >
            Siguiente
          </Button>
        </div>
      )}
    </div>
  );
};