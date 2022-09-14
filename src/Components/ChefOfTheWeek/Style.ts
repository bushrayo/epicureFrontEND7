import styled from 'styled-components';
interface imageSRCprops{
    chefImage?: string;
   }
export const Body = styled.div`
display : flex;
flex-direction: column;
width: 100%;
height: 75vh;
margin: 0 auto;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
margin-bottom: 20vw;
margin-top: 20vh;

`;

export const ChefDetails = styled.div`
display : flex;
flex-direction: column;
width: 100%;
margin: 0 auto;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
margin-bottom: 0%;
margin-top: 3vh;
@media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    //height: 10vw;
    width: 90vw; 
    }

`;
export const TextHeader=styled.h1`
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
    height: 5vh;
    text-align: left;
    margin-left: 5%;
  
`;

export const ChefImageDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.chefImage});
background-repeat:no-repeat;
background-size: cover;
width: 80vw;
height: 25vh;
@media (min-width: 768px) {
     height: 30vw;
    width: 40vw; 
    margin-right:5vw;
    }
`;
export const ChefNameBlock = styled.div`
display: flex;
position: relative;
width: 100%;    
 background: rgba(255, 255, 255, 0.8);
height: 5vh;
top: 80%;
text-align: center;
align-items: center;
align-content: center;
justify-content: center;
@media (min-width: 768px) {
    top: 90%;
    height:5vh;
   }

`;
export const ChefName=styled.h1`
margin-top: 2%;
margin-bottom: 3%;
width: 100%;
height: 10%;
display: block;
padding-top: 2%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 10px;
letter-spacing: 1.97px;
color: #000000;

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
@media (min-width: 768px) {
    height: 30vw;
    width: 50vw; 
    }
`;


export const CaruselaDiv=styled.div`
width: 95%;
height: 55vh;

`;

export const DesktopChefOfTheWeek = styled.div`
display : flex;
flex-direction: row;
width: 90%;
height: 45vh;
margin: 0 auto;
align-items: center;
align-content: center;
justify-content: flex-start;
margin-bottom: 3%;

`;
