import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { useDatosTurnos } from './context/CargarContex';

export const ModalVer = () => {
  const { show, handleClose, turnoSelecionado } = useDatosTurnos();

  if (!turnoSelecionado) {
    return (
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Cargando...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>No hay información disponible</p>
        </Modal.Body>
      </Modal>
    );
  }

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
              
            </div>
            
            <Row className="mb-2">
              <Col md={6}>
                <p className="mb-2">
                  <strong className="text-muted"><b>Nombre</b>: {turnoSelecionado.nombreDueno}</strong><br />
                  <span className="fs-6"></span>
                </p>
              </Col>
              <Col md={6}>
                <p className="mb-2">
                  <strong className="text-muted"><b>Email</b>: {turnoSelecionado.email}</strong><br />
                  <span className="fs-6"></span>
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
                  <strong className="text-muted"><b>Nombre</b>: {turnoSelecionado.nombreMascota}</strong><br />
                  <span className="fs-6"></span>
                </p>
              </Col>
              <Col md={6}>
                <p className="mb-2">
                  <strong className="text-muted"><b>Tipo de Mascota</b>: {turnoSelecionado.tipoMascota}</strong><br />
                  <Badge bg="light" text="dark" className="fs-6">
                    
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
                  <strong className="text-muted"><b>Servicio solicitado</b>: {turnoSelecionado.tipoServicios}</strong><br />
                  <Badge bg="info" className="fs-6"></Badge>
                </p>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <p className="mb-0">
                  <strong className="text-muted"><b>Descripción del motivo</b>: {turnoSelecionado.descripcion}</strong><br />
                  <span className="fs-6 text-dark bg-light p-2 d-block rounded mt-2">
                    
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
                  <strong className="text-muted"><b>Fecha</b>: {turnoSelecionado.fecha.split("T")[0]}</strong><br />
                  <span className="fs-6"> </span>
                </p>
              </Col>
              <Col md={6}>
                <p className="mb-2">
                  <strong className="text-muted"><b>Horario</b>: {turnoSelecionado.horario}</strong><br />
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