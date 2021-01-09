import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form, Field } from 'react-final-form';
import InputComponent from '../form/InputComponent';
import { useDispatch } from "react-redux";
import { addTodo } from '../../actions/todo_action';

const ModalEdit = ({ show, setShow, action }) => {
    const dispatch = useDispatch();
    const onSubmit = values => {
        dispatch(addTodo({
            title: values.title,
            description: values.description,
            createdAt: new Date(),
            status: 0
        }));
        setShow(!setShow);
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
