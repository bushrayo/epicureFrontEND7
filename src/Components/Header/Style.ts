import styled from 'styled-components';
import {Link} from "react-router-dom";


export const Navbar = styled.div`
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    flex-direction:row;
    padding: 1% 1% ;
    width: 95vw;
    height: 5vh;
    background: #FFFFFF;
    align-items: center;
    
    
`;

export const Dropdown = styled.div`
   
    display: flex;
    align-items: center;
    padding-left: 4%;
    text-align: left;

`; 
    
interface Props{
    Display?: boolean;
}
export const DropdownContent = styled.div< Props>`
    display: ${props => props.Display ? 'flex' : 'none'};
    position: fixed;  
    flex-direction: column;
    justify-items: left;
    justify-content: left;
    margin: 0 auto;
    width: 100vw; 
    top: 1%;
    left: 5%;
    background: #FFFFFF;
    z-index:10000;
   `;

export const Button = styled.div`
width: 100vw;
height: 4vh;
margin-top: 1%;
margin-left: 1%;
`;

export const Icons = styled.div`
margin-right: 50%;
padding-right: 5%;
display:flex;
flex-direction:row;
justify-content:space-around;
    
`;

export const DropdownLinks = styled(Link)`
    color:black;
    width: 100%;    
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 3vw;
    ;`

    export const LogoDiv = styled.div`
    display : flex;
    justify-content: center;
    
`;
    export const IconsLinks = styled(DropdownLinks)`
    margin-left: 1%;
`;


export const Block=styled.div`
display: block;

`;

export const Line=styled.h1`
width: 100vw;
height: 0px;
border: 1px solid #F2F2F2;

`;
