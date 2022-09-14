import styled from 'styled-components';
interface imageSRCprops{
    srcImage? : string;
    shekelIcon? : string;
    type? : string;
   }
export const Body = styled.div`
display : flex;
flex-direction: row;
width: 86%;
height: 17vh;
margin: 0 auto;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
margin-bottom: 10%;
padding: 1% 1% ;    
margin-right: 10%;
margin-left: 4%;
@media (min-width: 768px) {
    width: 40vw;
    height: 25vh;
    margin-bottom: 3vh;
      
  }
`;
export const ImageDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.srcImage});
background-repeat:no-repeat;
background-size: cover;
width: 40vw;
height: 17vh;
@media (min-width: 768px) { 
   height: 25vh;
   width: 15vw;
  }
`;

export const Details = styled.div`
    display : flex;
    flex-direction: column;
    width: 60vw;
    height: 17vh;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    letter-spacing: 1.97px;
    color: #000000;
    background: #F9F4EA;
    @media (min-width: 768px) {
      height: 25vh;
      width: 25vw;
         }
`;
export const TextDiv = styled.div`
display : flex;
flex-direction: row;
width: 60vw;
margin-left: 3%;
@media (min-width: 768px) {
  //height: 20vh;
  width: 25vw;
  }
`;

export const Text = styled.h2`
    margin-top: 2%;
     padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 150;
    letter-spacing: 1.97px;
    color: #000000;
    @media (min-width: 768px) {
        margin-top: 1%;
           
      }
`;

export const TextName = styled(Text)`
      margin-left: 5vw;
      font-weight: 150;
`;

export const SText = styled.h4`
    margin-top: 2%;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 150;
    letter-spacing: 1.97px;
    color: #000000;
    @media (min-width: 768px) {
        margin-top: 1%;
       }
    
`;

export const ShekelText = styled(SText)`
width: 60vw;
margin-left: 1vw;
   
`;


export const PriceDiv = styled.div`
width: 60vw;
display : flex;
align-items: right;
justify-content: flex-end;

@media (min-width: 768px) {
  //height: 20vh;
  width: 25vw;
    
  }

`;