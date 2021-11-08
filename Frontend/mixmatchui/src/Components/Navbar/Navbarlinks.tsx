import styled from "styled-components";
import { Image } from "../Common";

const NavLink = styled("a")`
    font-size: inherit;
    :focus{
        /* color:; */
    }
`

export const NavLogoImg = styled(Image)`
    width:70%;
    max-height:50px;
    max-width: 50px;
    object-fit: contain;
    min-height: 20px;
    min-width:20px;
`
export const DisapeearingBR = styled.br`
    height: 1px;
    @media all and (max-height:500px){
        display: none;
    }
`

export const NavLogoText = styled.span`
    display: block;
    font-family: 'Pacifico', cursive;
    margin: 5px;
    font-size: inherit;
`

export default NavLink