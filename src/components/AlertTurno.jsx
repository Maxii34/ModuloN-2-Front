import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

export const AlertTurno = () => {
  


  const navegacion = useNavigate();
  const editarTurno = () => {
      navegacion(`/admin/editar/`);
    };
    


  return (
    <div className=" container my-4">
      <Alert
        variant="info"
        className="d-flex justify-content-between align-items-center shadow-lg"
      >
        <div>
          <Alert.Heading>
            📅 Próximo turno para: apolo
          </Alert.Heading>
          <p className="mb-0">
            <strong> Fecha:</strong> 12:12 
            <strong> Hora:</strong> 12:12 
            <strong> Servicio:</strong> consulta
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
