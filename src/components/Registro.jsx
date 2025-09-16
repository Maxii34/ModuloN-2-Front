import { Form, Button, Col, Row, Container } from "react-bootstrap";

const Registro = () => {
  return (
    <Container className="d-flex justify-content-center my-5">
      <Form className="p-4 border rounded shadow" style={{ maxWidth: "700px", width: "100%" }}>
        <h4 className="mb-4 text-center">Registro de Usuario</h4>

        {/* Nombre completo */}
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre completo *</Form.Label>
          <Form.Control type="text" placeholder="Juan Pérez" />
          <Form.Text className="text-muted">Ingrese su nombre completo</Form.Text>
        </Form.Group>

        {/* Email y Teléfono */}
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" placeholder="correo@ejemplo.com" />
              <Form.Text className="text-muted">Ingrese un email válido</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="telefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="011 1234-5678" />
              <Form.Text className="text-muted">Opcional</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        {/* Contraseña */}
        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Contraseña *</Form.Label>
          <Form.Control type="password" placeholder="********" />
          <Form.Text className="text-muted">Mínimo 6 caracteres</Form.Text>
        </Form.Group>

        <Button variant="success" type="submit" className="w-100 fw-bold">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
};

export default Registro;
