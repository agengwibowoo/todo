import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-final-form';

const ModalEdit = ({ show, setShow, action, type }) => {
    const onSubmit = () => {
        console.log('deleted')
    }
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
                    Delete
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <p>Apakah anda yakin akan menghapus card ini?</p>
                            <Button variant="danger" type="submit" style={{ float: 'right' }}>
                                Ya
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
