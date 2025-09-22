import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo-veterinaria.jpg";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Menu = ({ openModal, usuarioLogueado, setUsuariologueado }) => {
  const navegacion = useNavigate();
  const [usuarioActivo, setUsuarioActivo] = useState(null);
  const [esAdmin, setEsAdmin] = useState(false);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
    setUsuarioActivo(usuario);

    if (usuario && usuario.tipo === "admin") {
      setEsAdmin(true);
    } else {
      setEsAdmin(false);
    }
  }, [usuarioLogueado]);

  const cerrarSession = () => {
    localStorage.removeItem("usuarioActivo");
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

            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>

            {/* Turnos para usuarios normales */}
            {usuarioActivo && usuarioActivo.tipo === "usuario" && (
              <NavLink to="/turnos" className="nav-link">
                Turnos
              </NavLink>
            )}

            {/* Administrador */}
            {esAdmin && (
              <NavLink to="/admin" className="nav-link">
                Administrador
              </NavLink>
            )}

            {usuarioActivo ? (
              <Button
                className="nav-link"
                variant="link"
                onClick={cerrarSession}
              >
                <i class="bi bi-box-arrow-right me-1"></i>Cerrar sesión
              </Button>
            ) : (
              <Nav.Link onClick={openModal}>
                <i className="bi bi-box-arrow-in-right me-1"></i> Ingresar
              </Nav.Link>
            )}
            <NavLink to="/registro" className="nav-link">
              <i className="bi bi-person-plus me-1"></i> Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
