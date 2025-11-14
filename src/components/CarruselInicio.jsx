import { Carousel } from "react-bootstrap";
import imagen1p from "../assets/imagen1p.png";
import imagen2p from "../assets/imagen2p.png";
import imagen3p from "../assets/imagen3p.png";
import imagen4p from "../assets/imagen4p.png";

export const CarruselInicio = () => {
  return (
    <Carousel className="mb-3 shadow">
      <Carousel.Item interval={7000}>
        <img loading="eager" className="imagen-Carousel" src={imagen1p} alt="primera imagen del carrusel" />
      </Carousel.Item>

      <Carousel.Item interval={7000}>
        <img loading="eager" className="imagen-Carousel" src={imagen2p} alt="segunda imagen del carrusel" />
        <Carousel.Caption className="captionInicio">
          <h3>Promoción de Vacunación</h3>
          <p>¡Vacuná a tu mascota a tiempo! Descuentos en vacunas este mes.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={7000}>
        <img loading="eager" className="imagen-Carousel" src={imagen3p} alt="tercera imagen del carrusel" />
        <Carousel.Caption className="captionInicio">
          <h3>Servicios de Estética y Cuidado</h3>
          <p>Baño, corte y cuidado para que luzca increíble.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img loading="eager" className="imagen-Carousel" src={imagen4p} alt="cuarta imagen del carrusel" />
        <Carousel.Caption className="captionInicio">
          <h3>Chequeo clínico completo con 20% OFF</h3>
          <p>Incluye análisis de sangre, orina y control general.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};


