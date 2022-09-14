import styled from 'styled-components';

interface imageSRCprops{
  src?: string;
}

export const Body = styled.div`
display : flex;
flex-direction: column;
margin: 0 auto;
position: absolute; 
//position: relative;   
 width: 100vw; 
//  margin-left: 2%;
//  margin-right: 4%;
background: #FAFAFA;
 min-height: 40vh;
 align-items: center;
//justify-content: center;
order: 1;
@media (min-width: 768px) {
  width: 50vw;
  top: 20;
  right: 0;
}

`;


export const BagDiv = styled.div`
display : flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
`;


export const OrderBody = styled.div`
display : flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
margin-top: 3%;
`;
export const BagImage = styled.div<imageSRCprops>`
  background-image: url(${props => props.src});
  background-position:center ;
  width: 15vw;    
  height: 7vh;
  background-repeat:no-repeat;
  align-self: center; 
  justify-content: center;
    
`;
export const BagDetailsDiv = styled.div`
  width: 10vw;    
  height: 5vh;
  align-self: center;  
  justify-content: center;
   
`;
export const BagDetailsTitle = styled.h2`
justify-content: center;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: black;
   
`;


export const Address = styled.h1`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: black;
   
`;
export const Total = styled(Address)`
`;
export const CHECKOUT = styled.button`
background: black;
border: none;
color: white;
width: 25vw;
height: 7vw;
@media (min-width: 768px) {
  width: 20vw;
  height: 3vw;
 }
`

export const BottomDiv = styled.div`


`;
export const EmptyDiv = styled.div`
height: 3vh;
width: 100vw;
`;