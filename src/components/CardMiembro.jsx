import { Card, Col, Button } from "react-bootstrap";
import Valentina from "../assets/Valentina.jpg"

const CardMiembro = () => {
  return (
    <Col md={6} lg={3} className="mb-3">
      <Card className="h-100 card-miembro border-success custom-card">
        <div className="p-2">
          <img
            src={Valentina}
            alt='valentina'
            className="card-img-miembro"
          />
        </div>
        <Card.Body className="border-top border-success">
          <Card.Title className="text-center">Paula Gramajo</Card.Title>
          <div className="d-flex justify-content-evenly mt-3">
          <Button variant="success" className="px-3"><i class="bi bi-github"></i></Button>
          <Button variant="success" className="px-3"><i class="bi bi-linkedin"></i></Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
    
  );
};

export default CardMiembro;