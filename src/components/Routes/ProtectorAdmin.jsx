import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({usuarioLogueado}) => {
    if(!usuarioLogueado){
        return <Navigate to={"/"} />
    }
    return <Outlet />
};

export default ProtectorAdmin;