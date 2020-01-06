/*
 * Bank List
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

import messages from '../../messages';

export default function EditBankAccount() {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>
          <FormattedMessage {...messages.addBankTitle} />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <FormattedMessage {...messages.rountingNumber} />
          </Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <FormattedMessage {...messages.accountNumber} />
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <FormattedMessage {...messages.accountNumberConfirmation} />
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>
        <p>
          <FormattedMessage {...messages.addBankMessage} />
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" type="submit">
          <FormattedMessage {...messages.addBankSubmit} />
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
