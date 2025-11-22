import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  crearTurno,
  editarTurnos,
  obtenerTurnoPorId,
} from "../helpers/queries";
import { useDatosTurnos } from "../context/CargarContex";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

export const FormularioTurnos = ({ titulo }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();

  const { cargarDatos, setTurnoSolicitado, actualizarTurno } = useDatosTurnos();

  const navegacion = useNavigate();

  const cancelarEdicion = () => {
    navegacion("/");
  };

  useEffect(() => {
    buscarTurnosPorId();
  }, [id]);

  const buscarTurnosPorId = async () => {
    if (titulo === "Editar turno") {
      const respuesta = await obtenerTurnoPorId(id);
      if (respuesta && respuesta.status === 200) {
        const datoTurno = await respuesta.json();
        setValue("nombreDueno", datoTurno.nombreDueno);
        setValue("email", datoTurno.email);
        setValue("nombreMascota", datoTurno.nombreMascota);
        setValue("tipoMascota", datoTurno.tipoMascota);
        setValue("tipoServicios", datoTurno.tipoServicios);
        setValue("descripcion", datoTurno.descripcion);
        setValue("fecha", datoTurno.fecha ? datoTurno.fecha.split("T")[0] : "");
        setValue("horario", datoTurno.horario);
      }
    }
  };

  const onSubmit = async (data) => {
    if (titulo === "Solicitar un turno") {
      const respuesta = await crearTurno(data);
      if (respuesta && respuesta.status === 201) {
        setTurnoSolicitado(respuesta.data.turno);
        Swal.fire({
          title: "Turno creado",
          text: `El turno para ${data.nombreMascota} se creó correctamente`,
          icon: "success",
          timer: 2500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
        cargarDatos();
        reset();
        navegacion("/");
      } 
      //Captura el error de turno po si esta ocupado
      else if (respuesta && (respuesta.status === 400 || respuesta.status === 409)) {
        Swal.fire({
          title: "Turno no disponible",
          text: respuesta.data.message || "Este horario ya está ocupado. Por favor elige otro.",
          icon: "warning",
          showConfirmButton: true,
          confirmButtonText: "Entendido"
        });
      }
      else {
        Swal.fire({
          title: "Error",
          text: "No se pudo crear el turno",
          icon: "error",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true
        });
      }
    } else {
      // Lógica para editar el turno.
      const respuesta = await editarTurnos(id, data);
      if (respuesta && respuesta.status === 200) {
        Swal.fire({
          title: "Turno editado",
          text: `El turno para ${data.nombreMascota} se editó correctamente`,
          icon: "success",
          timer: 2500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
        await actualizarTurno(id);
        navegacion("/");
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `No se pudo editar el turno, intente nuevamente.`,
          icon: "error",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true
        });
      }
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
          <Row>
            <Col md={6}>
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
                    maxLength: { value: 25, message: "Máximo 25 caracteres" },
                  })}
                />
                {errors.nombreDueno && (
                  <span className="text-danger">
                    {errors.nombreDueno.message}
                  </span>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email del dueño*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ej: juanperez@gmail.com"
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Formato de email inválido",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </Form.Group>
            </Col>
          </Row>

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
                    maxLength: { value: 25, message: "Máximo 25 caracteres" },
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
                  <option value="Tortugas">Tortugas</option>
                  <option value="Otros">Otros</option>
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
                  <option value="Cirugías">Cirugías</option>
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
                    maxLength: { value: 200, message: "Máximo 200 caracteres" },
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

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Fecha del turno*</Form.Label>
                <Form.Control
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  {...register("fecha", {
                    required: "La fecha es obligatoria",
                    validate: (value) => {
                      const hoy = new Date().toISOString().split("T")[0];
                      return (
                        value >= hoy || "La fecha debe ser hoy o en el futuro"
                      );
                    },
                  })}
                />
                {errors.fecha && (
                  <span className="text-danger">{errors.fecha.message}</span>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Horario*</Form.Label>
                <Form.Select
                  {...register("horario", {
                    required: "Debe seleccionar un horario",
                  })}
                >
                  <option value="">Seleccione un horario</option>
                  <optgroup label="Turno Mañana">
                    <option value="09:00">09:00</option>
                    <option value="09:30">09:30</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                  </optgroup>
                  <optgroup label="Turno Tarde">
                    <option value="17:00">17:00</option>
                    <option value="17:30">17:30</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                    <option value="22:30">22:30</option>
                  </optgroup>
                </Form.Select>
                {errors.horario && (
                  <span className="text-danger">{errors.horario.message}</span>
                )}
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-center">
            {titulo === "Solicitar un turno" ? (
              <Button
                variant="success"
                type="submit"
                className="d-flex mx-auto"
              >
                Solicitar el turno
              </Button>
            ) : (
              <div className="d-flex gap-1 mt-3">
                <Button
                  variant="success"
                  type="submit"
                  className="d-flex mx-auto shadow-lg"
                >
                  Guardar cambios
                </Button>
                <Button
                  variant="danger"
                  type="button"
                  className="d-flex mx-auto shadow-lg"
                  onClick={cancelarEdicion}
                >
                  Cancelar edición
                </Button>
              </div>
            )}
          </div>
        </Form>
      </article>
    </>
  );
};
