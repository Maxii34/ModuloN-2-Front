import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router";

export const Menu = ({ openModal, usuarioLogueado, setUsuariologueado }) => {
  const navegacion = useNavigate();

  const cerrarSession = () => {
    setUsuariologueado({});
    sessionStorage.clear();
    navegacion("/");
  };

  const PedirTurno = () => {
    navegacion("/usuario/crear"); // ✅ Cambio aquí
  };

  // Se verifica si hay usuario o admin logueado.
  const estaLogueado = usuarioLogueado && usuarioLogueado.token;
  const esAdmin = estaLogueado && usuarioLogueado.tipo === "admin";
  const esUsuario = estaLogueado && usuarioLogueado.tipo === "usuario";

  return (
    <Navbar expand="lg" className="nav-pri-pro shadow-sm">
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src="/patitaicon.svg"
            alt="Logo png"
            className="d-inline-block align-top me-2 img-logo shadow-sm rounded-5 text-bg-light"
          />
          Dog<i className="bi bi-activity ms-1"></i>Tor
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* INICIO - Siempre visible */}
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>

            {/* ADMINISTRADOR - Solo si es admin */}
            {esAdmin && (
              <NavLink to="/admin" className="nav-link">
                <i className="bi bi-calendar2-date"></i> Turnos
              </NavLink>
            )}


            {/* Si NO está logueado, mostrar Ingresar y Registro */}
            {!estaLogueado && (
              <>
                <Nav.Link onClick={openModal}>
                  <i className="bi bi-box-arrow-in-right me-1"></i>Ingresar
                </Nav.Link>

                <NavLink to="/registro" className="nav-link">
                  <i className="bi bi-person-plus me-1"></i>Registro
                </NavLink>
              </>
            )}

            {/* Si está logueado, mostrar nombre y cerrar sesión */}
            {estaLogueado && (
              <>
                <span className="nav-link text-muted">
                  <i className="bi bi-person-circle me-1"></i>
                  {usuarioLogueado.usuario?.nombre ||
                    usuarioLogueado.usuario?.email}
                </span>

                <Button
                  className="nav-link text-danger"
                  variant="link"
                  onClick={cerrarSession}
                >
                  <i className="bi bi-box-arrow-right me-1"></i>Cerrar sesión
                </Button>
              </>
            )}

            {/* Botón flotante para solicitar turno (usuarios) */}
            {esUsuario && (
              <Button
                variant=""
                onClick={PedirTurno}
                className="boton-turno-nav mx-2"
              >
                Solicitar Turno
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};