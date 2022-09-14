import styled from 'styled-components';

export const Body = styled.div`
display : flex;
flex-direction: column;
width: 100%;
height: 45vh;
margin: 0 auto;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
margin-bottom: 10%;

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
    text-transform: uppercase;
    @media (min-width: 768px) {
        text-align: center;
        margin-bottom: 5%;
      }
`;

export const CaruselaDiv=styled.div`
width: 95%;
height: 40vh;

`;
