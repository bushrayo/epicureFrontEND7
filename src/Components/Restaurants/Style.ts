import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Body = styled.div`
 margin:0;
 display:flex; 
 flex-direction:column; 
 width: 92%;
 text-align: left;
 margin-left: 6%;
 margin-Right: 4%;

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
    //text-align: left;
    //font-size: 3.5vw;
`;
export const NavDiv = styled.div`
 width: 100%;
 margin-bottom: 6vw;
 
`;
export const MachRestaurantsDiv = styled.div`
@media (min-width: 768px) {
    display:flex; 
    flex-wrap: wrap;
    
  }
 
`;

