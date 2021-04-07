import styled from 'styled-components'
import { Container } from '../../globalStyles'
import {Link} from 'react-router-dom'


export const Nav = styled.nav`
background: #fff;
height:80px;
display:flex;
justify-content: center;
align-items:center;
font-size:0.8;
position:sticky;
top:0;
z-index:999;
box-shadow: 1px 1px 5px #475E69;

@media screen and (max-width:960px) {
    box-shadow: 0 0 0;
}
`

export const NavbarContainer = styled(Container)`
display:flex;
justify-content: space-between;
height:80px;
${Container}
`

export const NavLogo = styled(Link)`
display: flex;
justify-content: flex-start;
align-items:center;
cursor: pointer;
`

export const NavIcon = styled.img`
    margin-right:0.5rem;
`

export const MobileMenu = styled.div`
display:none;
@media screen and (max-width:960px) {
    display: block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style-type:none;
text-align:center;
@media screen and (max-width:960px) {
    display:flex;
    flex-direction:column;
    width:100%;
    height:90vh;
    position:absolute;
    top:80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity:1;
    transition:all 0.5s ease;
    background: #fff;
}
`

export const NavItem = styled.li`
height:80px;
border-bottom:2px solid transparent;
&:hover {
    border-bottom:2px solid #1F2E35;
}
@media screen and (max-width: 960px) {
    width:100%;
    &:hover{
        border:none;
    }
}
`

export const NavLinks = styled(Link)`
color:#1F2E35;
display: flex;
align-items:center;
text-decoration:none;
padding:0.5rem 1rem;
height:100%;

&:hover{
        color: #EE4248;
}

@media screen and (max-width: 960px) {
    text-align:center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover{
        transition: all 0.3s ease;
    }
}
`


export const NavIconWrapper = styled.div`
display:flex;
gap:15px;
align-items:center;

@media screen and (max-width:960px){
    display:none;
}

`
