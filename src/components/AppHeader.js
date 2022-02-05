import React from 'react';
import { CContainer, CHeader, CHeaderBrand, CHeaderNav, CHeaderToggler, CNavItem, CNavLink } from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'
import { NavLink } from 'react-router-dom';
import { logo } from '../../src/assets/brand/logo'

const AppHeader = () => {
    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow)
    return (
        <CHeader position='sticky' className='mb-4'>
            <CContainer fluid>
                <CHeaderToggler
                    className='ps-1'
                    onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}>
                    <CIcon icon={cilMenu} size='lg' />
                </CHeaderToggler>
                <CHeaderBrand className='mx-auto d-md-none' to='/'>
                    <CIcon icon={logo} height={48} alt='logo' />
                </CHeaderBrand>
                <CHeaderNav className='d-none d-md-flex me-auto'>
                    <CNavItem>
                        <CNavLink to='/dashboard' component={NavLink} >
                            Dashboard
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href='#'>
                            Users
                        </CNavLink>
                    </CNavItem>
                </CHeaderNav>
            </CContainer>
        </CHeader >
    )
}
export default AppHeader
