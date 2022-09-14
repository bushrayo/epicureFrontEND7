import styled from 'styled-components';
import {Link} from "react-router-dom";

interface imageSRCprops{
    srcImage?: string;
   }

export const Navbar = styled.div`
    margin: 0;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    font-family: Arial, Helvetica, sans-serif;    
    padding: 1% 1% ;
    width: 100%;
    height: 10vh;
    background: #FFFFFF;
    align-items: center; 
    //margin-bottom: 1%;
    
`;

export const RightIcons = styled.div`
padding-right: 3%;
display:flex;
flex-direction:row;
justify-content:space-around;
    
`;

export const Links = styled(Link)`
    color:black;
    width: 100%;    
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 1vw;
    ;`

    export const LeftIcons = styled.div`
    display : flex;
    justify-content: center;
    height: 6vh;
    margin-right: 35vw;
    align-items: center;
        
`;
    export const IconsLinks = styled(Links)`
    margin-left: 1%;
`;


export const Block=styled.div`
display: block;

`;


export const LogoDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.srcImage});
background-repeat:no-repeat;
background-size: cover;
width: 20px;
height: 20px;
margin-right: 2%;
`;
export const EpicureDiv = styled(LogoDiv)`
width: 120px;
height: 18px;

`;
export const EpicureImage = styled.img`
`;

export const LogoImage = styled.img`
`;