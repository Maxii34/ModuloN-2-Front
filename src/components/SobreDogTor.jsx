import { Card, Container } from "react-bootstrap";

export const SobreDogTor = () => {
  return (
    <Container className="my-3">
      <article>
        <Card className=" shadow-lg border-0 overflow-hidden">
          {/* Encabezado */}
          <Card.Header className="cardInicio py-4">
            <Card.Title className="text-light text-center text-md-start m-0 fs-2 fw-bold">
              Sobre <strong>Dog-Tor: Clinica veterianaria.</strong>
            </Card.Title>
          </Card.Header>

          {/* Cuerpo */}
          <Card.Body className="p-3 bg-light-subtle" >
            <p>
              <strong>Dog-Tor</strong> es una clínica veterinaria dedicada al
              cuidado integral de la salud de tu mascota. Brindamos una atención
              cálida, profesional y enfocada en la prevención, el diagnóstico y
              el tratamiento responsable.
            </p>

            <p>
              Ofrecemos una amplia variedad de servicios, incluyendo consultas
              preventivas, vacunación, cirugías menores, estudios clínicos y
              atención en higiene y estética. Cada visita está pensada para
              garantizar el bienestar físico y emocional de los animales.
            </p>

            <p>
              Nuestro equipo está formado por profesionales comprometidos: <br />
              <strong>
                Robledo Garrido Santiago Andrés, Joaquín Albornoz Bresla,
                Maximiliano Ordoñez y Paula Gramajo
              </strong>
              . Juntos aportamos experiencia, dedicación y un profundo amor por
              los animales, para que cada mascota reciba cuidados personalizados
              y seguros.
            </p>

            <p>
              En <strong>Dog-Tor</strong>, trabajamos para que tu compañero
              peludo viva sano, feliz y acompañado en todas las etapas de su
              vida.
            </p>
          </Card.Body>

          {/* Footer */}
          <Card.Footer className="bg-light ">
            <div className="text-center text-md-start m-0 fs-6">
              <strong>Horarios de atención:</strong>
              <ul className="mb-0">
                <li>
                  <b>Lunes a Viernes</b>: 9:00 AM a 13:00 PM y 16:00pm a 22:00
                  PM
                </li>
                <li>
                  <b>Sábado</b>: 10:00 AM a 18:00 PM
                </li>
              </ul>
            </div>
          </Card.Footer>
        </Card>
      </article>
    </Container>
  );
};
