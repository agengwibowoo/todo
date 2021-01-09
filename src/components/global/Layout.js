import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    min-height: 100vh - 20px;
    background: #ffffff 0% 0% no-repeat padding-box;
`

const Layout = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Layout
