import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    background-color: #ebecf0;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    width: 400px;
    white-space: nowrap;
    padding: 10px 20px;
    margin: 0 20px;
`

const Title = styled.label`
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0px;
`

const TodoContainer = ({ title, children }) => {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}

TodoContainer.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
}

export default TodoContainer
