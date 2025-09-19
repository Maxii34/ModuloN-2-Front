import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function Login({ showModal, closeModal, setUsuariologueado }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navegacion = useNavigate();

  const cerrarModal = () => closeModal();

  const onSubmit = (data) => {
    console.log(data);

    // 🔑 Validación de ADMIN
    if (
      data.email === import.meta.env.VITE_API_EMAIL &&
      data.password === import.meta.env.VITE_API_PASSWORD
    ) {
      const admin = { email: data.email, password: data.password, tipo: "admin" };
      localStorage.setItem("usuarioActivo", JSON.stringify(admin));
      setUsuariologueado(true);

      Swal.fire({
        title: "¡Bienvenido Admin!",
        text: "Has iniciado sesión como administrador.",
        icon: "success",
      });

      closeModal();
      navegacion("/admin");
      reset();
      return;
    }

    // 🔑 Validación de usuarios normales
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuarios.find(
      u => u.email === data.email && u.password === data.password
    );

    if (usuarioEncontrado) {
      usuarioEncontrado.tipo = "usuario"; // agregamos tipo
      localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
      setUsuariologueado(true);

      Swal.fire({
        title: `¡Bienvenido ${usuarioEncontrado.nombreCompleto}!`,
        text: "Has iniciado sesión correctamente.",
        icon: "success",
      });

      closeModal();
      navegacion("/turnos");
    } else {
      Swal.fire({
        title: "Error al iniciar sesión",
        text: "Correo o contraseña incorrectos.",
        icon: "error",
      });
    }

    reset();
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              {...register("email", { required: "El email es obligatorio" })}
            />
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              {...register("password", { required: "La contraseña es obligatoria" })}
            />
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
          </Form.Group>

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

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;
