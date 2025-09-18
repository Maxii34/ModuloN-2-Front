import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function Login({ showModal, closeModal, setUsuariologueado }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const cerrarModal = () => {
    closeModal(); // llama al prop para cerrar el modal
  };

  const onSubmit = (data) => {
    console.log(data);
    //Aki va la logica.
    if (
      data.email === import.meta.env.VITE_API_EMAIL &&
      data.password === import.meta.env.VITE_API_PASSWORD
    ) {
      setUsuariologueado(true);
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente.",
        icon: "success",
        confirmButtonText: "Continuar",
      });
      closeModal();
      navegacion("/admin");
    } else {
      Swal.fire({
        title: "Error al inicio de sesión",
        text: "El correo o la contraseña ingresados son incorrectos. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Reintentar",
      });
    }
    reset();
  };

  return (
    <div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton className="color-lg">
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>

        <Modal.Body className="color-centro">
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Campo Email */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                {...register("email", {
                  required: "El email es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email debe ser un correo valido por ej: usuario@mail.com",
                  },
                })}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </Form.Group>

            {/* Campo Contraseña */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                {...register("password", {
                  required: "La contraseña es un dato obligatorio",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula, una mayúscula y un caracter especial.",
                  },
                })}
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </Form.Group>

            {/* Olvidaste tu contraseña */}
            <div className="text-end mt-1">
              <Link
                onClick={closeModal}
                className="text-decoration-none text-success"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Registro + Botón */}
            <div className="text-center mt-3">
              <small>
                ¿Aún no tienes cuenta...?{" "}
                <Link
                  to={"/registro"}
                  className="text-success fw-bold"
                  onClick={closeModal}
                >
                  Regístrate
                </Link>
              </small>
              <div className="my-2">
                <Button
                  variant="success"
                  className="shadow"
                  type="submit" // 👈 este es el cambio
                >
                  Iniciar Sesión
                </Button>
              </div>
            </div>
          </Form>
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
