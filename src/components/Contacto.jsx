import { Form, Button } from "react-bootstrap";

const Contacto = () => {
  return (
    <section className="py-3">
      <h1 className="py-2 text-center base-footer text-light">Contacto</h1>
      <article className="container bg-body-secondary p-3 mt-3 row">
        <h5>Envianos tu consulta</h5>
        <div className="col-12 col-md-6 col-lg-6 mb-3">
          <Form className="py-2 mx-auto">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control type="text" placeholder="ej: juan perez" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="ej: juan_perez@gmail.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Télefono</Form.Label>
              <Form.Control type="tel" placeholder="ej: 381-1115469" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Consulta</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className="btn btn-success float-end">Enviar</Button>
          </Form>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <iframe
            className="w-100 rounded-3 py-2 border border-success"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1059174722677!2d-65.20974192459575!3d-26.83658327669253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1745540374558!5m2!1ses-419!2sar"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div>
            <p className="text-secondary lead fs-6 m-3">
              <i className="bi bi-geo-fill pe-2 fs-4"></i>Gral. Jose Maria Paz
              576
            </p>
          </div>
          <div className="border-top">
            <p className="text-secondary lead fs-6  m-3">
              <i className="bi bi-envelope-at-fill pe-2 fs-4"></i>
              DogTor@gmail.com
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contacto;
