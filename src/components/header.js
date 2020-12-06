import React from 'react';
import styled from 'styled-components';


const NavBar = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    z-index: 1100;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-direction: column;
    color: #fff;
    background-color: var(--blue);
    box-shadow:var(--nav-shadow);


`
export const Header = () =>{
    return <NavBar />
}