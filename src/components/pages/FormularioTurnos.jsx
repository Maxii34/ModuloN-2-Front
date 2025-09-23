import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToggleButtonGroup, ToggleButton, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import TurnoMascota from "../../createClass";
import Swal from "sweetalert2";

const FormularioTurnos = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [horario, setHorario] = useState("");
  const [turnos, setTurnos] = useState(
    () => JSON.parse(localStorage.getItem("turnos")) || []
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm();


  // campos a vigilar
  const nombreMascota = watch("nombreMascota");
  const tipoMascota = watch("tipoMascota");
  const tipoServicios = watch("tipoServicios");
  const descripcion = watch("descripcion");

  //  si todos los campos tienen valor y no hay errores, mostramos los horarios
  const mostrarHorarios =
    nombreMascota &&
    tipoMascota &&
    tipoServicios &&
    descripcion &&
    !errors.nombreMascota &&
    !errors.tipoMascota &&
    !errors.tipoServicios &&
    !errors.descripcion;


  const usuarioLogueado = JSON.parse(
    localStorage.getItem("usuarioActivo") || "{}"
  );
  const esAdmin = usuarioLogueado.tipo === "admin";

  useEffect(() => {
    if (id) {
      const turnoAEditar = turnos.find((t) => t.id === id);
      if (turnoAEditar) {
        setValue("nombreMascota", turnoAEditar.nombreMascota);
        setValue("tipoMascota", turnoAEditar.tipoMascota);
        setValue("tipoServicios", turnoAEditar.servicio);
        setValue("descripcion", turnoAEditar.descripcion);
        setValue("horarios", turnoAEditar.fecha);
        setHorario(turnoAEditar.fecha);
        if (turnoAEditar.nombreDueño)
          setValue("nombreDueno", turnoAEditar.nombreDueño);
        if (turnoAEditar.correoDueño)
          setValue("correoDueno", turnoAEditar.correoDueño);
      }
    }
  }, [id, turnos, setValue]);

  const onSubmit = (data) => {
    const nombreDueño = esAdmin
      ? data.nombreDueno
      : usuarioLogueado.nombre || usuarioLogueado.nombreCompleto || "";
    const correoDueño = esAdmin
      ? data.correoDueno
      : usuarioLogueado.email || "";

    if (id) {
      // Editar turno existente
      const turnosActualizados = turnos.map((t) =>
        t.id === id
          ? {
              ...t,
              nombreMascota: data.nombreMascota,
              tipoMascota: data.tipoMascota,
              servicio: data.tipoServicios,
              descripcion: data.descripcion,
              fecha: data.horarios,
              nombreDueño,
              correoDueño,
            }
          : t
      );
      setTurnos(turnosActualizados);
      localStorage.setItem("turnos", JSON.stringify(turnosActualizados));
      Swal.fire({
        icon: "success",
        title: "¡Turno actualizado!",
        text: "El turno se actualizó correctamente.",
      });
    } else {
      // Crear nuevo turno
      const nuevoTurno = new TurnoMascota(
        data.nombreMascota,
        data.tipoMascota,
        data.tipoServicios,
        data.descripcion,
        data.horarios,
        nombreDueño,
        correoDueño,
        crypto.randomUUID(),
        "Pendiente"
      );
      const turnosActualizados = [...turnos, nuevoTurno];
      setTurnos(turnosActualizados);
      localStorage.setItem("turnos", JSON.stringify(turnosActualizados));
      Swal.fire({
        icon: "success",
        title: "¡Turno solicitado!",
        text: "Tu turno se registró correctamente y está Pendiente de confirmación.",
      });
      reset();
      setHorario("");
    }

    navigate("/admin"); // volver a la tabla
  };

  return (
    <>
      <h2 className="text-center my-3">
        {id ? "Editar Turno" : "Solicitar Turno"}
      </h2>
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

          {esAdmin && (
            <>
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
                  <span className="text-danger">
                    {errors.nombreDueno.message}
                  </span>
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
                  <span className="text-danger">
                    {errors.correoDueno.message}
                  </span>
                )}
              </Form.Group>
            </>
          )}

          {!esAdmin && (
            <>
              <input
                type="hidden"
                value={usuarioLogueado.nombre || usuarioLogueado.nombreCompleto}
                {...register("nombreDueno")}
              />
              <input
                type="hidden"
                value={usuarioLogueado.email}
                {...register("correoDueno")}
              />
            </>
          )}

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

          {mostrarHorarios && (
            <Form.Group className="mb-4 border p-3 rounded">
              <Form.Label>Fechas y horarios disponibles</Form.Label>
              <input
                type="hidden"
                value={horario}
                {...register("horarios", {
                  required: "Seleccionar un horario es obligatorio",
                })}
              />
              <ToggleButtonGroup
                type="radio"
                name="horarios"
                value={horario}
                onChange={(val) => {
                  setHorario(val);
                  setValue("horarios", val, { shouldValidate: true });
                }}
                className="d-flex flex-column flex-md-row gap-2"
              >
                <ToggleButton
                  id="horario1"
                  value="Lunes 9:00 AM - 8:00 PM"
                  variant="success"
                >
                  Lunes 9:00 AM - 8:00 PM
                </ToggleButton>
                <ToggleButton
                  id="horario2"
                  value="Miércoles 9:00 AM - 8:00 PM"
                  variant="success"
                >
                  Miércoles 9:00 AM - 8:00 PM
                </ToggleButton>
                <ToggleButton
                  id="horario3"
                  value="Viernes 9:00 AM - 8:00 PM"
                  variant="success"
                >
                  Viernes 9:00 AM - 8:00 PM
                </ToggleButton>
              </ToggleButtonGroup>
              {errors.horarios && (
                <Form.Text className="text-danger">
                  {errors.horarios.message}
                </Form.Text>
              )}
            </Form.Group>
          )}

          <Button variant="success" type="submit" className="d-flex mx-auto">
            {id ? "Actualizar turno" : "Solicitar turno"}
          </Button>
        </Form>
      </article>
    </>
  );
};

export default FormularioTurnos;
