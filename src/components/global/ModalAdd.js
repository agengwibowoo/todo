import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form, Field } from 'react-final-form';
import InputComponent from '../form/InputComponent';

const ModalEdit = ({ show, setShow, action, type }) => {
    const onSubmit = values => {
        window.alert(JSON.stringify(values, 0, 2));
    }
    const required = value => (value ? undefined : 'Judul harus diisi!')
    return (
        <Modal
            action={action}
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Add
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                                name="title"
                                label="Judul"
                                placeholder="Masukkan judul"
                                validate={required}
                                component={InputComponent}
                            />
                            <Field
                                name="desc"
                                label="Deskripsi"
                                placeholder="Masukkan deskripsi"
                                isTextArea
                                component={InputComponent}
                            />
                            <Button type="submit" style={{ float: 'right' }}>
                                Submit
                            </Button>
                        </form>
                    )}
                >
                </Form>
            </Modal.Body>
        </Modal >
    )
}

export default ModalEdit
