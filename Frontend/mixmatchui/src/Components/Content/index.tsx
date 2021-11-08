import styled from "styled-components"
import { BlogContainer } from "./Blog"

export const ContentContainer = styled.div`
  margin: 2vmin 0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size:2.5vh;
  width: 60vw;
  background-color: ${props=>props.theme.color_palette.Light};
  @media all and (max-width:600px){
    width:85vw;
  }
`

export { BlogContainer }