import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const leerTurnosDelLocalStorage = () => {
  const turnosGuardados = localStorage.getItem("turnos");
  return turnosGuardados ? JSON.parse(turnosGuardados) : [];
};

const Tablaturnos = () => {
  const [turnos, setTurnos] = useState([]);
  const navigate = useNavigate();

  const usuarioActivo = JSON.parse(
    localStorage.getItem("usuarioActivo") || "null"
  );

  useEffect(() => {
    setTurnos(leerTurnosDelLocalStorage());
  }, []);

  const getColorPorEstado = (estado) => {
    switch (estado) {
      case "Confirmado":
        return "success";
      case "Pendiente":
        return "warning";
      case "Cancelado":
        return "danger";
      default:
        return "secondary";
    }
  };

  const cancelarTurno = (id) => {
    if (!usuarioActivo) return;

    const turno = turnos.find((t) => t.id === id);
    if (!turno || turno.estado === "Confirmado") {
      Swal.fire(
        "Acción inválida",
        "No se puede cancelar un turno confirmado.",
        "error"
      );
      return;
    }

    Swal.fire({
      title:
        usuarioActivo.tipo === "admin" ? "Eliminar turno?" : "Cancelar turno?",
      text:
        usuarioActivo.tipo === "admin"
          ? "No podrás revertir esta acción"
          : "El turno se marcará como cancelado.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText:
        usuarioActivo.tipo === "admin" ? "Sí, eliminar" : "Sí, cancelar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (!result.isConfirmed) return;

      const nuevosTurnos =
        usuarioActivo.tipo === "admin"
          ? turnos.filter((t) => t.id !== id)
          : turnos.map((t) =>
              t.id === id ? { ...t, estado: "Cancelado" } : t
            );

      setTurnos(nuevosTurnos);
      localStorage.setItem("turnos", JSON.stringify(nuevosTurnos));

      Swal.fire(
        usuarioActivo.tipo === "admin" ? "Eliminado" : "Cancelado",
        usuarioActivo.tipo === "admin"
          ? "El turno ha sido eliminado."
          : "El turno ha sido cancelado.",
        "success"
      );
    });
  };

  const confirmarTurno = (id) => {
    const turno = turnos.find((t) => t.id === id);
    if (!turno || turno.estado === "Cancelado") {
      Swal.fire(
        "Acción inválida",
        "No se puede confirmar un turno cancelado.",
        "error"
      );
      return;
    }

    const turnosActualizados = turnos.map((t) =>
      t.id === id ? { ...t, estado: "Confirmado" } : t
    );
    setTurnos(turnosActualizados);
    localStorage.setItem("turnos", JSON.stringify(turnosActualizados));
    Swal.fire("Confirmado", "El turno ha sido confirmado.", "success");
  };

  const handlePedirTurno = () => {
    if (!usuarioActivo) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe iniciar sesión",
      });
      return;
    }
    navigate("/admin/crear");
  };

  const turnosFiltrados =
    usuarioActivo?.tipo === "admin"
      ? turnos
      : turnos.filter((t) => t.correoDueño === usuarioActivo?.email);

  if (!usuarioActivo) {
    return (
      <div className="container py-3">
        <div className="alert alert-warning">
          No hay usuario activo. Por favor, inicia sesión.
        </div>
      </div>
    );
  }

  return (
    <div className="container py-3">
      <div id="bordeBienvenida">
        <h3>¡Hola {usuarioActivo.nombre || usuarioActivo.nombreCompleto}!</h3>
      </div>

      <div className="d-flex justify-content-end mb-3 gap-2">
        <Button id="btn-agregar" onClick={handlePedirTurno} variant="success">
          <i className="bi bi-plus-circle"></i>
          {usuarioActivo.tipo === "admin"
            ? " Agregar turno"
            : " Solicitar turno"}
        </Button>
      </div>

      <div className="table-responsive">
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
            {turnosFiltrados.length > 0 ? (
              turnosFiltrados.map((turno) => {
                const isCancelarDisabled =
                  turno.estado === "Confirmado" &&
                  usuarioActivo.tipo !== "admin";
                const isConfirmarDisabled = turno.estado === "Cancelado";

                return (
                  <tr key={turno.id}>
                    <td>{turno.id}</td>
                    <td>{turno.nombreDueño}</td>
                    <td>{turno.nombreMascota}</td>
                    <td>{turno.fecha}</td>
                    <td>
                      <span
                        className={`badge bg-${getColorPorEstado(
                          turno.estado
                        )} fs-6 px-2`}
                      >
                        {turno.estado}
                      </span>
                    </td>
                    <td className="d-flex justify-content-center gap-2 flex-wrap">
                      {usuarioActivo.tipo === "admin" && (
                        <>
                          <button
                            className="icon-btn text-primary"
                            title="Confirmar"
                            onClick={() => confirmarTurno(turno.id)}
                            disabled={
                              isConfirmarDisabled ||
                              turno.estado === "Confirmado"
                            }
                          >
                            <i className="bi bi-check-circle"></i>
                          </button>
                          <button
                            className="icon-btn text-success"
                            title="Editar"
                            onClick={() =>
                              navigate(`/admin/editar/${turno.id}`)
                            }
                          >
                            <i className="bi bi-pencil-square"></i>
                          </button>
                        </>
                      )}
                      <button
                        className="icon-btn text-danger"
                        onClick={() => cancelarTurno(turno.id)}
                        disabled={isCancelarDisabled}
                        title={
                          usuarioActivo.tipo === "admin"
                            ? "Eliminar"
                            : "Cancelar"
                        }
                      >
                        <i className="bi bi-x-circle"></i>
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6">No hay turnos registrados.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tablaturnos;
