import { Container, Row, Col, Card } from "react-bootstrap";
import Camila from "../assets/Camila.jpg";
import Maria from "../assets/Maria.jpg";
import Lucas from "../assets/Lucas.jpg";
import Valentina from "../assets/Valentina.jpg";

Maria
const Opiniones = () => {
  const opiniones = [
    {
      img: Maria,
      nombre: "María López",
      texto: "Excelente atención y cuidado para mi perro. El equipo veterinario es muy profesional y amable. ¡Recomendado!",
    },
    {
      img: Valentina,
      nombre: "Valentina Gómez",
      texto: "Muy contento con la atención que recibimos. Los profesionales son amables y se nota su experiencia. ¡Totalmente recomendable!",
    },
    {
      img: Lucas,
      nombre: "Lucas Fernández",
      texto: "Servicio impecable y muy dedicado con mi mascota. El personal demuestra gran profesionalismo y cariño. ¡Lo recomiendo!",
    },
    {
      img: Camila,
      nombre: "Camila Rojas",
      texto: "Atención de primera para mi perrito. Todo el equipo es cordial y muy competente. ¡Sin dudas volveré!",
    },
  ];

  return (
    <article>
      <h2 className="text-center">Opiniones</h2>
      <div className="mb-5">
        <Container>
          <Row>
            {opiniones.map((op, idx) => (
              <Col key={idx} className="col-12 col-md-6 col-lg-3 mb-3">
                <Card className="h-100">
                  <Card.Img variant="top" src={op.img} className="opinionImg" loading="lazy" />
                  <Card.Body>
                    <Card.Title className="text-center">{op.nombre}</Card.Title>
                    <Card.Text>{op.texto}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </article>
  );
};

export default Opiniones;
