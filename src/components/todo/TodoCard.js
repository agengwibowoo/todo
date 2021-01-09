import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { XSquare } from 'react-bootstrap-icons';

const Container = styled.div`
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    cursor: pointer;
    display: block;
    margin-bottom: 8px;
    padding: 5px 10px;
    min-height: 20px;
    position: relative;
    text-decoration: none;
    z-index: 0;
    &:hover {
        background-color: #f4f6f7;
    }
    `

const Title = styled.span`
    font-size: 20px;
    `

const Desc = styled.p`
    font-size: 14px;
    color: #7A8599;
    `

const Delete = styled.div`
    display: inline;
    float: right;
    border-radius: 5px;
    &:hover {
        color: red;
    }
`

const TodoCard = ({ title, desc, edit, deleteCard }) => {
    return (
        <Container onClick={edit}>
            <Title>{title}</Title>
            <Delete onClick={deleteCard}>
                <XSquare size={14} />
            </Delete>
            <Desc>{desc}</Desc>
        </Container>
    )
}

TodoCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
}

TodoCard.defaultProps = {
    desc: '',
}

export default TodoCard
