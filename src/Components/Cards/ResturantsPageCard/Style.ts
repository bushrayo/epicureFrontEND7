import styled from 'styled-components';
interface imageSRCprops{
    srcImage?: string;
   }
export const Body = styled.div`
display : flex;
flex-direction: column;
width: 100%;
//height: 95vh;
margin: 0 auto;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
padding: 1% 1% ;    
margin-right: 10%;
margin-bottom: 50px;
@media (min-width: 768px) {
    width: 20vw;
    margin-right: 4vw;
    
  }
`;
export const ImageDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.srcImage});
background-repeat:no-repeat;
background-size: cover;
//background-size: 100% auto;
width: 100%;
height: 25vh;

`;

export const Details = styled.div`
//height: 17vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
background: #F9F4EA;
`;
export const TextDiv = styled.div`
margin-top: 5%;
margin-left: 5%;
`;
export const Text = styled.h2`
    margin-top: 2%;
    width: 100%;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 150;
    letter-spacing: 1.97px;
    color: #000000;
`;
export const SText = styled.h4`
    margin-top: 2%;
    width: 100%;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 100;
    letter-spacing: 1.97px;
    color: #000000;
`;
