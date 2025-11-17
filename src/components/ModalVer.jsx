import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { useDatosTurnos } from './context/CargarContex';

export const ModalVer = () => {
  const { show, handleClose, turnoSeleccionado } = useDatosTurnos();

  // Si no hay turno seleccionado, no mostrar nada
  if (!turnoSeleccionado) return null;

  // Formatear la fecha para mostrarla más legible
  const formatearFecha = (fecha) => {
    if (!fecha) return 'No especificada';
    const date = new Date(fecha);
    return date.toLocaleDateString('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Función para determinar el color del badge según el estado
  const obtenerColorEstado = (estado) => {
    switch (estado?.toLowerCase()) {
      case 'pendiente':
        return 'warning';
      case 'confirmado':
        return 'success';
      case 'cancelado':
        return 'danger';
      case 'completado':
        return 'info';
      default:
        return 'secondary';
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>
          <i className="bi bi-calendar-check me-2"></i>
          Detalles del Turno
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="p-4">
        <Card className="border-0 shadow-sm mb-3">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0 text-primary">
                <i className="bi bi-person-circle me-2"></i>
                Información del Dueño
              </h5>
              {turnoSeleccionado.estado && (
                <Badge bg={obtenerColorEstado(turnoSeleccionado.estado)} className="px-3 py-2">
                  {turnoSeleccionado.estado}
                </Badge>
              )}
            </div>
            
            <Row className="mb-2">
              <Col md={6}>
                <p className="mb-2">
                  <strong className="text-muted">Nombre:</strong><br />
                  <span className="fs-6">{turnoSeleccionado.nombreDueno}</span>
                </p>
              </Col>
              <Col md={6}>
                <p className="mb-2">
                  <strong className="text-muted">Email:</strong><br />
                  <span className="fs-6">{turnoSeleccionado.email}</span>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="border-0 shadow-sm mb-3">
          <Card.Body>
            <h5 className="mb-3 text-success">
              <i className="bi bi-heart-pulse me-2"></i>
              Información de la Mascota
            </h5>
            
            <Row className="mb-2">
              <Col md={6}>
                <p className="mb-2">
                  <strong className="text-muted">Nombre:</strong><br />
                  <span className="fs-6">{turnoSeleccionado.nombreMascota}</span>
                </p>
              </Col>
              <Col md={6}>
                <p className="mb-2">
                  <strong className="text-muted">Tipo:</strong><br />
                  <Badge bg="light" text="dark" className="fs-6">
                    {turnoSeleccionado.tipoMascota}
                  </Badge>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="border-0 shadow-sm mb-3">
          <Card.Body>
            <h5 className="mb-3 text-info">
              <i className="bi bi-clipboard2-pulse me-2"></i>
              Detalles del Servicio
            </h5>
            
            <Row className="mb-2">
              <Col md={12}>
                <p className="mb-2">
                  <strong className="text-muted">Servicio solicitado:</strong><br />
                  <Badge bg="info" className="fs-6">{turnoSeleccionado.tipoServicios}</Badge>
                </p>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <p className="mb-0">
                  <strong className="text-muted">Descripción del motivo:</strong><br />
                  <span className="fs-6 text-dark bg-light p-2 d-block rounded mt-2">
                    {turnoSeleccionado.descripcion}
                  </span>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="border-0 shadow-sm">
          <Card.Body>
            <h5 className="mb-3 text-danger">
              <i className="bi bi-calendar3 me-2"></i>
              Fecha y Horario
            </h5>
            
            <Row>
              <Col md={6}>
                <p className="mb-2">
                  <strong className="text-muted">Fecha:</strong><br />
                  <span className="fs-6">{formatearFecha(turnoSeleccionado.fecha)}</span>
                </p>
              </Col>
              <Col md={6}>
                <p className="mb-2">
                  <strong className="text-muted">Horario:</strong><br />
                  <Badge bg="danger" className="fs-6">{turnoSeleccionado.horario} hs</Badge>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Modal.Body>
      
      <Modal.Footer className="bg-light">
        <Button variant="secondary" onClick={handleClose}>
          <i className="bi bi-x-circle me-2"></i>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};