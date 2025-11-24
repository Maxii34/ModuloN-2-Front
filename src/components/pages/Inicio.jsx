import {
  CarruselInicio,
  SobreDogTor,
  Opiniones,
  AlertTurno,
  ServiciosCards,
} from "../Index.jsx";

export const Inicio = ({ usuarioLogueado, openModal }) => {
  return (
    <section>
      <CarruselInicio />
      <AlertTurno />
      <SobreDogTor />
      <ServiciosCards usuarioLogueado={usuarioLogueado} openModal={openModal} />
      <Opiniones />
    </section>
  );
};
