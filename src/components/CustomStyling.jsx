import React, { useContext } from 'react'
import styled from "styled-components";

import { Button as BootstrapButton, Nav, Col, Modal as BootstrapModal, Container } from 'react-bootstrap'

export const Button = styled(BootstrapButton)`
    ${({ background = '#0d6efd', color = '#fff', borderColor = '#0d6efd' }) => `
        background: ${background};
        color: ${color};
        border-color: ${borderColor}
    `}
`

export const NavLink = styled(Nav.Link)`
    ${({ background = '#fff', activeBackground = 'var(--primary-color)', color = '#0d6efd', activeColor = '#fff', borderColor = '#0d6efd', padding = '' }) => `
        background: ${background};
        color: ${color};
        border-color: ${borderColor};
        padding: ${padding};
        &.active{
            color: ${activeColor} !important;
            background: ${activeBackground} !important;
        }
    `}
`

export const SideNavLink = styled(Nav.Link)`
    ${({ background = '#f0f0f0', activeBackground = 'transparent', color = '#0f0f0f', activeColor = 'var(--primary-color)', borderColor = 'var(--primary-color)' }) => `
        background: ${background};
        color: ${color};
        border-color: ${borderColor};
        width: 100%;
        &:hover{
            color: #575757;
        }
        &.active{
            color: ${activeColor} !important;
            background: ${activeBackground} !important;
            border-right: 4px solid;
        }
    `}
`

export const ColCustomed = styled(Col)`
    ${({ background = '#f0f0f0', padding = '', paddingLeft = '', paddingRight = '0', textAlign = 'left' }) => `
        background: ${background};
        padding: ${padding};
        padding-right: ${paddingRight};
        padding-left: ${paddingLeft};
        text-align: ${textAlign};
    `}
`

export const Flex = styled.div`
    ${({ flexWrap = 'nowrap', width = '' }) => `
        flex-wrap: ${flexWrap};
        width: ${width};
    `}
    &.center{
        margin: auto;
    }
    &.space-between{
        justify-content: space-between;
    }
    &.space-around{
        justify-content: space-around;
    }
    display: flex;
    .tab1{
        tab-size: 1;
    }
`

export const CustomDiv = styled.div`
    ${({ margin = '', width = '30px', textAlign = 'center', background = '#fff', padding = '', fontSize = '.8rem' }) => (
        `
            margin: ${margin};
            width: ${width};
            text-align: ${textAlign};
            background: ${background};
            padding: ${padding};
            font-size: ${fontSize};
            & > img{
                width: 100%;
                margin: auto;
            }
        `
    )}
`

export const CustomButton = styled(Button)`
    ${({ fontSize = '1rem', background = '' }) => `
        font-size: ${fontSize};
        background: ${background};
    `}
`


export const Divider = styled.div`
    ${({width = '100%', height = '1px', background = '#f0f0f0', margin = ''}) => `
        height: ${height};
        width: ${width};
        margin: ${margin};
        background: ${background};
    `}
`

export const Title = styled.h1`
	${({ textAlign = 'left', fontSize = '14px' }) => `
		text-align: ${textAlign};
		font-size: ${fontSize};
	`}
`
