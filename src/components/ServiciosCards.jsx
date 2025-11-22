import { Card, Container, Row, Col, Button } from "react-bootstrap";
import vacunas from "../assets/vacunas.jpg";
import cirugia from "../assets/cirugia.jpg";
import ultrasonido from "../assets/ultrasonido.jpg";
import peluqueria from "../assets/peluqueria.jpg";
import { useNavigate } from "react-router";

export const ServiciosCards = () => {
  const servicios = [
    {
      img: "",
      titulo: "Consultas y vacunas",
      texto:
        "Brindamos atención médica integral para el cuidado de la salud de tu mascota, realizando revisiones periódicas, seguimiento general y aplicación de vacunas según su calendario correspondiente.",
    },
    {
      img: "",
      titulo: "Cirugías y esterilización",
      texto:
        "Realizamos procedimientos quirúrgicos con altos estándares de seguridad, incluyendo castraciones, extracción de tumores e intervenciones menores, siempre con control profesional.",
    },
    {
      img: "",
      titulo: "Análisis clínicos",
      texto:
        "Ofrecemos estudios clínicos completos, como análisis de sangre, orina y radiografías, que permiten detectar a tiempo enfermedades y establecer tratamientos adecuados para la salud del animal.",
    },
    {
      img: "",
      titulo: "Peluquería y estética",
      texto:
        "Cuidamos la higiene y apariencia de tu mascota con servicios de baño, corte de pelo personalizado y recorte de uñas, asegurando comodidad, limpieza y bienestar en cada visita realizada.",
    },
  ];

  const navegacion = useNavigate();
  const PedirTurno = () => {
    navegacion("/admin/crear");
  };

  return (
    <>
      <Container className="my-5 servicios-container">
        {/* Título */}
        <div className="text-center servicios-titulo">
          <h2 className="display-5">Nuestros Servicios</h2>
          <p>
            “Nuestro equipo está preparado para ofrecer soluciones{" "}
            <b>médicas</b>, <b>estéticas</b> y <b>preventivas</b> pensadas para
            la <b>salud y el bienestar</b> integral de tu mascota.”
          </p>
        </div>

        {/* Cards */}
        <Row className="g-4 d-flex justify-content-center align-content-center">
          {servicios.map((servicio) => (
            <Col key={servicio.id} xs={12} md={4} lg={3}>
              <Card className="servicio-card shadow-lg">
                <Card.Img
                  variant="top"
                  src={servicio.img}
                  loading="lazy"
                  className="servicio-img"
                />
                <Card.Body>
                  <Card.Title className="servicio-titulo">
                    <span className="text-muted">Servicio de:</span> <br />
                    {servicio.titulo}
                  </Card.Title>
                  <Card.Text className="servicio-texto">
                    {servicio.texto}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {/* Botón */}
          <div className="d-flex justify-content-center align-content-center">
            <Button
              variant=""
              className="boton-turno mx-2 boton-turno"
              onClick={PedirTurno}
            >
              Solicitar Turno
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};
