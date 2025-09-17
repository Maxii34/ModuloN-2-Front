import CardMiembro from "./CardMiembro";
import { Container, Form, Row } from "react-bootstrap";


const Nosotros = () => {
    return (
        <Container className="py-3">
         <h1 className="text-center py-3">Conocé a nuestro equipo</h1>
            
        <Row className="shadow py-4 px-3 rounded-3">
       
          <CardMiembro></CardMiembro>
          <CardMiembro></CardMiembro>
          <CardMiembro></CardMiembro>
          <CardMiembro></CardMiembro>
        </Row>
        </Container>
    );
};

export default Nosotros;