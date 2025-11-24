import { Navigate, Outlet } from "react-router";

const ProtectorUsuer = ({ usuarioLogueado }) => {
  // Valida que esté logueado Y que sea usuario
  if (!usuarioLogueado || usuarioLogueado.tipo !== "usuario") {
    console.log(usuarioLogueado);
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectorUsuer;