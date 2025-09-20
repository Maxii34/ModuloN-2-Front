import CardMiembro from '../CardMiembro';
import { Container, Row } from 'react-bootstrap';
import Paula from '../../assets/Paula.jpg';
import Maximiliano from '../../assets/Maximiliano.jpg';

const miembrosDelEquipo = [
  {
    id: 1,
    nombre: 'Maximiliano Ordoñez',
    imagen: Maximiliano,
    github: 'https://github.com/Maxii34',
    linkedin: 'https://www.linkedin.com/in/maxiiordo%C3%B1ez/',
  },
  {
    id: 2,
    nombre: 'Paula Gramajo',
    imagen: Paula,
    github: 'https://github.com/PaulaGramajo',
    linkedin: '',
  },
  {
    id: 3,
    nombre: 'Paula Gramajo',
    imagen: Paula,
    github: 'https://github.com/PaulaGramajo',
    linkedin: '',
  },
  {
    id: 4,
    nombre: 'Paula Gramajo',
    imagen: Paula,
    github: 'https://github.com/PaulaGramajo',
    linkedin: '',
  }
];

const Nosotros = () => {
  return (
    <Container className='border rounded-4 my-3'>
      <div className='text-center'>
        <h1>Conocé a nuestro equipo</h1>
        <p className='fs-5'>¡Bienvenido a Dog-Tor! Conoce a los creadores de este proyecto. Un grupo de desarrolladores comprometidos con la excelencia y la innovación. Juntos, convertimos ideas en soluciones funcionales y eficientes.</p>
      </div>
      
      <Row className='p-3'>
        {miembrosDelEquipo.map((miembro) => (
          <CardMiembro
            key={miembro.id}
            nombre={miembro.nombre}
            imagen={miembro.imagen}
            github={miembro.github}
            linkedin={miembro.linkedin}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Nosotros;