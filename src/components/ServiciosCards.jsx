import { Card, Container, Row, Col } from "react-bootstrap";
import vacunas from "../assets/vacunas.jpg";
import cirugia from "../assets/cirugia.jpg";
import ultrasonido from "../assets/ultrasonido.jpg";
import peluqueria from "../assets/peluqueria.jpg";

export const ServiciosCards = () => {
  const servicios = [
    {
      img: vacunas,
      titulo: "Consultas y vacunas",
      texto:
        "Brindamos atención médica integral para el cuidado de la salud de tu mascota, realizando revisiones periódicas, seguimiento general y aplicación de vacunas según su calendario correspondiente.",
    },
    {
      img: cirugia,
      titulo: "Cirugías y esterilización",
      texto:
        "Realizamos procedimientos quirúrgicos con altos estándares de seguridad, incluyendo castraciones, extracción de tumores e intervenciones menores, siempre con control profesional.",
    },
    {
      img: ultrasonido,
      titulo: "Análisis clínicos",
      texto:
        "Ofrecemos estudios clínicos completos, como análisis de sangre, orina y radiografías, que permiten detectar a tiempo enfermedades y establecer tratamientos adecuados para la salud del animal.",
    },
    {
      img: peluqueria,
      titulo: "Peluquería y estética",
      texto:
        "Cuidamos la higiene y apariencia de tu mascota con servicios de baño, corte de pelo personalizado y recorte de uñas, asegurando comodidad, limpieza y bienestar en cada visita realizada.",
    },
  ];

  return (
    <>
      <Container className="my-5">
        <div className=" text-center">
          <h2 className=" display-5">Nuestros Servicios</h2>
          <p>
            “Nuestro equipo está preparado para ofrecer soluciones <b>médicas</b>, <b>estéticas</b> y <b>preventivas</b> pensadas para la <b>salud y el bienestar</b> integral de tu mascota.”
          </p>
        </div>
        <Row className="g-4">
          {servicios.map((servicio) => (
            <Col key={servicio.id} xs={12} md={4} lg={3}>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src={servicio.img}
                  loading="lazy"
                  className="Servicios-Img"
                />
                <Card.Body>
                  <Card.Title>
                    <span className=" text-muted">
                      Servicio de:
                    </span> <br /> {servicio.titulo}
                  </Card.Title>
                  <Card.Text className="">{servicio.texto}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
