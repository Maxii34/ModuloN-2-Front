import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const FormularioTurnos = () => {
  const [horario, setHorario] = useState("");

  return (
    <>
      <h2 className="text-center my-3">Solicitar Turnos</h2>
      <article className="container my-3">
        <Form className="border p-3 rounded shadow ">
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
              <Form.Control type="text" placeholder="Ej: Juan Perez" />
              <Form.Text className="text-danger">
                Esto es un campo obligatorio!
              </Form.Text>
            </Form.Group>
            {/* nombre de la mascota */}
            <Form.Group className="mb-3 inputsTamanio">
              <Form.Label>Nombre de la mascota*</Form.Label>
              <Form.Control type="text" placeholder="Ej: Morito" />
              <Form.Text className="text-danger">
                Esto es un campo obligatorio!
              </Form.Text>
            </Form.Group>
            </div>
            <div className="formulario-turnos">
            {/* email */}
            <Form.Group className="mb-3 inputsTamanio">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: juanperez@gmail.com"
              />
              <Form.Text className="text-danger">
                Esto es un campo obligatorio!
              </Form.Text>
            </Form.Group>
            {/* tipo de mascota */}
            <Form.Group className="mb-3 inputsTamanio">
              <Form.Label>Tipo de mascota*</Form.Label>
              <Form.Select>
                <option value={""}>Seleccione una opción</option>
                <option>Perro</option>
                <option>Gato</option>
              </Form.Select>
              <Form.Text className="text-danger">
                Esto es un campo obligatorio!
              </Form.Text>
            </Form.Group>
            </div>
            <div className="formulario-turnos">
            {/* Telefono */}
            <Form.Group className="mb-3 inputsTamanio">
              <Form.Label>Télefono*</Form.Label>
              <Form.Control type="number" placeholder="Ej: 381 - 5552464" />
              <Form.Text className="text-danger">
                Esto es un campo obligatorio!
              </Form.Text>
            </Form.Group>
            {/* Servicio */}
            <Form.Group className="mb-3 inputsTamanio">
              <Form.Label>Servicio elegido*</Form.Label>
              <Form.Select>
                <option value={""}>Seleccione una opción</option>
                <option>Consultas y vacunas</option>
                <option>Cirugías y esterilización</option>
                <option>Análisis clínicos</option>
                <option>Peluquería y estética</option>
              </Form.Select>
              <Form.Text className="text-danger">
                Esto es un campo obligatorio!
              </Form.Text>
            </Form.Group>
            </div>
            {/* Descripcion  */}
            <Form.Group className="mb-3">
              <Form.Label>Descripción del motivo*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Describa brevemente el motivo de la consulta"
                style={{ resize: "none" }}
              />
              <Form.Text className="text-danger">
                Esto es un campo obligatorio!
              </Form.Text>
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
