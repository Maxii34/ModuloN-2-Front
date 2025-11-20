import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { usuarioLogin } from "./helpers/queries";

export const Login = ({ showModal, closeModal, setUsuariologueado }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = async (data) => {
    const respuesta = await usuarioLogin(data);

    if (respuesta && respuesta.status === 200) {
      const datos = await respuesta.json();

      const datosUsuario = {
        usuario: datos.usuario,
        token: datos.token,
      };

      localStorage.setItem("usuarioActivo", JSON.stringify(datosUsuario));
      setUsuariologueado(datosUsuario);

      Swal.fire({
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente.",
        icon: "success",
      });
      reset();
      closeModal();
      navegacion("/turnos");
    } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: "Credenciales incorrectas",
        icon: "error",
      });
    }
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton className="mmd">
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>

      <Modal.Body className="nav-pri">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              {...register("email", { required: "El email es obligatorio" })}
            />
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              {...register("password", {
                required: "La contraseña es obligatoria",
              })}
            />
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </Form.Group>

          <div className="text-center mt-3">
            <Link className="text-success fw-semibold text-muted">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <div className="text-center mt-3">
            <small>
              ¿Aún no tienes cuenta?{" "}
              <Link to={"/registro"} onClick={closeModal}>
                Regístrate
              </Link>
            </small>
            <div className="my-2">
              <Button variant="success" type="submit">
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </Form>
      </Modal.Body>

      <Modal.Footer className="mmd">
        <Button variant="secondary" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
