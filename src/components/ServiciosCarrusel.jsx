import { Carousel, Card, Button, Row, Col } from "react-bootstrap";
import vacunas from "../assets/vacunas.jpg";
import cirugia from "../assets/cirugia.jpg";
import ultrasonido from "../assets/ultrasonido.jpg";
import peluqueria from "../assets/peluqueria.jpg";

export const ServiciosCarrusel = ({ handlePedirTurno }) => {
  const servicios = [
    {
      img: vacunas,
      titulo: "Consultas y vacunación",
      texto:
        "Ofrecemos consultas médicas completas para cuidar la salud integral de tu mascota. Realizamos controles periódicos, evaluaciones generales, seguimiento de patologías y aplicación de vacunas según el calendario recomendado para prevenir enfermedades y garantizar una vida saludable.",
    },
  ];

  return (
     <article className="my-4 border border-2">
      <h1 className="text-center pt-4 pb-4 display-4 fw-semibold">
        Nuestros servicios
      </h1>

      <Carousel>
        {servicios.map((serv, idx) => (
          <Carousel.Item key={idx}>
            <Card className="servicioCard mx-auto mb-5 rounded-4">

              {/* Imagen + texto */}
              <div className="servicioContent">
                <Card.Img
                  loading="lazy"
                  src={serv.img}
                  alt="Imagen de servicios"
                  className="servicioImg"
                />

                <Card.Body className="servicioBody">
                  <Card.Title>{serv.titulo}</Card.Title>
                  <Card.Text>{serv.texto}</Card.Text>
                </Card.Body>
              </div>

              {/* Footer con el botón */}
              <Card.Footer className="servicioFooter bg-light">
                <div className="d-flex justify-content-center">
                  <Button
                    variant="success"
                    className="shadow"
                    onClick={handlePedirTurno}
                  >
                    Solicitar un Turno
                  </Button>
                </div>
              </Card.Footer>

            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </article>
  );
};
