import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { useDatosTurnos } from "./context/CargarContex";
import { eliminarTurno } from "./helpers/queries";
import Swal from "sweetalert2";

export const AlertTurno = () => {
  const { turnoSolicitado, cargarDatos, actualizarAlertUsuario } = useDatosTurnos();

  const navegacion = useNavigate();
  //Funcion para mandar a editar el turno solicitado.
  const editarTurno = () => {
    navegacion(`/admin/editar/${turnoSolicitado._id}`);
  };

  if (!turnoSolicitado || !turnoSolicitado.fecha) {
    return null;
  }


  const cancelarTurnoID = () => {
    Swal.fire({
      title: "¿Estas seguro de cancelar el turno?",
      text: "No se podra revertir este paso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarTurno(turnoSolicitado._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "El turno fue cancelado",
            text: `El turno fue calcelado correctamente`,
            icon: "success",
            showConfirmButton: false,
            showCancelButton: false,
            timer: 3000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
          });
          await actualizarAlertUsuario();
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
    <div className="container my-3">
      <Alert
        variant="info"
        className="d-flex justify-content-between align-items-center shadow-lg"
      >
        <div>
          <Alert.Heading>
            📅 <strong>Tu próximo turno</strong>: {turnoSolicitado.nombreDueno}
          </Alert.Heading>
          <p className="mb-0  d-flex justify-content-center align-content-center gap-3">
            <div className="">
            <strong> Mascota:</strong> {turnoSolicitado.nombreMascota} <br />
            <strong> Fecha:</strong> {turnoSolicitado.fecha.split("T")[0]} 
            </div>
            <div>
            <strong> Servicio:</strong> {turnoSolicitado.tipoServicios} <br />
            <strong> Hora:</strong> {turnoSolicitado.horario} hs
            </div>
          </p>
        </div>
        <div className="d-flex gap-2">
          <Button
            variant="warning"
            size="sm"
            onClick={editarTurno}
            className="shadow"
          >
            ✏️ Editar
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={cancelarTurnoID}
            className="shadow"
          >
            ❌ Cancelar
          </Button>
        </div>
      </Alert>
    </div>
  );
};
