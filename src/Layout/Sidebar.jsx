import React, { useContext, useState } from 'react'
import { Nav } from 'react-bootstrap'
import styled from 'styled-components'
// custom components
import { CustomDiv, SideNavLink } from './components/CustomStyling'
// custom images
import RandomLogo from '../assets/random-logo.png'

const StyledSideNav = styled.div`
    height: 100vh;
`

export default function Sidebar(props) {
    return (
        <StyledSideNav>
            <CustomDiv width='50px' margin='20px auto'>
                <img src={RandomLogo}/>
            </CustomDiv>
            <Sidenav {...props} />
        </StyledSideNav>
    )
}


function Sidenav() {
    let currentPath = ''
    return (
        <Nav defaultActiveKey="/home" className="flex-column sidenav">
            <SideNavLink href={`${currentPath}/home`}>Home</SideNavLink>
            <SideNavLink href={`${currentPath}/music`}>music</SideNavLink>
            <SideNavLink className="btn-logout" >
                Logout
            </SideNavLink>
        </Nav>
    )
}
