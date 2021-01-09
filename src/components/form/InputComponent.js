import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Required = styled.span`
    color: red;
    font-size: 12px;
`

const InputComponent = ({ input, meta, label, isTextArea, placeholder, disabled }) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            {!isTextArea ?
                <Form.Control
                    placeholder={placeholder}
                    disabled={disabled}
                    {...input}
                />
                :
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...input}
                />
            }
            {meta.touched && meta.error &&
                <Required>
                    {meta.error}
                </Required>
            }
        </Form.Group>
    )
}

InputComponent.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isTextArea: PropTypes.bool,
}

InputComponent.defaultProps = {
    disabled: false,
    isTextArea: false,
}

export default InputComponent
