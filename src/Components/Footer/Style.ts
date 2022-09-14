import styled from 'styled-components';
import {Link} from "react-router-dom";

export const MainDiv = styled.div`
    min-height:50px;
    margin-top:auto;
    //position: absolute;
    bottom:0;
    height: 5vh;
    `;
export const Body = styled.div`
    display:flex;
    flex-direction: column;
    background: #FFFFFF;
    width: 100vw;
    margin-bottom: 5%;
    margin-left: 5%;
    text-align: left;
    @media (min-width: 768px) {
        flex-direction: row;
        width: 90vw;
        height: 5vh;
        align-items:center;
        justify-content:center;
        text-align: center;
          }      
`;
     
export const FooterLink = styled(Link)`
    padding-top: 1.5%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 1.92px;
    color: black;
    text-decoration: none;
    margin: 3vw;    
    ;`





