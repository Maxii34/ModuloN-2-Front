import { Form, Button } from 'react-bootstrap';

const Contacto = () => {
    return (
        <section className="py-3">
      <h1 className="py-2 text-center base-footer text-light">Contacto</h1>
      <article className="container bg-body-secondary ">
        <Form className='p-2'>
          <Form.Group className="mb-3 w-25" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="ej: juan perez" />
          </Form.Group>
          <Form.Group className="mb-3 w-25" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="ej: juan_perez@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3 w-25" controlId="exampleForm.ControlInput1">
            <Form.Label>Télefono</Form.Label>
            <Form.Control type="tel" placeholder="ej: 381-1115469" />
          </Form.Group>
          <Form.Group className="mb-3 w-25" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Consulta</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button className='btn btn-success'>Enviar</Button>
        </Form>
      </article>
    </section>
    );
};

export default Contacto;