import React from 'react';
import styled from 'styled-components';
import { PlusSquare } from 'react-bootstrap-icons';

const Container = styled.div`
    padding: 5px 10px;
    background-color: inherit;
    &:hover {
        background-color: #f4f6f7;
        cursor: pointer;
    }
    `
const Label = styled.span`
    font-size: 14px;
    margin-left: 5px;
`
const TodoCardAdd = ({ add }) => {
    return (
        <Container onClick={add}>
            <PlusSquare /><Label> Add another card</Label>
        </Container>
    )
}

export default TodoCardAdd
