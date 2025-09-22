import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import CarruselInicio from "../CarruselInicio";
import SobreDogTor from "../SobreDogTor";
import ServiciosCarrusel from "../ServiciosCarrusel";
import Opiniones from "../Opiniones";


const Inicio = () => {
  const navigate = useNavigate();

  const handlePedirTurno = () => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuariokey"));
    if (!usuarioLogueado) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe iniciar sesión para solicitar un turno o registrarse si no tiene cuenta.",
      });
    } else {
      navigate("/admin/crear");
    }
  };

  return (
    <section>
      <CarruselInicio />
      <SobreDogTor />
      <ServiciosCarrusel handlePedirTurno={handlePedirTurno} />
      <Opiniones />
    </section>
  );
};

export default Inicio;
