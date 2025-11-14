import { Card, Container } from "react-bootstrap";

export const SobreDogTor = () => {
  return (
    <Container>
      <article>
        <Card className="shadow">
          <Card.Header className="cardInicio">
            <Card.Title className="text-light text-center text-md-start text-lg-start">
              Acerca de <strong>Dog-Tor</strong>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <b>Dog-Tor</b> es una clínica veterinaria comprometida con la salud
            y bienestar de tu mascota. Ofrecemos atención integral, que incluye
            consultas preventivas, vacunación, cirugías menores, diagnóstico
            clínico y servicios de higiene y estética. Nuestro equipo de
            profesionales: 
            <b> Robledo Garrido Santiago Andrés, Joaquín Albornoz Bresla,
              Maximiliano Ordoñez y Paula Gramajo. </b>
            Combina experiencia y dedicación para asegurar que cada mascota
            reciba cuidados personalizados y seguros. En Dog-Tor, trabajamos
            para que tu compañero peludo esté sano, feliz y acompañado en cada
            etapa de su vida.
          </Card.Body>
          <Card.Footer>
            <Card.Text>
              Horarios de atención: <b>Lunes, Miercoles y Viernes: 9:00 AM – 8:00 PM</b>
            </Card.Text>
          </Card.Footer>
        </Card>
      </article>
    </Container>
  );
};


