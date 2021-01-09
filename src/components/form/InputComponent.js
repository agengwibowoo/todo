import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const InputComponent = ({ label, type, placeholder, disabled, isError, errors }) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                placeholder={placeholder}
                disabled={disabled}
            />
            {isError &&
                <Form.Control.Feedback type="invalid">
                    {errors}
                </Form.Control.Feedback>
            }
        </Form.Group>
    )
}

InputComponent.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isError: PropTypes.bool,
    errors: PropTypes.string,
}

InputComponent.defaultProps = {
    disabled: false,
    isError: false,
    errors: '',
}

export default InputComponent
