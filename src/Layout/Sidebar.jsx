import React from 'react'
import { Nav } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// custom components
import { CustomDiv, SideNavLink } from '../components/CustomStyling'
// custom images
import RandomLogo from '../assets/random-logo.png'

const StyledSideNav = styled.div`
    height: 100vh;
`

export default function Sidebar(props) {
    return (
        <StyledSideNav>
            <CustomDiv width='100px' margin='20px auto' background='transparent'>
                <Link to='/panel/home'>
                    <img src={RandomLogo} />
                </Link>
            </CustomDiv>
            <Sidenav {...props} />
        </StyledSideNav>
    )
}


function Sidenav() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column sidenav">
            <SideNavLink href={`/panel/home`}>Home</SideNavLink>
            <SideNavLink href={`/panel/favorites`}>Favorite</SideNavLink>
            <SideNavLink className="btn-logout" color='red'>
                Logout
            </SideNavLink>
        </Nav>
    )
}
