import styled from 'styled-components';
interface imageSRCprops{
    logo?: string;
    }
export const DesktopBody = styled.div`
display : flex;
flex-direction: row;
width: 95%;
//height: 120vh;
margin: 0 auto;
justify-content: space-between;
justify-items: center;
margin-bottom: 3vh;
margin-left: 2%;
background: #FAFAFA;
`;

export const LeftSide = styled.div`
display : flex;
flex-direction: column;
width: 60%;
//height: 120vh;
margin: 0 auto;
justify-content: left;
justify-items: left;
margin-bottom: 3vh;
margin-left: 2%;
margin-right: 5%;
`;
export const RightSide = styled.div`
display : flex;
flex-direction: column;
width: 25%;
height: 40vh;
margin: 0 auto;
justify-content: center;
justify-items: center;
align-items:center;
margin-bottom: 3vh;
margin-left: 2%;
`;
export const DesktopImageDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.logo});
background-repeat:no-repeat;
background-size: cover;
width: 25vw;
height: 7vw;
margin-bottom: 4%;
`;
export const DesktopImage = styled.img`
margin-bottom: 4%;
width: 30vw;
`;

export const DesktopIconDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.logo});
background-repeat:no-repeat;
background-size: cover;
width: 15vw;
height: 15vw;
margin-bottom: 4%;
`;
export const DesktopAddress=styled.h1`
margin-top: 2%;
width: 60%;     
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

export const DesktopParagraph=styled.p`
margin-top: 2%;
margin-bottom: 3%;
width: 100%;
padding-top: 2%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 5vw;
letter-spacing: 1.97px;
color: #000000;
`;

