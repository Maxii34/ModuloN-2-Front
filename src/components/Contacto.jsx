import { Form, Button } from 'react-bootstrap';

const Contacto = () => {
    return (
        <section className="py-3">
      <h1 className="py-2 text-center base-footer text-light">Contacto</h1>
      <article className="container bg-secondary">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </article>
    </section>
    );
};

export default Contacto;