import { Card, Col, Button } from "react-bootstrap";
import { useState } from "react";

const CardMiembro = ({ nombre, imagen, github, linkedin }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <Col md={6} lg={3} className="mb-3">
      <Card className="h-100 card-miembro border-success custom-card">
        <div className="p-2">
          <img
            src={error ? 'URL_DE_IMAGEN_DE_PLACEHOLDER' : imagen}
            alt={nombre}
            className="card-img-miembro"
            onError={handleError}
          />
        </div>
        <Card.Body className="border-top border-success">
          <Card.Title className="text-center">{nombre}</Card.Title>
          <div className="d-flex justify-content-evenly mt-3">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Button variant="success" className="px-3">
                <i className="bi bi-github"></i>
              </Button>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="success" className="px-3">
                <i className="bi bi-linkedin"></i>
              </Button>
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardMiembro;