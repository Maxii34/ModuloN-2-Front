import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";


export const ServiciosCards = ({ usuarioLogueado, openModal }) => {
const servicios = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1350591/pexels-photo-1350591.jpeg",
    titulo: "Consultas y vacunas",
    texto:
      "Brindamos atención médica integral para el cuidado de la salud de tu mascota, realizando revisiones periódicas, seguimiento general y aplicación de vacunas según su calendario correspondiente.",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/7121992/pexels-photo-7121992.jpeg",
    titulo: "Cirugías y esterilización",
    texto:
      "Realizamos procedimientos quirúrgicos con altos estándares de seguridad, incluyendo castraciones, extracción de tumores e intervenciones menores, siempre con control profesional.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/6816869/pexels-photo-6816869.jpeg",
    titulo: "Análisis clínicos",
    texto:
      "Ofrecemos estudios clínicos completos, como análisis de sangre, orina y radiografías, que permiten detectar a tiempo enfermedades y establecer tratamientos adecuados para la salud del animal.",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/19145878/pexels-photo-19145878.jpeg",
    titulo: "Peluquería y estética",
    texto:
      "Cuidamos la higiene y apariencia de tu mascota con servicios de baño, corte de pelo personalizado y recorte de uñas, asegurando comodidad, limpieza y bienestar en cada visita realizada.",
  },
];

  const navegacion = useNavigate();

const PedirTurno = () => {
  if (!usuarioLogueado || !usuarioLogueado.token) {
    Swal.fire({
      title: "¡Necesitas Iniciar Sesión!",
      html: `
        Para poder solicitar un turno, debes estar <b>logueado</b> en nuestra plataforma.<br><br>
        Si ya tienes una cuenta, <b>inicia sesión</b>.<br>
        Si aún no la tienes, ¡te invitamos a <b>registrarte</b>!
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#28a745",
      confirmButtonText: '<i class="fas fa-sign-in-alt"></i> Iniciar Sesión',
      cancelButtonText: '<i class="fas fa-user-plus"></i> Registrarme',
      reverseButtons: true,
      focusCancel: true,
    }).then((result) => {

      if (result.isConfirmed) {
        openModal();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        navegacion("/registro");
      }
    });
    return;
  }
  // Si ya está logueado
  navegacion("/usuario/crear");
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
