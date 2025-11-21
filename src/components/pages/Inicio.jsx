import {
  CarruselInicio,
  SobreDogTor,
  ServiciosCarrusel,
  Opiniones,
  AlertTurno,
} from "../Index.jsx";

export const Inicio = () => {
  return (
    <section>
      <CarruselInicio />
      <AlertTurno />
      <SobreDogTor />
      <ServiciosCarrusel />
      <Opiniones />
    </section>
  );
};
