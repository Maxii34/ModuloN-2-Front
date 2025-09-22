import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import TurnoMascota from "../createClass";

const leerTurnosDelLocalStorage = () => {
  const turnosGuardados = localStorage.getItem("turnos");
  if (turnosGuardados) {
    return JSON.parse(turnosGuardados);
  }
  return [];
};

const Tablaturnos = () => {
  const [turnos, setTurnos] = useState([]);

  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuariokey"));
  const nombreDueño = usuarioLogueado ? usuarioLogueado.nombreCompleto : null;
  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

  useEffect(() => {
    const turnosLocalStorage = leerTurnosDelLocalStorage();
    const instanciasDeTurno = turnosLocalStorage.map(
      (turno) =>
        new TurnoMascota(
          turno.nombreDueño,
          turno.nombreMascota,
          turno.tipoMascota,
          turno.servicio,
          turno.descripcion,
          turno.fecha,
          turno.id,
          turno.estado
        )
    );
    setTurnos(instanciasDeTurno);
  }, [nombreDueño]);

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

  const eliminarTurno = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevosTurnos = turnos.filter((turno) => turno.id !== id);
        setTurnos(nuevosTurnos);
        localStorage.setItem("turnos", JSON.stringify(nuevosTurnos));
        Swal.fire({
          title: "Eliminado",
          text: "El turno ha sido eliminado.",
          icon: "success",
        });
      }
    });
  };

  let btnturno = "";
  if (usuarioActivo.tipo === "admin") {
    btnturno = "Agregar turno";
  } else {
    btnturno = "Solicitar turno";
  }

  const navigate = useNavigate();
  const handlePedirTurno = () => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuariokey"));

    if (!usuarioLogueado) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe iniciar sesión para solicitar un turno.",
      });
    } else {
      navigate("/admin/crear");
    }
  };

  return (
    <div className="container py-3">
      <div id="bordeBienvenida">
        <h3>¡Hola {usuarioActivo.nombre}!</h3>
      </div>

      <div className="d-flex justify-content-end mb-3">
        <Button id="btn-agregar" onClick={handlePedirTurno}>
          <i className="bi bi-plus-circle"></i> {btnturno}
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
            {turnos.length > 0 ? (
              turnos.map((turno) => (
                <tr key={turno.id}>
                  <td>{turno.id}</td>
                  <td>{usuarioActivo.nombre}</td>
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
                  <td className="d-flex justify-content-center flex-wrap gap-1">
                    <button className="icon-btn text-primary">
                      <i className="bi bi-check-circle"></i>
                    </button>
                    <button className="icon-btn text-success">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="icon-btn text-danger"
                      onClick={() => eliminarTurno(turno.id)}
                    >
                      <i className="bi bi-x-circle"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No hay turnos registrados.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tablaturnos;
