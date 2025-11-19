import Swal from "sweetalert2";
import { useDatosTurnos } from "./context/CargarContex";
import { eliminarTurno } from "./helpers/queries";

export const ItemTabla = ({ turno, fila }) => {
  const { handleShow, setTurnoSelecionado, cargarDatos } = useDatosTurnos();

  const abrirModal = () => {
    setTurnoSelecionado(turno);
    handleShow();
  };

  const eliminarTurnoID = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar el turno?",
      text: "No se puede revertir este paso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarTurno(turno._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "El turno fue eliminado",
            text: `El turno fue eliminado correctamente`,
            icon: "success",
            showConfirmButton: false,
            showCancelButton: false,
            timer: 3000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
          });
          await cargarDatos();
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: `El turno no pudo ser eliminado`,
            icon: "error",
            showConfirmButton: false,
            timer: 4000,
          });
        }
      }
    });
  };

  return (
    <tr>
      <td>{fila}</td>
      <td>{turno.nombreDueno}</td>
      <td>{turno.nombreMascota}</td>
      <td>{turno.fecha.split("T")[0]}</td>
      <td>{turno.horario}</td>
      <td>
        <span className="badge bg-warning fs-6 px-2 shadow">
          {turno.pendiente || "Pendiente"}
        </span>
      </td>
      <td className="d-flex justify-content-center gap-1 flex-wrap">
        <button className="btn btn-success text-white shadow">
          <i className="bi bi-check-circle"></i>
        </button>
        <button
          className="btn btn-secondary text-white shadow"
          onClick={abrirModal}
        >
          <i className="bi bi-eye"></i>
        </button>
        <button
          className="btn btn-danger text-white shadow"
          onClick={eliminarTurnoID}
        >
          <i className="bi bi-x-circle"></i>
        </button>
      </td>
    </tr>
  );
};
