import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Body = styled.div`
 margin:0;
 display:flex; 
 flex-direction:column; 
 text-align: left;
`;
export const Navbar = styled.nav`
width :100%;

`;

export const NavLink = styled(Link)`
    padding-top: 1.5%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 150;
    font-size: 3.5vw;
    line-height: 16px;
    letter-spacing: 1.5px;
    color: black;
    text-decoration: none;
    margin-right: 8vw;    
    cursor: pointer;
     &:hover {
        font-weight: bold;
      }
      @media (min-width: 768px) {
        font-size: large;
          }    
    ;`
  
    export const LastLink = styled(NavLink)`
    margin-right: 1vw; 
    `;