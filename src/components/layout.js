import React from 'react';
import styled from "styled-components";

const GridCol = styled.div`
    display:grid;
    grid-template-columns: minmax(150px, 250px) 2fr;
    height: 100%;
`

export const Layout = ({children}) =>{
    return <GridCol>
        {children}
    </GridCol>
}

