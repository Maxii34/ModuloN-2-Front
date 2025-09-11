import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo-veterinaria.jpg";
import { NavLink } from "react-router";

const Menu = () => {
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
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="¿Qué estás buscando?"
                className="me-2 w-100"
                aria-label="Search"
              />
              <Button variant="outline-success" className="me-4">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink className={"nav-link"}>Turnos</NavLink>
            <NavLink to={"/admin"} className={"nav-link"}>
              Administrador
            </NavLink>
            <NavLink className={"nav-link"}>
              <i className="bi bi-person-circle fs-5"></i>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
