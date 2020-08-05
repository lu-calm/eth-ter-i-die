import React from 'react';

import { Button, Modal, Row, Col } from 'react-bootstrap'
import { gather, download_FS} from './core.js';

function EtIDDownload() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>


    <Row>
    <Col>
    <div class="d-flex justify-content-center">

        <Button variant="primary" onClick={() => setModalShow(true)}>
        Download File
      </Button>
</div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Col>
  </Row>
    </>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>

      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" type="submit" onClick={() => { download_FS("Ether-I-Die.txt", gather()) }}>Agree and Download</Button>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


 export default EtIDDownload;
