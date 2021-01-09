import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-final-form';
import { useSelector, useDispatch } from "react-redux";
import { selectedTodo, deleteTodo } from '../../actions/todo_action';

const ModalEdit = ({ show, setShow, action }) => {
    const { selectedPayload } = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(selectedTodo);
    }, [])
    const onSubmit = () => {
        dispatch(deleteTodo({
            id: selectedPayload.id
        }));
        setShow(!setShow);
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
