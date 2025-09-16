import ImagenPagInicio from "../assets/ImagenPagInicio.png";
import { Link } from "react-router";
import vacunas from "../assets/vacunas.jpg";
import cirugia from "../assets/cirugia.jpg";
import ultrasonido from "../assets/ultrasonido.jpg";
import peluqueria from "../assets/peluqueria.jpg";
import Camila from "../assets/Camila.jpg";
import Maria from "../assets/Maria.jpg";
import Lucas from "../assets/Lucas.jpg";
import Valentina from "../assets/Valentina.jpg";import { Carousel, Button, Card, Container, Row, Col } from "react-bootstrap";

const Inicio = () => {
  return (
    <>
      <section>
        {/* imagen del principio */}
        <article className="mb-5">
          <img
          loading="lazy"
            src={ImagenPagInicio}
            alt="Imagen de la página de inicio"
            className="imgInicio"
          />
        </article>
        {/* Sobre Dog-Tor */}
        <article>
          <Card className="mx-5">
            <Card.Header>
              <Card.Title>
                A cerca de <strong>Dog-Tor</strong>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <b>Dog-Tor</b> es una clínica veterinaria comprometida con la
              salud y bienestar de tu mascota. Brindamos atención integral, que
              incluye consultas preventivas, vacunación, cirugías menores,
              diagnóstico clínico y servicios de higiene y estética. Nuestro
              equipo de profesionales
              <b>
                —Robledo Garrido Santiago Andrés, Joaquín Albornoz Bresla,
                Maximiliano Ordoñez y Paula Gramajo—
              </b>
              combina experiencia y dedicación para asegurar que cada animal
              reciba cuidados personalizados y seguros. En Dog-Tor, trabajamos
              para que tu compañero peludo esté sano, feliz y acompañado en cada
              etapa de su vida.
            </Card.Body>
            <Card.Footer>
              <Card.Text>
                Horarios de atención: <b>Lunes, Miercoles y Viernes: 9:00 AM – 8:00 PM</b>
              </Card.Text>
            </Card.Footer>
          </Card>
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
          <div className="mb-5">
            <Container>
              <Row>
                <Col className="col-12 col-md-6 col-lg-3 mb-3">
                  <Card className="h-100 ">
                    <Card.Img variant="top" src={Maria} className="opinionImg" loading="lazy"/>
                    <Card.Body>
                      <Card.Title className="text-center">
                        María López
                      </Card.Title>
                      <Card.Text>
                        "Excelente atención y cuidado para mi perro. El equipo
                        veterinario es muy profesional y amable. ¡Recomendado!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="col-12 col-md-6 col-lg-3 mb-3">
                  <Card className="h-100">
                    <Card.Img variant="top" src={Valentina} className="opinionImg" loading="lazy"/>
                    <Card.Body>
                      <Card.Title className="text-center">
                        Valentina Gómez
                      </Card.Title>
                      <Card.Text>
                        "Muy contento con la atención que recibimos. Los
                        profesionales son amables y se nota su experiencia.
                        ¡Totalmente recomendable!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="col-12 col-md-6 col-lg-3 mb-3">
                  <Card className="h-100">
                    <Card.Img variant="top" src={Lucas} className="opinionImg" loading="lazy"/>
                    <Card.Body>
                      <Card.Title className="text-center">
                        Lucas Fernández
                      </Card.Title>
                      <Card.Text>
                        "Servicio impecable y muy dedicado con mi mascota. El
                        personal demuestra gran profesionalismo y cariño. ¡Lo
                        recomiendo!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="col-12 col-md-6 col-lg-3 mb-3">
                  <Card className="h-100">
                    <Card.Img variant="top" src={Camila} className="opinionImg" loading="lazy"/>
                    <Card.Body>
                      <Card.Title className="text-center">
                        Camila Rojas
                      </Card.Title>
                      <Card.Text>
                        "Atención de primera para mi perrito. Todo el equipo es
                        cordial y muy competente. ¡Sin dudas volveré!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </article>
      </section>
    </>
  );
};

export default Inicio;
