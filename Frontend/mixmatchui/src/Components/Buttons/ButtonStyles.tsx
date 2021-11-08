import styled from 'styled-components'

interface NavbuttonProps {
  Primary?: boolean,
  Margin?:string,
  HoverColor:string
}

interface NavWrapperProps{
  MarginLeft?:string,
  Padding?:string
}

export const FeatureWrapper = styled.section<NavWrapperProps>`
  display: inline-flex;
  font-size:inherit;
  justify-content: center;
  align-items: center;
  margin-left: ${props=>props.MarginLeft};
  padding: ${props=>props.Padding};
`
// The FeatureButton component will render the button with thestyles below
export const NavButton = styled.button<NavbuttonProps>`
  border-radius: 12px;
  margin: 0.5vw;
  background-color: ${props=>props.theme.color_palette.Primary_Button};
  color: ${props=>props.theme.color_palette.Primary};
  padding: 6px 6px;
  font-size: inherit;
  cursor: pointer;
  border:1px solid ${props=>props.theme.color_palette.Secondary};
  transition: 1s;
  &:hover {
    background-color: ${props=>props.theme.color_palette.Secondary};
    color: ${props=>props.HoverColor};
  }
  &:active{
    margin: 0.25vw;
    border: 0.25vw solid ${props=>props.HoverColor};
    transition: 0s;
  }
`
