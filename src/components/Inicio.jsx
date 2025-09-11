import ImagenPagInicio from "../assets/ImagenPagInicio.png";

const Inicio = () => {
  return (
    <>
      <section>
        <article>
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
