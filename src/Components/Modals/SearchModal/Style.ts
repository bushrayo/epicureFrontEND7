import styled from 'styled-components';


export const Body = styled.div`
display : flex;
flex-direction: column;
width: 100%;
margin: 0 auto;
position: fixed;    
 width: 100vw; 
 //top: 0;
 //left: 0;
 background: #FFFFFF;
 margin-bottom: 1%;
 min-height: 60vh;
 z-index:10000;
 @media (min-width: 768px) {
    // width: 50vw;
    // right: 0;
    // margin-top: 0%;
    width: 50%;
    top: 20;
   left: 25%;
  }

`;
export const Header = styled.div`
display : flex;
flex-direction: row;
justify-content: space-around;
top: 0;
left: 0;
width: 60%;


`;

export const Button = styled.button`
    margin-top: 1%;
    margin-left: 1%;
    border: none;
    background: none;
    `;

export const Address = styled.h3`
justify-content: center;

`;

export const SearchDiv = styled.div`
//width: 90vw;
display : flex;
flex-direction: column;
margin-top: 5%;
text-align: center;
justify-content: center;
align-items: center;

`;
export const Input = styled.input`
//width: 80vw;
height: 3vh;
margin-bottom: 3%;
border: 1px solid;
background-image:url("./Assets/images/searchIcon.svg");   
background-position:left ;   
background-repeat:no-repeat;   


`;

export const Result = styled.div`
margin-top: 5%;
border:px solid;
align-items: center;

`;





