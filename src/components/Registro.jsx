import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { registroUsuario } from "./helpers/queries.js";

export const Registro = ({ openModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  

  const onSubmit = async (data) => {
  const nuevoUsuario = {
    nombre: data.nombreCompleto,
    email: data.email,
    telefono: data.telefono,
    password: data.password,
    tipo: "usuario",
  };
  
  const respuesta = await registroUsuario(nuevoUsuario);

  // Validar si la respuesta falló
  if (!respuesta || !respuesta.ok) {
    const datos = await respuesta.json();
    return Swal.fire({
      title: "Ocurrió un error",
      text: datos?.mensaje || datos?.error || "No se pudo completar el registro.",
      icon: "error",
    });
  }
  // Si todo salió bien
  const datos = await respuesta.json();
  Swal.fire({
    title: "Bienvenido",
    text: "Te registraste correctamente.",
    icon: "success",
  });
  reset();
  navegacion('/');
};

  return (
    <Container className="my-5">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 borde From-register"
      >
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h4 className="mb-4 text-center">Registro de Usuario</h4>

            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre completo *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Pérez"
                {...register("nombreCompleto", {
                  required: "El nombre completo es un campo obligatorio.",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                  maxLength: { value: 50, message: "Máximo 50 caracteres" },
                })}
              />
              {errors.nombreCompleto && (
                <span className="text-danger">
                  {errors.nombreCompleto.message}
                </span>
              )}
            </Form.Group>

            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="correo@ejemplo.com"
                    {...register("email", {
                      required: "El email es obligatorio",
                      pattern: {
                        value:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message: "Email inválido",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group controlId="telefono">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="011 1234-5678"
                    {...register("telefono", {
                      pattern: {
                        value: /^[0-9]{2,4}\s?[0-9]{4}-?[0-9]{4}$/,
                        message: "Teléfono inválido",
                      },
                    })}
                  />
                  {errors.telefono && (
                    <span className="text-danger">
                      {errors.telefono.message}
                    </span>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Contraseña *</Form.Label>
              <Form.Control
                type="password"
                placeholder="********"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "8-16 caracteres, al menos un dígito, mayúscula, minúscula y caracter especial",
                  },
                })}
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
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

          <Col
            xs={12}
            md={6}
            className="d-flex flex-column align-items-center text-center mt-4 mt-md-0"
          >
            <img
              src="https://images.pexels.com/photos/32778241/pexels-photo-32778241.jpeg"
              alt="Caniche posando"
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
