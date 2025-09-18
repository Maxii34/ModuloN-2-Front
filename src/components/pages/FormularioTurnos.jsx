import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { useForm } from "react-hook-form";
import TurnoMascota from "../../createClass";

const FormularioTurnos = () => {
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();

  const [horario, setHorario] = useState("");
  const [turnos, setTurnos] = useState(() => JSON.parse(localStorage.getItem("turnos")) || []);

  useEffect(() => {
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }, [turnos]);

  const onSubmit = (data) => {
    const nuevoTurno = new TurnoMascota(
      data.nombreMascota,
      data.tipoMascota,
      data.tipoServicios,
      data.descripcion,
      data.horarios,
      "",
      "Pendiente"
    );

    setTurnos(tareas => [...tareas, nuevoTurno]);
    reset();
    setHorario("");
  };

  return (
    <>
      <h2 className="text-center my-3">Solicitar Turnos</h2>
      <article className="container my-3">
        <Form onSubmit={handleSubmit(onSubmit)} className="border p-3 rounded shadow mb-5">
          <p className="text-center"><b>Ingrese los siguientes datos para poder solicitar el turno para tu mascota</b></p>

          <Form.Group className="mb-3">
            <Form.Label>Nombre de la mascota*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Morito"
              {...register("nombreMascota", {
                required: "El nombre de la mascota es obligatorio.",
                minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres." },
                maxLength: { value: 50, message: "El nombre no puede superar los 50 caracteres." },
              })}
            />
            {errors.nombreMascota && <span className="text-danger">{errors.nombreMascota.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tipo de mascota*</Form.Label>
            <Form.Select {...register("tipoMascota", { required: "Este campo es obligatorio" })}>
              <option value="">Seleccione una opción</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Aves">Aves</option>
              <option value="Conejos">Conejos</option>
              <option value="Tortuga">Tortuga</option>
            </Form.Select>
            {errors.tipoMascota && <span className="text-danger">{errors.tipoMascota.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Servicio elegido*</Form.Label>
            <Form.Select {...register("tipoServicios", { required: "Este campo es obligatorio" })}>
              <option value="">Seleccione una opción</option>
              <option value="Consultas">Consultas</option>
              <option value="Vacunas">Vacunas</option>
              <option value="Cirugias">Cirugías</option>
              <option value="Esterilización">Esterilización</option>
              <option value="Análisis clínicos">Análisis clínicos</option>
              <option value="Peluquería">Peluquería</option>
              <option value="Estética">Estética</option>
            </Form.Select>
            {errors.tipoServicios && <span className="text-danger">{errors.tipoServicios.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción del motivo*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              style={{ resize: "none" }}
              placeholder="Describa brevemente el motivo de la consulta"
              {...register("descripcion", {
                required: "La descripción es obligatoria",
                minLength: { value: 10, message: "Debe tener al menos 10 caracteres" },
                maxLength: { value: 100, message: "Máximo 100 caracteres" },
              })}
            />
            {errors.descripcion && <span className="text-danger">{errors.descripcion.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3 border p-3 rounded">
            <Form.Label>Fechas y horarios disponibles</Form.Label>
            <input type="hidden" value={horario} {...register("horarios", { required: "Seleccionar un horario es obligatorio" })} />
            <ToggleButtonGroup
              type="radio"
              name="horarios"
              value={horario}
              onChange={(val) => { setHorario(val); setValue("horarios", val, { shouldValidate: true }); }}
              className="d-flex flex-column flex-md-row gap-2"
            >
              <ToggleButton id="horario1" value="Lunes 9:00 AM - 8:00 PM" variant="success">Lunes 9:00 AM - 8:00 PM</ToggleButton>
              <ToggleButton id="horario2" value="Miércoles 9:00 AM - 8:00 PM" variant="success">Miércoles 9:00 AM - 8:00 PM</ToggleButton>
              <ToggleButton id="horario3" value="Viernes 9:00 AM - 8:00 PM" variant="success">Viernes 9:00 AM - 8:00 PM</ToggleButton>
            </ToggleButtonGroup>
            {errors.horarios && <Form.Text className="text-danger">{errors.horarios.message}</Form.Text>}
          </Form.Group>

          <Button variant="success" type="submit" className="d-flex mx-auto">Solicitar turno</Button>
        </Form>
      </article>
    </>
  );
};


export default FormularioTurnos;
