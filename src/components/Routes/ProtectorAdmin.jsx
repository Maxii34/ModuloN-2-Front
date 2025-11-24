import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({ usuarioLogueado }) => {
  // Valida que esté logueado Y que sea admin
  if (!usuarioLogueado || usuarioLogueado.tipo !== "admin") {
    console.log(usuarioLogueado);
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectorAdmin;