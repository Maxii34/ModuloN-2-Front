import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router";

const Registro = ({ openModal }) => {
  return (
    <Container className="my-5">
      <Form className="p-4 borde From-register">
        <Row className="align-items-center">
          {/* Columna izquierda: Formulario */}
          <Col xs={12} md={6}>
            <h4 className="mb-4 text-center">Registro de Usuario</h4>

            {/* Nombre completo */}
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre completo *</Form.Label>
              <Form.Control type="text" placeholder="Juan Pérez" />
              <Form.Text className="text-muted">
                Ingrese su nombre completo
              </Form.Text>
            </Form.Group>

            {/* Email y Teléfono */}
            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control type="email" placeholder="correo@ejemplo.com" />
                  <Form.Text className="text-muted">
                    Ingrese un email válido
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
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

            <div className="text-center my-3">
              <small>
                ¿Ya tienes cuenta?{" "}
                <Link onClick={openModal} className="text-success fw-bold">
                  Inicia sesión
                </Link>
              </small>
            </div>

            <Button variant="success" type="submit" className="w-100 fw-bold">
              Registrarse
            </Button>
          </Col>

          {/* Columna derecha: Imagen + texto motivador */}
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column align-items-center text-center mt-4 mt-md-0"
          >
            <img
              src="https://images.pexels.com/photos/32778241/pexels-photo-32778241.jpeg"
              alt="Mascotas felices"
              className="img-fluid mb-3 img-register"
              style={{ maxWidth: "300px" }}
            />
            <p className="fw-bold text-muted">
              Cuidamos a tu mascota como vos 🐾 <br />
              ¡Regístrate hoy y accedé a beneficios exclusivos y sorpresas
              especiales!
            </p>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Registro;
