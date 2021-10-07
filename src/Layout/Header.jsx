import React,  {useEffect, useState} from 'react'
import { ColCustomed, CustomDiv, NavLink } from '../components/CustomStyling'
import { Row, Container, Nav, NavDropdown } from 'react-bootstrap'
import { getUserData } from '../utils/services'
//icons
//contexts
export default function Header() {
    let [user, setUser] = useState({})

    useEffect(() => {
        setUser(getUserData())
    }, [user])
    return (
        <CustomDiv width='100%' textAlign='left' background='#f0f0f0' padding='10px 0' fontSize='.9rem'>

            <Container>
                <Row>
                    <ColCustomed>
                        <Nav
                            activeKey="/home"
                            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        >

                            <Nav.Item>
                                <NavLink background='transparent' padding='0.5rem 0'>
                                    Welcome, {user.firstName}
                                </NavLink>
                            </Nav.Item>

                        </Nav>
                    </ColCustomed>
                    <ColCustomed>
                        <Nav className="justify-content-end" activeKey="/home">
                            <NavDropdown title={`${user.firstName} ${user.lastName}`} id="nav-dropdown">
                                <NavDropdown.Item onClick={() => {
                                    localStorage.setItem("uid", "")
                                    window.location.href = '/signin'
                                }}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </ColCustomed>
                </Row>
            </Container>
        </CustomDiv>
    )
}