
import styled from 'styled-components';
interface imageSRCprops{
    src?: string;
}


export const Body = styled.div`
display : flex;
flex-direction: column;
width: 95%;
margin: 0 auto;
position: fixed;    
 top: 0;
 left: 0;
 background: #FFFFFF;
 margin-bottom: 1%;
 z-index:10000;
 @media (min-width: 768px) {
  width: 50%;
  top: 20;
 left: 25%;
}
`;
export const Header = styled.div`
display : flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
top: 1%;
left: 1%;
width: 98%;
`;

export const CloseButton = styled.button`
    margin-top: 1%;
    margin-left: 5%;
    border: none;
    background-color: none;
    margin-bottom: 15%;
     `;

    export const Line=styled.h1`
    width: 100vw;
    height: 0px;
    border: 1px solid #F2F2F2;
    `;


    export const AddressDiv = styled.div`
    display : flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    `;
    

export const Address = styled.h2`
    justify-content: center;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;
    color: #000000;

`;
export const AddressParagraph = styled.h3`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;

`;
export const Form = styled.form`
display : flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 100%;
margin-top: 5%;

`;

export const Input = styled.input`
width: 80%;
height: 3vh;
margin-bottom: 3%;
border: 0.5px solid #000000;
height: 5vh;
`;

export const Button = styled.button`
background: #979797;
color: white;
border: 0.5px solid #000000;
margin-bottom: 3%;
width: 40vw;
height: 5vh;

&:hover {
    background-color: black;
  };
  &:focus {
    background-color: black;
  };
  &:active {
    background-color: black;
  };

`;

export const SignUpButton = styled(Button)`
background: white;
color: black;

`;
export const ForgetDiv = styled.div`
    display : flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    `;

export const ForgetButton =  styled(Button)`
    background-color: white;
    border: none;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1.97px;
    color: black;
`;
export const OrLineDiv = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 3%;
    `;

   
export const LineImage = styled.div<imageSRCprops>`
  background-image: url(${props => props.src});
  width: 30vw;
    height: 1px;
    border: 0.5px solid #979797;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 5%;
`;