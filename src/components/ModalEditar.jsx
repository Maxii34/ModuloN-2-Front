import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDatosTurnos } from './context/CargarContex';


export const ModalEditar = () => {

    const { show, handleClose } = useDatosTurnos();




  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Turno de:</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
