import styled from 'styled-components';
const clocklogo= "/Assets/images/clockImage.svg";

interface imageSRCprops{
    srcImage?: string;
    //clockImage?: string;
   }
export const Body = styled.div`
display : flex;
flex-direction: column;
width: 96%;
//height: 95vh;
margin: 0 auto;

align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
padding: 1% 1% ;    
margin-right: 10%;
margin-bottom: 1vh;
@media (min-width: 768px) {
    width: 92%;
    margin-right: 4%;
    margin-left: 4%;
    text-align: center;
      }  
`;
export const ImageDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.srcImage});
background-repeat:no-repeat;
background-size: cover;
//background-size: 100% auto;
width: 100%;
height: 25vh;
@media (min-width: 768px) {
    height: 40vh;
      }  

`;

export const Details = styled.div`
height: 17vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 5%;
@media (min-width: 768px) {
    justify-content: center;
    justify-items: center;
    align-items: center;
      }  

`;
export const TextDiv = styled.div`
margin-top: 1%;
//margin-left: 5%;
`;
export const OpenNowDiv = styled.div`
display : flex;
flex-direction: row;
margin-top: 1%;
//margin-left: 5%;
`;

export const ClockImg = styled.img.attrs({src: `${clocklogo}`})`
//width: 5vw;
//heigth: 5vw;
margin-right: 1vw;
`;
export const ClockImg2 = styled.img`
//width: 5vw;
//heigth: 5vw;
margin-right: 1vw;
`;
export const Text = styled.h2`
   // margin-top: 2%;
    width: 100%;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 150;
    letter-spacing: 1.97px;
    color: #000000;
    margin-bottom: 2%;
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
    margin-bottom: 2%;
`;


export const NavDiv = styled.div`
 width: 100%;
 margin-bottom: 1vw; 
`;
export const MachRestaurantsDiv = styled.div`
 width: 100%;
 //height: 60vh;
 @media (min-width: 768px) {
    width: 92%;
    margin-right: 4%;
    margin-left: 4%;
    display:flex; 
    flex-wrap: wrap;
      }  
     

 `;