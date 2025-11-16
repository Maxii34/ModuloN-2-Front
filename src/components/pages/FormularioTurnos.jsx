
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearTurno } from "../helpers/queries";

export const FormularioTurnos = ({ titulo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (titulo === "Solicitar un turno") {
      const respuesta = await crearTurno(data);
      if (respuesta && respuesta.status === 201) {
        Swal.fire({
          title: "Turno creado",
          text: `El turno para ${data.nombreMascota} se creó correctamente`,
          icon: "success",
          timer: 2500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
        reset();
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo crear el turno",
          icon: "error",
        });
      }
    } else {
      // Lógica para editar el turno.
    }
  };

  return (
    <>
      <h2 className="text-center my-3">{titulo}</h2>
      <article className="container my-3">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="border p-4 rounded shadow mb-5"
        >
          <p className="text-center mb-4">
            <b>
              Ingrese los siguientes datos para poder solicitar el turno para tu
              mascota
            </b>
          </p>

          <Form.Group className="mb-3">
            <Form.Label>Nombre y apellido del dueño*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Juan Perez"
              {...register("nombreDueno", {
                required: "El nombre del dueño es obligatorio",
                minLength: {
                  value: 3,
                  message: "Debe tener al menos 3 caracteres",
                },
                maxLength: { value: 50, message: "Máximo 50 caracteres" },
              })}
            />
            {errors.nombreDueno && (
              <span className="text-danger">{errors.nombreDueno.message}</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email del dueño*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: juanperez@gmail.com"
              {...register("correoDueno", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de email inválido",
                },
              })}
            />
            {errors.correoDueno && (
              <span className="text-danger">{errors.correoDueno.message}</span>
            )}
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Nombre de la mascota*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Morito"
                  {...register("nombreMascota", {
                    required: "El nombre de la mascota es obligatorio",
                    minLength: { value: 3, message: "Mínimo 3 caracteres" },
                    maxLength: { value: 50, message: "Máximo 50 caracteres" },
                  })}
                />
                {errors.nombreMascota && (
                  <span className="text-danger">
                    {errors.nombreMascota.message}
                  </span>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Tipo de mascota*</Form.Label>
                <Form.Select
                  {...register("tipoMascota", {
                    required: "Este campo es obligatorio",
                  })}
                >
                  <option value="">Seleccione una opción</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Aves">Aves</option>
                  <option value="Conejos">Conejos</option>
                  <option value="Tortuga">Tortuga</option>
                </Form.Select>
                {errors.tipoMascota && (
                  <span className="text-danger">
                    {errors.tipoMascota.message}
                  </span>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Servicio elegido*</Form.Label>
                <Form.Select
                  {...register("tipoServicios", {
                    required: "Este campo es obligatorio",
                  })}
                >
                  <option value="">Seleccione una opción</option>
                  <option value="Consultas">Consultas</option>
                  <option value="Vacunas">Vacunas</option>
                  <option value="Cirugias">Cirugías</option>
                  <option value="Esterilización">Esterilización</option>
                  <option value="Análisis clínicos">Análisis clínicos</option>
                  <option value="Peluquería">Peluquería</option>
                  <option value="Estética">Estética</option>
                </Form.Select>
                {errors.tipoServicios && (
                  <span className="text-danger">
                    {errors.tipoServicios.message}
                  </span>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Descripción del motivo*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={{ resize: "none" }}
                  placeholder="Describa brevemente el motivo de la consulta"
                  {...register("descripcion", {
                    required: "La descripción es obligatoria",
                    minLength: { value: 10, message: "Mínimo 10 caracteres" },
                    maxLength: { value: 100, message: "Máximo 100 caracteres" },
                  })}
                />
                {errors.descripcion && (
                  <span className="text-danger">
                    {errors.descripcion.message}
                  </span>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Button variant="success" type="submit" className="d-flex mx-auto">
            Enviar solicitud
          </Button>
        </Form>
      </article>
    </>
  );
};
