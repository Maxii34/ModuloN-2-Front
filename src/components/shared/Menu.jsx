import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo-veterinaria.jpg";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

const Menu = ({ openModal, usuarioLogueado, setUsuariologueado }) => {
  const navegacion = useNavigate();

  const cerrarSession = () => {
    setUsuariologueado(false);
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="nav-pri">
      <Container>
        <Navbar.Brand
          href="#"
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src={logo}
            alt="Logo png"
            className="d-inline-block align-top me-2 img-logo"
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
            {/* Formulario de búsqueda con ancho fijo */}
            <Form className="d-flex flex-grow-0 me-3">
              <Form.Control
                type="search"
                placeholder="¿Qué estás buscando?"
                className="me-2"
                aria-label="Search"
                style={{ width: "200px" }} // ancho fijo
              />
              <Button variant="outline-success">
                <i className="bi bi-search"></i>
              </Button>
            </Form>

            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>

            <NavLink to={"/turnos"} className="nav-link">
              Turnos
            </NavLink>

            {usuarioLogueado ? (
              <>
                <NavLink to={"/admin"} className="nav-link">
                  Administrador
                </NavLink>
                <Button
                  className="nav-link"
                  variant="link"
                  onClick={cerrarSession}
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
            <Button className="nav-link" variant="link" onClick={openModal}>
              <i className="bi bi-person-circle fs-5"></i>
            </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
