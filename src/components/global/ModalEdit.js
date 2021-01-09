import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form, Field } from 'react-final-form';
import InputComponent from '../form/InputComponent';
import SelectComponent from '../form/SelectComponent';
import { selectedTodo, editTodo } from '../../actions/todo_action';

const ModalEdit = ({ show, setShow, action }) => {
    const { selectedPayload } = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(selectedTodo);
    }, [])
    const onSubmit = values => {
        dispatch(editTodo({
            title: values.title,
            description: values.description,
            status: parseInt(values.status),
            id: selectedPayload.id
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
                    Edit
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    onSubmit={onSubmit}
                    initialValues={{ title: selectedPayload?.title, description: selectedPayload?.description, status: selectedPayload?.status }}
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
                                name="description"
                                label="Deskripsi"
                                placeholder="Masukkan deskripsi"
                                isTextArea
                                component={InputComponent}
                            />
                            <Field
                                name="status"
                                label="Status"
                                placeholder="Pilih status"
                                component={SelectComponent}
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
