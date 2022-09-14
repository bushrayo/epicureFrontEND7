import styled from 'styled-components';
import {Link} from "react-router-dom";

interface imageSRCprops{
    chefImage?: string;
   }

export const Body = styled.div`
 margin:0;
 display:flex; 
 flex-direction:column; 
 width: 90%;
 text-align: left;
 margin-left: 7%;
 margin-Right: 10%;
 background: #FFFFFF;
 //background: #E5E5E5;
 border-top-style: solid;
 border-top-color: #efeae8;
 @media (min-width: 768px) {
    display:flex; 
    flex-wrap: wrap;
    margin-bottom: 1vh;
    
  }
`;

export const AddressDiv = styled.div`
 text-align: left;
 margin-bottom: 5%;
`;
export const Address = styled.h2`
    margin-top: 2%;
    width: 100vw;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 150;
    letter-spacing: 1.97px;
    color: #000000;
    text-transform: uppercase;
   // font-size: 3.5vw;
    // @media (min-width: 768px) {
    //     font-size: large;
    //   }
    
`;
export const NavDiv = styled.div`
 width: 100%;
 margin-bottom: 6vw;
 
`;
export const MachChefsDiv = styled.div`
 //width: 25%;
 @media (min-width: 768px) {
    display:flex; 
    flex-wrap: wrap;
    
  }
 
`;

export const ChefImageDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.chefImage});
background-repeat:no-repeat;
background-size: cover;
width: 80vw;
height: 25vh;
margin-bottom: 5vh;
@media (min-width: 768px) {
     height: 30vw;
    width: 25vw; 
    margin-right:3vw;
    //margin-bottom: 5vh;
    }
`;
export const ChefNameBlock = styled.div`
display: flex;
position: relative;
width: 80vw;   
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
    width: 25vw; 
    margin-right:4vw;
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

