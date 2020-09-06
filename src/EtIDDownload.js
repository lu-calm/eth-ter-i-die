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
          Disclaimer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <p class="text-break">
By confirming this .txt file download you are agreeing that Eth-ter-I-Die and associated parties are not liable for any loss of Ether or Ethereum tokens/ assets that may occur during this process.
  </p>
  <p class="text-break">
This is a literal “How to Guide” of removing your Ethereum assets.
</p>
<p class="text-break">
Do Not save any seed phrase digitally and keep the completed document in a safe place.
        </p>

      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" type="submit" onClick={() => { download_FS("Eth-ter-I-Die.txt", gather()) }}>Agree and Download</Button>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


 export default EtIDDownload;
