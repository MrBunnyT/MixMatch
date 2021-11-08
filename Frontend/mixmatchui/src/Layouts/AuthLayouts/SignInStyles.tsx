import styled, { css } from 'styled-components'
import { FlexWrapper } from '../../Components/Common/Wrappers'
import ThemeInterface from '../../Interfaces/ThemeInterface'

interface InputProps {
  theme: ThemeInterface,
  isFilled:boolean
}

export interface SignInComponentProps {
  theme: ThemeInterface
}
export const SignInWrapper = styled(FlexWrapper)`
  height: 90vh;
`
export const SignIn = styled('div')`
  border-radius: 1%;
  height: 50vh;
  width: 20vw;
  overflow-x: auto;
  padding: 4vw;
  background-color: white;
  font-size: 3vh;
  @media all and (max-width: 1000px) {
    width: 40vw;
  }
  @media all and (max-width: 600px) {
    width: 80vw;
  }
`
export const SignInLabel = styled('div')`
  font-size: 6vh;
  padding-bottom: 2vh;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.color_palette.Primary};
  border-bottom: 1px solid ${(props) => props.theme.color_palette.Dark};
`
export const Input = styled('div')`
  position: relative;
  display: flex;
  margin-top: 5vh;
  width: 100%;
  font-size: inherit;
`
export const InputNames = styled('label')`
  z-index: 0;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out;
  font-size: inherit;
  color: ${(props) => props.theme.color_palette.Dark};
`
export const InputFields = styled('input')<InputProps>`
  z-index: 1;
  font-size: 2vh;
  background-color: transparent;
  position: relative;
  border: none;
  padding-bottom: 1vh;
  outline: none;
  color: ${(props) => props.theme.color_palette.Primary};
  width: 100%;
  border-bottom: 2px solid grey;
  &:focus {
    border-bottom: 3px solid ${(props) => props.theme.color_palette.Info};
  }
  &:focus ~ ${InputNames} {
    color: ${(props) => props.theme.color_palette.Info};
    transform: translateY(-150%);
  }
  background-color:${props=>props.value};
  ${(props) =>
    props.isFilled &&
    css`
      & ~ ${InputNames}{
        color: ${(props) => props.theme.color_palette.Info};
        transform: translateY(-150%);
      }
    `}
`

export const SignInLinks = styled('a')`
  cursor: pointer;
  margin-top: 2vh;
  font-size: 2vh;
  color: ${(props) => props.theme.color_palette.Info};
  padding: 2px;
  border-radius: 5%;
  &:hover {
    filter: brightness(0.85);
    background-color: ${(props) => props.theme.color_palette.Light};
  }
`

export const SignInButton = styled('button')`
  margin: 3vh auto;
  margin-bottom: 0;
  font-size: 2vh;
  background-color: transparent;
  color: ${(props) => props.theme.color_palette.Primary};
  border: 3px solid ${(props) => props.theme.color_palette.Primary};
  border-radius: calc(10vw + 3vh);
  width: 20vw;
  height: 6vh;
  &:hover {
    background-color: ${(props) => props.theme.color_palette.Primary};
    color: ${(props) => props.theme.color_palette.Light};
  }
`
