import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const SelectComponent = ({ label, placeholder, disabled, isError, errors }) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                as="select"
                placeholder={placeholder}
                disabled={disabled}>
                <option>To Do</option>
                <option>Done</option>
            </Form.Control>
            {isError &&
                <Form.Control.Feedback type="invalid">
                    {errors}
                </Form.Control.Feedback>
            }
        </Form.Group>
    )
}

SelectComponent.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isError: PropTypes.bool,
    errors: PropTypes.string,
}

SelectComponent.defaultProps = {
    disabled: false,
    isError: false,
    errors: '',
}

export default SelectComponent
