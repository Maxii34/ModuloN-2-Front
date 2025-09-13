import ImagenPagInicio from "../assets/ImagenPagInicio.png";
import { Link } from "react-router";
import vacunas from "../assets/vacunas.jpg";
import cirugia from "../assets/cirugia.jpg";
import ultrasonido from "../assets/ultrasonido.jpg";
import peluqueria from "../assets/peluqueria.jpg";
import vaca1 from "../assets/vaca1.jpg";
import vaca2 from "../assets/vaca2.jpg";
import { Carousel, Button, Card, Container, Row, Col } from "react-bootstrap";

const Inicio = () => {
  return (
    <>
      <section>
        {/* imagen del principio */}
        <article className="mb-5">
          <img
            src={ImagenPagInicio}
            alt="Imagen de la página de inicio"
            className="imgInicio"
          />
        </article>
        {/* carrusel de servicios */}
        <article className="my-3">
          <h1 className="text-center">Nuestros servicios</h1>
          <Carousel>
            {/* Card 1 */}
            <Carousel.Item>
              <Card className=" d-flex justify-content-center mx-auto mb-5 cardTamanio ">
                <div className="carruselCard">
                  <div>
                    <Card.Img
                      variant="top"
                      src={vacunas}
                      className="imgCarrusel"
                    />
                  </div>
                  <div>
                    <Card.Body>
                      <Card.Title>Consultas y vacunas</Card.Title>
                      <Card.Text>
                        "Brindamos atención médica integral para el cuidado de
                        la salud de tu mascota, realizando revisiones
                        periódicas, seguimiento general y aplicación de vacunas
                        según su calendario correspondiente."
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <Button variant="success" as={Link} to={"/crear"}>
                      Pedir turno
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Carousel.Item>
            {/* Card 2 */}
            <Carousel.Item>
              <Card className=" d-flex justify-content-center mx-auto mb-5 cardTamanio ">
                <div className="carruselCard">
                  <div>
                    <Card.Img
                      variant="top"
                      src={cirugia}
                      className="imgCarrusel"
                    />
                  </div>
                  <div>
                    <Card.Body>
                      <Card.Title>Cirugías y esterilización</Card.Title>
                      <Card.Text>
                        "Realizamos procedimientos quirúrgicos con altos
                        estándares de seguridad, incluyendo castraciones,
                        extracción de tumores e intervenciones menores, siempre
                        con control profesional"
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <Button variant="success" as={Link} to={"/crear"}>
                      Pedir turno
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Carousel.Item>
            {/* Card 3 */}
            <Carousel.Item>
              <Card className=" d-flex justify-content-center mx-auto mb-5 cardTamanio ">
                <div className="carruselCard">
                  <div>
                    <Card.Img
                      variant="top"
                      src={ultrasonido}
                      className="imgCarrusel"
                    />
                  </div>
                  <div>
                    <Card.Body>
                      <Card.Title>Análisis clínicos</Card.Title>
                      <Card.Text>
                        "Ofrecemos estudios clínicos completos, como análisis de
                        sangre, orina y radiografías, que permiten detectar a
                        tiempo enfermedades y establecer tratamientos adecuados
                        para la salud del animal."
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <Button variant="success" as={Link} to={"/crear"}>
                      Pedir turno
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Carousel.Item>
            {/* Card 4 */}
            <Carousel.Item>
              <Card className=" d-flex justify-content-center mx-auto mb-5 cardTamanio ">
                <div className="carruselCard">
                  <div>
                    <Card.Img
                      variant="top"
                      src={peluqueria}
                      className="imgCarrusel"
                    />
                  </div>
                  <div>
                    <Card.Body>
                      <Card.Title>Peluquería y estética</Card.Title>
                      <Card.Text>
                        "Cuidamos la higiene y apariencia de tu mascota con
                        servicios de baño, corte de pelo personalizado y recorte
                        de uñas, asegurando comodidad, limpieza y bienestar en
                        cada visita realizada."
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <Button variant="success" as={Link} to={"/crear"}>
                      Pedir turno
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Carousel.Item>
          </Carousel>
        </article>
        {/* Opiniones */}
        <article>
          <h2 className="text-center">Opiniones</h2>
        </article>
      </section>
    </>
  );
};

export default Inicio;
