import styled from "styled-components";

interface ImageProps{
    BorderRadius?:string
}

export const Image = styled.img<ImageProps>`
    border-radius: ${props=>props.BorderRadius};
    -webkit-user-drag: none;
    user-select: none;
`

