import { Container, Row, Col, Card } from "react-bootstrap";
import Camila from "../assets/Camila.jpg";
import Maria from "../assets/Maria.jpg";
import Lucas from "../assets/Lucas.jpg";
import Valentina from "../assets/Valentina.jpg";

export const Opiniones = () => {
  const opiniones = [
    {
      img: "https://images.pexels.com/photos/27658222/pexels-photo-27658222.jpeg",
      nombre: "María López",
      texto:
        "Excelente atención y cuidado para mi perro. El equipo veterinario es muy profesional y amable. ¡Recomendado!",
    },
    {
      img: "https://images.pexels.com/photos/31987764/pexels-photo-31987764.jpeg",
      nombre: "Valentina Gómez",
      texto:
        "Muy contento con la atención que recibimos. Los profesionales son amables y se nota su experiencia. ¡Totalmente recomendable!",
    },
    {
      img: "https://images.pexels.com/photos/8217654/pexels-photo-8217654.jpeg",
      nombre: "Lucas Fernández",
      texto:
        "Servicio impecable y muy dedicado con mi mascota. El personal demuestra gran profesionalismo y cariño. ¡Lo recomiendo!",
    },
    {
      img: "https://images.pexels.com/photos/4600086/pexels-photo-4600086.jpeg",
      nombre: "Camila Rojas",
      texto:
        "Atención de primera para mi perrito. Todo el equipo es cordial y muy competente. ¡Sin dudas volveré!",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-center align-content-center">
        <h2 className="text-center my-4 display-4 ">
          Opiniones
          <span className="text-muted ms-2 fs-5 fw-normal">
             sobre nuestros servicios.
          </span>
        </h2>
      </div>
    <article className="opinion-hero pt-3 mb-3 shadow-lg">
      <Container>
        <div className="mb-3">
          <Row>
            {opiniones.map((op, idx) => (
              <Col key={idx} className="col-12 col-md-6 col-lg-3 mb-3">
                <Card className="h-100 opinion-card shadow-lg">
                  <Card.Img
                    variant="top"
                    src={op.img}
                    className="opinion-img"
                    loading="lazy"
                  />
                  <Card.Body>
                    <Card.Title className="text-center opinion-nombre">
                      {op.nombre}
                    </Card.Title>
                    <Card.Text className="opinion-texto">{op.texto}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </article>
    </>
  );
};
