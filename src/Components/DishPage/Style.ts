import styled from 'styled-components';
interface imageSRCprops{
    srcImage?: string;
    }

export const Body = styled.div`
display : flex;
flex-direction: column;
width: 94%;
margin: 0 auto;
//position: fixed;    
 background: #FFFFFF;
 margin-bottom: 1%;
 margin-right:3%;
 margin-left:3%;
 

 @media (min-width: 768px) {
  width: 50vw;
  margin-top:2vh;
  margin-right:25%;
 margin-left:25%;
  // top: 7vw;
  // left: 25vw;    
}
`;
export const Header = styled.div`
 top: 0;
 left: 0;
width: 100%;
`;
export const ImageDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.srcImage});
background-repeat:no-repeat;
background-size: cover;
//background-size: 100% auto;
width: 94%;
height: 25vh;
@media (min-width: 768px) {
  width: 90%;
     
}
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

export const Details = styled.div`
    width: 90%;
    margin-left: 2%;
    margin-right:2%;
    //height: 30vh;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    letter-spacing: 1.97px;
    color: #000000;
    @media (min-width: 768px) {
      
         }
`;
export const TextDiv = styled.div`
width: 100%;
margin-top: 3%;
@media (min-width: 768px) {
    
  }
`;
export const TextDivDescription = styled(TextDiv)`

@media (min-width: 768px) {
    
  }
`;
export const Text = styled.h2`
    margin-top: 2%;
    width: 90%vw;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
   // font-weight: 200;
    letter-spacing: 1.97px;
    color: #000000;
    font-weight: 400;
    font-size: 18px;  
    
    @media (min-width: 768px) {
        margin-top: 1%;
        //width: 25vw;
       
      }
`;

export const SText = styled.h4`
    margin-top: 2%;
    width: 90%;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    letter-spacing: 1.97px;
    color: #000000;
    font-weight: 200;
    font-size: 16px;
    line-height: 18px;
    @media (min-width: 768px) {
        margin-top: 1%;
       // width: 25vw;
      }    
`;

export const ChooseP = styled.p`    
margin-bottom: 0%;
text-align: left;
`;
export const ChooseSide = styled.div`
width: 100%;
margin-top: 3%;

@media (min-width: 768px) {
    margin-top: 1%;
    //width: 25vw;
   // height: 7vh;
  }
`;

export const Changes = styled.div`
width: 100%;
margin-top: 3%;

@media (min-width: 768px) {
    margin-top: 1%;
    //width: 25vw;
    //height: 7vh;
  }
`;
export const Quantity = styled.div`
width: 100%;
margin-top: 3%;
display: flex;
flex-direction: row;
//margin-bottom: 2%;

@media (min-width: 768px) {
    margin-top: 1%;
    //width: 25vw;
    //height: 7vh;
  }
`;
export const AmountNumber = styled.p`
`
export const AmountButton = styled.button`
background: none;
border: none;
`
//export const Form = styled.form`
export const Form = styled.div`
display : flex;
//align-items: center;
flex-direction: column;
//justify-content: center;
width: 100%;
margin-top: 5%;
text-align: left;

`;
export const AddToBagButton = styled.button`
background: black;
border: none;
color: white;
width: 25vw;
height: 7vw;
@media (min-width: 768px) {
 width: 15vw;
 height: 4vw;
  }  
`



