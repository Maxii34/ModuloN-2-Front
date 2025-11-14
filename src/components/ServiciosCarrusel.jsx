import { Carousel, Card, Button } from "react-bootstrap";
import vacunas from "../assets/vacunas.jpg";
import cirugia from "../assets/cirugia.jpg";
import ultrasonido from "../assets/ultrasonido.jpg";
import peluqueria from "../assets/peluqueria.jpg";

export const ServiciosCarrusel = ({ handlePedirTurno }) => {
  const servicios = [
    {
      img: vacunas,
      titulo: "Consultas y vacunas",
      texto: "Brindamos atención médica integral para el cuidado de la salud de tu mascota, realizando revisiones periódicas, seguimiento general y aplicación de vacunas según su calendario correspondiente.",
    },
    {
      img: cirugia,
      titulo: "Cirugías y esterilización",
      texto: "Realizamos procedimientos quirúrgicos con altos estándares de seguridad, incluyendo castraciones, extracción de tumores e intervenciones menores, siempre con control profesional.",
    },
    {
      img: ultrasonido,
      titulo: "Análisis clínicos",
      texto: "Ofrecemos estudios clínicos completos, como análisis de sangre, orina y radiografías, que permiten detectar a tiempo enfermedades y establecer tratamientos adecuados para la salud del animal.",
    },
    {
      img: peluqueria,
      titulo: "Peluquería y estética",
      texto: "Cuidamos la higiene y apariencia de tu mascota con servicios de baño, corte de pelo personalizado y recorte de uñas, asegurando comodidad, limpieza y bienestar en cada visita realizada.",
    },
  ];

  return (
    <article className="my-4 border border-2">
      <h1 className="text-center pt-4 pb-4 display-4 fw-semibold">Nuestros servicios</h1>
      <Carousel>
        {servicios.map((serv, idx) => (
          <Carousel.Item key={idx}>
            <Card className="d-flex justify-content-center mx-auto mb-5 cardTamanio">
              <div className="carruselCard">
                <Card.Img loading="lazy" variant="top" src={serv.img} className="imgCarrusel" />
                <Card.Body>
                  <Card.Title>{serv.titulo}</Card.Title>
                  <Card.Text>{serv.texto}</Card.Text>
                </Card.Body>
              </div>
              <Card.Footer>
                <div className="d-flex justify-content-center">
                  <Button variant="success" className=" shadow" onClick={handlePedirTurno}>
                    Pedir turno
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


