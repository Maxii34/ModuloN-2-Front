import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { useDatosTurnos } from "./context/CargarContex";

export const AlertTurno = () => {
  const { turnoSolicitado } = useDatosTurnos();

  const navegacion = useNavigate();
  //Funcion para mandar a editar el turno solicitado.
  const editarTurno = () => {
    navegacion(`/admin/editar/${turnoSolicitado._id}`);
  };

  if (!turnoSolicitado || !turnoSolicitado.fecha) {
    return null;
  }

  return (
    <div className=" container my-4">
      <Alert
        variant="info"
        className="d-flex justify-content-between align-items-center shadow-lg"
      >
        <div>
          <Alert.Heading>📅 Próximo turno para: apolo</Alert.Heading>
          <p className="mb-0">
            <strong> Fecha:</strong> {turnoSolicitado.fecha.split("T")[0]}
            <strong> Hora:</strong> {turnoSolicitado.horario} <br />
            <strong> Servicio:</strong> {turnoSolicitado.tipoServicios}
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
            //onClick={() => cancelarTurno(turnoId)}
            className="shadow"
          >
            ❌ Cancelar
          </Button>
        </div>
      </Alert>
    </div>
  );
};
