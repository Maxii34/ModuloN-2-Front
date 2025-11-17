import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useDatosTurnos } from "./context/CargarContex";
import { useNavigate } from "react-router";

export const AlertTurno = () => {
  const { turnoSelecionado } = useDatosTurnos();


  const navegacion = useNavigate();
  const editarTurno = () => {
      navegacion(`/admin/editar/${turnoSelecionado._id}`);
    };
    
    if (!turnoSelecionado) {
      return null;
    }

  return (
    <div className=" container my-4">
      <Alert
        variant="info"
        className="d-flex justify-content-between align-items-center shadow-lg"
      >
        <div>
          <Alert.Heading>
            📅 Próximo turno para: {turnoSelecionado.nombreMascota}
          </Alert.Heading>
          <p className="mb-0">
            <strong> Fecha:</strong> {turnoSelecionado.fecha.split("T")[0]} 
            <strong> Hora:</strong> {turnoSelecionado.horario} 
            <strong> Servicio:</strong> {turnoSelecionado.tipoServicios}
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
