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
    {
      img: cirugia,
      titulo: "Cirugías y esterilización",
      texto:
        "Contamos con un quirófano equipado para realizar cirugías seguras y profesionales. Llevamos a cabo esterilizaciones, extracciones de tumores, intervenciones de tejidos blandos y procedimientos menores, siempre con monitoreo constante y protocolos que priorizan el bienestar de tu animal.",
    },
    {
      img: ultrasonido,
      titulo: "Análisis clínicos y diagnóstico",
      texto:
        "Disponemos de estudios clínicos esenciales como análisis de sangre, orina, ecografías y radiografías. Estas pruebas permiten detectar enfermedades a tiempo, evaluar el estado interno del paciente y definir tratamientos precisos basados en diagnósticos confiables.",
    },
    {
      img: peluqueria,
      titulo: "Peluquería y estética animal",
      texto:
        "Mantenemos a tu mascota limpia, cómoda y con un estilo único. Ofrecemos baño, corte de pelo adaptado a la raza, deslanado, perfilado y recorte de uñas, utilizando productos seguros y técnicas pensadas para reducir el estrés y mejorar su bienestar general.",
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
            <Card className="d-flex justify-content-center mx-auto mb-5 cardTamanio rounded-4">
              <div className="carruselCard">
                <Card.Img
                  loading="lazy"
                  src={serv.img}
                  alt="Imagenes de servicios."
                  className="imgCarrusel"
                />
                <Card.Body>
                  <div>
                    <div>
                      <Card.Title>{serv.titulo}</Card.Title>
                    </div>
                    <div>
                      <Card.Text>{serv.texto}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </div>
              <Card.Footer>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="success"
                    className=" shadow"
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
