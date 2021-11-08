import styled from 'styled-components';
import SignInBG from '../../Assets/Images/SignInBG.jpg';

export const MyBG = styled('div')`
  min-height: 100%;
  width: 100%;
  background-image: url(${SignInBG});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: ${(props) => props.theme.color_palette.Secondary};
`;
