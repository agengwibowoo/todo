import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const SelectComponent = ({ input, label, placeholder, disabled, values }) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                as="select"
                placeholder={placeholder}
                disabled={disabled}
                value={values}
                onChange={(event) => input.onChange(event.target.value)}>
                <option value={0}>To Do</option>
                <option value={1}>Done</option>
            </Form.Control>
        </Form.Group>
    )
}

SelectComponent.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

SelectComponent.defaultProps = {
    disabled: false,
}

export default SelectComponent
