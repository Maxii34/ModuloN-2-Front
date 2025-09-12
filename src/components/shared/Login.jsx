import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";

function Login({ showModal, closeModal }) {
  return (
    <div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton className="color-lg">
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body className="color-centro">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingrese su email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <div className="text-center mt-3">
              <small>
                ¿Aún no tienes cuenta...?{" "}
                <Link  className="text-primary fw-bold">
                  Regístrate
                </Link>
              </small>
              <div className="my-2">
                <Button variant="primary" onClick={closeModal}>
                  Iniciar Sesión
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="color-lg">
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
