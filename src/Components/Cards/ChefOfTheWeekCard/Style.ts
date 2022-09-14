import styled from 'styled-components';
interface imageSRCprops{
    srcImage?: string;
   }
export const Body = styled.div`
display : flex;
flex-direction: column;
width: 100%;
height: 35vh;
margin: 0 auto;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
margin-bottom: 10%;
padding: 1% 1% ;    
margin-right: 10%;
@media (min-width: 768px) {
    width: 20vw;
    height: 20vw;
    margin-right: 1vw;
    margin-top: 1%;
    margin-bottom: 1vh;
  }
`;
export const ImageDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.srcImage});
background-repeat:no-repeat;
background-size: cover;
width: 50vw;
height: 25vh;
@media (min-width: 768px) {
    width: 20vw;
    height: 35vw;
    margin-right: 9vw;
  }
`;

export const Details = styled.div`
height: 10vh;
width: 50vw;
display: flex;
flex-direction: column;
align-items: flex-start;
background: #F9F4EA;
@media (min-width: 768px) {
    width: 20vw;
    height: 22vh;
    margin-right: 9vw;
  }
`;
export const Text = styled.h2`
    margin-top: 3%;
    width: 50vw;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    letter-spacing: 1.97px;
    color: #000000;
    @media (min-width: 768px) {
        width: 20vw;
      }
`;

