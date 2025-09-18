import { Button, Table } from "react-bootstrap";

const Tablaturnos = () => {
  return (
    <div className="container py-3">
      <div id="bordeBienvenida">
        <h3>¡Hola (nombre de usuario)!</h3>
      </div>

      <div className="d-flex justify-content-end mb-3">
        <Button id="btn-agregar">
          <i className="bi bi-plus-circle"></i> Agregar turno
        </Button>
      </div>

      <div className="table-responsive">
        <Table bordered hover className="align-middle text-center">
          <thead className="table-success">
            <tr>
              <th>Código</th>
              <th>Nombre Dueño</th>
              <th>Nombre Mascota</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Estado del turno</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 12,
                nombre: "Mario",
                mascota: "Pepito",
                fecha: "15-09-2025",
                hora: "16:30",
                estado: "Pendiente",
                color: "warning",
              },
              {
                id: 13,
                nombre: "Mario",
                mascota: "Pepito",
                fecha: "15-09-2025",
                hora: "16:30",
                estado: "Confirmado",
                color: "success",
              },
              {
                id: 14,
                nombre: "Mario",
                mascota: "Pepito",
                fecha: "15-09-2025",
                hora: "16:30",
                estado: "Cancelado",
                color: "danger",
              },
            ].map((turno) => (
              <tr key={turno.id}>
                <td>{turno.id}</td>
                <td>{turno.nombre}</td>
                <td>{turno.mascota}</td>
                <td>{turno.fecha}</td>
                <td>{turno.hora}</td>
                <td>
                  <span className={`badge bg-${turno.color} fs-6 px-2`}>
                    {turno.estado}
                  </span>
                </td>
                <td className="d-flex justify-content-center flex-wrap gap-1">
                  <button className="icon-btn text-primary">
                    <i className="bi bi-check-circle"></i>
                  </button>
                  <button className="icon-btn text-success">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="icon-btn text-danger">
                    <i className="bi bi-x-circle"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tablaturnos;
