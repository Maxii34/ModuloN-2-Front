import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <Navbar expand="lg" className="nav-pri">
      <Container>
        <Navbar.Brand href="#">Veterinaria</Navbar.Brand>
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
                placeholder="¿Que estas buscando.?"
                className="me-2 w-100"
                aria-label="Search"
              />
              <Button variant="outline-success" className="me-4">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Contacto</Nav.Link>
            <Nav.Link href="#action2">Turnos</Nav.Link>
            <Nav.Link href="#action3">Administrador</Nav.Link>
            <Nav.Link href="#action3">Login</Nav.Link>
            <Nav.Link href="#action3">register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
