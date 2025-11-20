import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

export const Menu = ({ openModal, usuarioLogueado, setUsuariologueado }) => {
  const navegacion = useNavigate();
  console.log(usuarioLogueado);

  const cerrarSession = () => {
    setUsuariologueado({});
    sessionStorage.clear(); // Limpiar también el sessionStorage
    navegacion("/");
  };

  // Verificar si hay usuario logueado
  const estaLogueado = usuarioLogueado && usuarioLogueado.token;
  const esAdmin = estaLogueado && usuarioLogueado.tipo === "admin";
  const esUsuario = estaLogueado && usuarioLogueado.tipo === "usuario";

  return (
    <Navbar expand="lg" className="nav-pri">
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src="/patitaicon.svg"
            alt="Logo png"
            className="d-inline-block align-top me-2 img-logo shadow-sm rounded-5"
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
            <Form className="d-flex flex-grow-0 me-5">
              <Form.Control
                type="search"
                placeholder="¿Qué estás buscando?"
                className="me-2"
                aria-label="Search"
                style={{ width: "200px" }}
              />
              <Button variant="outline-success">
                <i className="bi bi-search"></i>
              </Button>
            </Form>

            {/* INICIO - Siempre visible */}
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>

            {/* ADMINISTRADOR - Solo si es admin */}
            {esAdmin && (
              <NavLink to="/admin" className="nav-link">
                <i className="bi bi-gear me-1"></i>Administrador
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
                  {usuarioLogueado.usuario?.nombre || usuarioLogueado.usuario?.email}
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};