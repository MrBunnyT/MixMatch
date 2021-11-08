import React from "react";
import styled, { useTheme } from "styled-components";
import { NavButton, FeatureWrapper } from "../Buttons";
import logo from "../../Assets/Images/WeebPic.jpg"
import { DisapeearingBR, NavLogoImg, NavLogoText } from "./Navbarlinks";
import ThemeInterface from "../../Interfaces/ThemeInterface";
import { HomeComponentProps } from "../../Layouts/HomeLayout";

const Nav = styled.div`
    z-index:4;
    position: sticky;
    top: 0;
    display: inline-flex;
    font-size: 2vh;
    height: 7vh;
    width: 100%;
    padding-top: 1vh;
    padding-bottom: 1vh;
    overflow: hidden;
    background-color: ${props=>props.theme.color_palette.Primary};
    color:white;
    @media all and (max-height:500px){
        height: 10vh;
        font-size: 4vh;
    }
`

interface NavbarProps extends HomeComponentProps{

}

const Navbar:React.FC<NavbarProps> = (props:NavbarProps) => {
    const theme:ThemeInterface = useTheme() as ThemeInterface;
    return(
        <Nav>
            <FeatureWrapper Padding="0.5vh" draggable="false">
                <a href="https://www.google.com">
                    <NavLogoImg width="100%" height="auto" BorderRadius="50%" src={logo}/>
                    <NavLogoText>Anime<DisapeearingBR/>Weaboos</NavLogoText>
                </a>
            </FeatureWrapper>
            {props.ShowAuthIn && (
            <FeatureWrapper MarginLeft="auto" Padding="0.5vh">
                <NavButton HoverColor={theme.color_palette.Success} onClick={e=>window.location.href='/Auth/Signin'}>Sign In</NavButton>
                <NavButton HoverColor={theme.color_palette.Info} onClick={e=>window.location.href='/Auth/Signup'}>Sign Up</NavButton>
            </FeatureWrapper>)}
        </Nav>
    )
}

export default Navbar;