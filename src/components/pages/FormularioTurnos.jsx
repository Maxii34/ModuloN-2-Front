import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioTurnos = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  const [horario, setHorario] = useState("");

  return (
    <>
      <h2 className="text-center my-3">Solicitar Turnos</h2>
      <article className="container my-3">
        <Form onSubmit={handleSubmit(onSubmit)} className="border p-3 rounded shadow mb-5">
          <p className="text-center">
            <b>
              Ingrese los siguientes datos para poder solicitar el turno para tu
              mascota
            </b>
          </p>
          <div className="border my-3"></div>
          <div className="formulario-turnos">

            {/* nombre del dueño */}
            <Form.Group className="mb-3 inputsTamanio">
              <Form.Label>Nombre y apellido del dueño*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Juan Perez"
                {...register("nombreCompleto", {
                  required: "El nombre completo es un campo obligatorio.",
                  minLength: {
                    value: 10,
                    message: "El nombre debe tener al menos 3 caracteres.",
                  },
                  maxLength: {
                    value: 50,
                    message: "El nombre no puede superar los 50 caracteres.",
                  },
                })}
              />
              {errors.nombreCompleto && (
                <span className="text-danger">
                  {errors.nombreCompleto.message}
                </span>
              )}
            </Form.Group>

            {/* nombre de la mascota */}
            <Form.Group className="mb-3 inputsTamanio">
              <Form.Label>Nombre de la mascota*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Morito"
                {...register("nombreMascota", {
                  required: "El nombre completo es un campo obligatorio.",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres.",
                  },
                  maxLength: {
                    value: 50,
                    message: "El nombre no puede superar los 50 caracteres.",
                  },
                })}
              />
              {errors.nombreMascota && (
                <span className="text-danger">
                  {errors.nombreMascota.message}
                </span>
              )}
            </Form.Group>
          </div>
          <div className="formulario-turnos">
            {/* email */}
            <Form.Group className="mb-3 inputsTamanio">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: juanperez@gmail.com"
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

            {/* tipo de mascota */}
            <Form.Group className="mb-3 inputsTamanio">
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
          </div>

          <div className="formulario-turnos">
            {/* Telefono */}
            <Form.Group className="mb-3 inputsTamanio">
              <Form.Label>Télefono*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 381 - 5552464"
                {...register("telefono", {
                  pattern: {
                    value: /^[0-9]{2,4}\s?[0-9]{4}-?[0-9]{4}$/,
                    message:
                      "El teléfono debe tener un formato válido, ej: 011 1234-5678",
                  },
                })}
              />
              {errors.telefono && (
                <span className="text-danger">{errors.telefono.message}</span>
              )}
            </Form.Group>

            {/* Servicio */}
            <Form.Group className="mb-3 inputsTamanio">
              <Form.Label>Servicio elegido*</Form.Label>
              <Form.Select
                {...register("tipoServicios", {
                  required: "Este campo es obligatorio",
                })}
              >
                <option value={""}>Seleccione una opción</option>
                <option value={"Consultas"}>Consultas</option>
                <option value={"Vacunas"}>Vacunas</option>
                <option value={"Cirugias"}>Cirugías</option>
                <option value={"Esterilización"}>Esterilización</option>
                <option value={"Análisis clínicos"}>Análisis clínicos</option>
                <option value={"Peluquería"}>Peluquería</option>
                <option value={"Estética"}>Estética</option>
              </Form.Select>
              {errors.tipoServicios && (
                <span className="text-danger">
                  {errors.tipoServicios.message}
                </span>
              )}
            </Form.Group>
          </div>

          {/* Descripcion  */}
          <Form.Group className="mb-3">
            <Form.Label>Descripción del motivo*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              style={{ resize: "none" }}
              placeholder="Describa brevemente el motivo de la consulta"
              {...register("descripcion", {
                required: "La descripción es obligatoria",
                minLength: {
                  value: 10,
                  message: "Debe tener como minimo 10 caracteres",
                },
                maxLength: {
                  value: 100,
                  message: "Debe tener como maximo 100 caracteres",
                },
              })}
            />
            {errors.descripcion && (
              <span className="text-danger">{errors.descripcion.message}</span>
            )}
          </Form.Group>

          {/* Horarios */}
          <Form.Group className="mb-3 border p-3 rounded">
            <Form.Label>
              <i class="bi bi-calendar2-week fs-5 me-2"></i>Fechas y horarios
              disponibles
            </Form.Label>

            <ToggleButtonGroup
              type="radio"
              name="horarios"
              value={horario}
              onChange={setHorario}
              className="d-flex flex-column flex-md-row gap-2"
            >
              <ToggleButton
                id="horario1"
                value="lunes 9:00 AM - 8:00 PM"
                variant="success"
              >
                Lunes 9:00 AM - 8:00 PM
              </ToggleButton>
              <ToggleButton
                id="horario2"
                value="miercoles 9:00 AM - 8:00 PM"
                variant="success"
              >
                Miercoles 9:00 AM - 8:00 PM
              </ToggleButton>
              <ToggleButton
                id="horario3"
                value="viernes 9:00 AM - 8:00 PM"
                variant="success"
              >
                Viernes 9:00 AM - 8:00 PM
              </ToggleButton>
            </ToggleButtonGroup>

            <Form.Text className="text-danger">
              Esto es un campo obligatorio!
            </Form.Text>
          </Form.Group>
          <Button variant="success" type="submit" className="d-flex mx-auto">
            Solicitar turno
          </Button>
        </Form>
      </article>
    </>
  );
};

export default FormularioTurnos;
