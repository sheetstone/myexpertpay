/*
 * Add/Edit Bank List
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { addBank } from 'api/bankApi';
import * as yup from 'yup';
import messages from '../../messages';

import style from './styles/style.scss';

const schema = yup.object().shape({
  rountingNumber: yup.string().required,
  accountNumber: yup.string().required,
  accountNumberConfirmation: yup.string().required,
});

export default function EditBankAccount() {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onBlur',
    validationSchema: schema,
  });
  const onSubmit = data => {
    console.log(JSON.stringify(data));
    addBank(data);
  };

  console.log(JSON.stringify(formState));

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            <FormattedMessage {...messages.addBankTitle} />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Row>
            <Col>
              <Form.Group controlId="rountingNumber">
                <Form.Label>
                  <FormattedMessage {...messages.rountingNumber} />
                  &nbsp;<span className={style.required} aria-label="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="rountingNumber"
                  ref={register}
                  isValid={formState.touched.rountingNumber && !errors.rountingNumber}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          {errors.rountingNumber && <p>{errors.rountingNumber.message}</p>}
          <Form.Row>
            <Col>
              <Form.Group controlId="accountNumber">
                <Form.Label>
                  <FormattedMessage {...messages.accountNumber} />
                  &nbsp;<span className={style.required} aria-label="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="accountNumber"
                  ref={register}
                  isValid={formState.touched.accountNumber && !errors.accountNumber}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="confirmAccountNumber">
                <Form.Label>
                  <FormattedMessage {...messages.accountNumberConfirmation} />
                  &nbsp;<span className={style.required} aria-label="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="confirmAccountNumber"
                  ref={register}
                  isValid={formState.touched.confirmAccountNumber && !errors.confirmAccountNumber}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          {errors.accountNumber && <p>{errors.accountNumber.message}</p>}
          <Form.Row>
            <Col>
              <Form.Check
                inline
                label="Checking"
                type="radio"
                id="inline-radio-1"
                name="accountType"
                defaultChecked
                value="checking"
                ref={register}
              />
              <Form.Check
                inline
                label="Saving"
                type="radio"
                id="inline-radio-2"
                name="accountType"
                value="saving"
                ref={register}
              />
            </Col>
          </Form.Row>
          <hr />
          <p>
            <FormattedMessage {...messages.addBankMessage} />
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" type="submit" ref={register} name="submit">
            <FormattedMessage {...messages.addBankSubmit} />
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Form>
  );
}
