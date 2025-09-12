import ImagenPagInicio from "../assets/ImagenPagInicio.png";
import vaca from "../assets/vaca.jpg";
import Carousel from "react-bootstrap/Carousel";

const Inicio = () => {
  return (
    <>
      <section>
        <article className="mb-5">
          <img
            src={ImagenPagInicio}
            alt="Imagen de la página de inicio"
            className="imgInicio"
          />
        </article>
      </section>
    </>
  );
};

export default Inicio;
