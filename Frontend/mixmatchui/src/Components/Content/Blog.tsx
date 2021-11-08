import styled from "styled-components";
import { Image } from "../Common";

export const BlogContainer  = styled.div`
  display: flex;
  height:auto;
  margin: 2vmin;
  flex-direction: column;
  border:3px solid ${props=>props.theme.color_palette.Dark};
  width: 90%;
  padding:1vmin;
  @media all and (max-height:800px){
    flex-direction:column;
  }
`
export const BlogImage = styled(Image)`
  width: 100%;
  height:100%;
  overflow: hidden;
  position: center center;
`
export const BlogTitle = styled.div`
  display: flexbox;
  font-size:3vmin;
  background-color:#fffffacf;
  color:${props=>props.theme.color_palette.Info};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position:absolute;
  opacity: 1;
  bottom:0;
  padding-bottom: 5px;
  @media all and (max-height:1000px){
    font-size: 4vmin;
  }
  transition:linear 500ms;
`

export const BlogContent = styled.div`
  font-size:2vmin;
  position: absolute;
  bottom:0;
  opacity: 0;
  display: flexbox;
  visibility: hidden;
  z-index:2;
  width:100%;
  height:auto;
  overflow: hidden;
  background-color: #ffffff;
  transition: ease-in-out 500ms;
  @media all and (max-height:1000px){
    font-size: 3vmin;
  }
`

export const BlogImageContainer = styled.div`
  z-index:1;
  width: 100%;
  position:relative;
  height:auto;
  overflow:hidden;
  position: center center;
  &:hover {
    ${BlogTitle}{
      bottom:90%;
      height:auto;
    }
    ${BlogContent}{
      visibility: visible;
      opacity: 1;
    }
  }
`
