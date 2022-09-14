import styled from 'styled-components';
interface imageSRCprops{
    srcImage?: string;
   }
export const Body = styled.div`
display : flex;
flex-direction: column;
width: 100%;
height: 40vh;
margin: 0 auto;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
margin-bottom: 2%;
padding: 1% 1% ;    
margin-right: 10%;
@media (min-width: 768px) {
    width: 10vw;
    height: 60vh;
    margin-right: 5vw;
    margin-top: 10%;
          }

`;
export const ImageDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.srcImage});
background-repeat:no-repeat;
background-size: cover;
//background-size: 100% auto;
width: 50vw;
height: 25vh;
@media (min-width: 768px) {
    width: 27vw;
    height: 30vh;
    margin-right: 9vw;
  }

`;

export const Details = styled.div`
height: 15vh;
width: 50vw;
display: flex;
flex-direction: column;
align-items: flex-start;
background: #F9F4EA;
@media (min-width: 768px) {
    width: 27vw;
    height: 24vh;
    margin-right: 9vw;
  }
`;
export const TextDiv = styled.div`
margin-top: 3%;
margin-left:2%;
@media (min-width: 768px) {
    margin-top: 1%;
  }
`;
export const Text = styled.h2`
    margin-top: 1%;
    width: 50vw;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 150;
    letter-spacing: 1.97px;
    color: #000000;
`;
export const SText = styled.h4`
    margin-top: 1%;
    width: 50vw;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 100;
    letter-spacing: 1.97px;
    color: #000000;
`;
