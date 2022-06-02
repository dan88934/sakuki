import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, LogOutLink} from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
// import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../Signup/context/AuthContext'

const Navbar = ({ toggle, showItems = false, cta = 'signin' }) => {
    const { user, logout } = UserAuth()
    const [scrollNav, setScrollNav] = useState(false)
    const navigate = useNavigate();

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
            console.log('You are logged out')
        } catch (e) {
            console.log('HandleLogout catch')
            console.log(e.message)
        }
    }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    Sakuki
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                {/* Nav menu = container for menu items */}
                {showItems && (
                    <NavMenu> 
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Sign Up</NavLinks>
                    </NavItem>
                    </NavMenu>
                    )}
                
                <NavBtn>

                    {cta === "signup" ? (<NavBtnLink to="/signup">Sign Up</NavBtnLink>) 
                        : 
                        cta === "signout" ? (<LogOutLink onClick={handleLogout}>Sign Out</LogOutLink>) 
                        :
                        (<NavBtnLink to="/signin">Sign In</NavBtnLink>) 
                    }
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar