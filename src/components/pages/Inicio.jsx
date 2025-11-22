import {
  CarruselInicio,
  SobreDogTor,
  ServiciosCarrusel,
  Opiniones,
  AlertTurno,
  ServiciosCards,
} from "../Index.jsx";

export const Inicio = () => {
  return (
    <section>
      <CarruselInicio />
      <AlertTurno />
      <SobreDogTor />
      <ServiciosCards />
      <Opiniones />
    </section>
  );
};
