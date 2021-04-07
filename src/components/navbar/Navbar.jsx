import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import {IconContext} from 'react-icons/lib';
import logo from '../../images/logo.svg';
import home from '../../images/home.svg';
import mail from '../../images/mail.svg';
import mediaShuffle from '../../images/media-shuffle.svg';
import hamburger from '../../images/hamburger.svg';


import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon,
    MobileMenu,
    NavMenu,
    NavItem,
    NavLinks,
    NavIconWrapper,
    Icon
} from './Navbar.Element'


const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)


    return (
        <>
        <IconContext.Provider value={{color:'#455A64'}}>
            <Nav>
               <NavbarContainer>
                    <NavLogo to ='/'>
                        <NavIcon src={logo}/>
                    </NavLogo>
                    <MobileMenu onClick ={handleClick}>
                        {click ? <AiOutlineClose /> : <img src={hamburger} alt=''/>}
                    </MobileMenu>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/services'>
                                Services
                            </NavLinks>
                        </NavItem>                    
                       <NavItem>
                            <NavLinks to='/product'>
                                Product
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/tecnology'>
                                Technology
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about'>
                                About <IoIosArrowDown />
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about'>
                                Client <IoIosArrowDown />
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about'>
                                Partner
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavIconWrapper>
                    <Link to='/'>
                        <img src={home} alt='' />
                    </Link>
                    <Link to='/'>
                        <img src={mail} alt='' />
                    </Link>
                    <Link to='/'>
                        <img src={mediaShuffle} alt=''/>
                    </Link>
                    </NavIconWrapper>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar