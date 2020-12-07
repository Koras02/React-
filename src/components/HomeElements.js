import styled from 'styled-components';

 
export const VideoBg = styled.video `
  width: 80%;
  height: 100%;
  object-fit: cover;
  display:flex;
  background: #232a34;
`;

export const VideoP1 = styled.div`
  width:80%;
  color:red;
  position:absolute;
  left:37%;
  top:25%;
  font:bold 75px/30px arial;

  @media screen and (max-width:960px){
      font:bold 12px/24px arial;
`


export const VideoHeader = styled.div`
  width:100%;

`