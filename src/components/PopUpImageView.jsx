// PopupCard.js
import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

function PopupCard({ show, onClose, imgSrc, title, dateTime }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={imgSrc} fluid />
        <p>{dateTime}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <a href={imgSrc} download className="btn btn-primary">
          Download
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export default PopupCard;
