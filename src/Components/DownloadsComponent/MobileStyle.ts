import styled from 'styled-components';
interface imageSRCprops{
    logo?: string;
    }
export const Body = styled.div`
display : flex;
flex-direction: column;
width: 90%;
//height: 60vh;
margin: 0 auto;
justify-content: left;
justify-items: left;
margin-bottom: 3vh;
margin-left: 2%;
background: #FAFAFA;

`;

export const ImageDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.logo});
background-repeat:no-repeat;
background-size: 30vw 7vh;
width: 30vw;
height: 10vh;
margin-bottom: 4%;
`;
export const MobileImage = styled.img`
margin-bottom: 4%;
width: 30vw;
`;
export const Address=styled.h1`
margin-top: 2%;
width: 90%;     
padding-top: 2%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
letter-spacing: 1.2px;
color: #000000;
text-align: left;
margin-left: 5%;
`;

export const Paragraph=styled.p`
margin-top: 2%;
margin-bottom: 3%;
width: 75vw;
padding-top: 2%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 5vw;
letter-spacing: 1.97px;
color: #000000;
`;

