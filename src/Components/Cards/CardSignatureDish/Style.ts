import styled from 'styled-components';
interface imageSRCprops{
    srcImage? : string;
    shekelIcon? : string;
    type? : string;
   }
export const Body = styled.div`
display : flex;
flex-direction: column;
width: 100%;
height: 60vh;
margin: 0 auto;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
margin-bottom: 10%;
padding: 1% 1% ;    
margin-right: 10%;
@media (min-width: 768px) {
    width: 10vw;
    height: 70vh;
    margin-right: 5vw;
    margin-top:10vh;
    
  }
`;
export const ImageDiv = styled.div<imageSRCprops>`
background-image: url(${props => props.srcImage});
background-repeat:no-repeat;
background-size: cover;
width: 50vw;
height: 25vh;
@media (min-width: 768px) {
    width: 27vw;
    height: 35vh;
    margin-right: 9vw;
  }

`;

export const Details = styled.div`
    width: 50vw;
    height: 30vh;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    letter-spacing: 1.97px;
    color: #000000;
    background: #F9F4EA;
    @media (min-width: 768px) {
        width: 27vw;
        height: 35vh;
        margin-right: 9vw;
        align-items: center;              
        justify-items: center;
        text-align:center;
         }
`;
export const TextDiv = styled.div`
width: 100%;
margin-top: 3%;
@media (min-width: 768px) {
    margin-top: 1%;
    width: 25vw;
    height: 7vh;
  }
`;
export const TextDivDescription = styled(TextDiv)`

@media (min-width: 768px) {
    height: 13vh;
  }
`;
export const Text = styled.h2`
    margin-top: 2%;
    width: 50vw;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    letter-spacing: 1.97px;
    color: #000000;
    @media (min-width: 768px) {
        margin-top: 1%;
        width: 25vw;
       
      }
`;

export const SText = styled.h4`
    margin-top: 2%;
    width: 50vw;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 150;
    letter-spacing: 1.97px;
    color: #000000;
    @media (min-width: 768px) {
        margin-top: 1%;
        width: 25vw;
      }
    
`;

export const ShekelText = styled(SText)`
height: 3vh;
width: 5vw;
margin-left: 1vw;
   
`;
export const ButtomDiv = styled.div`
display : flex;
flex-direction: column;
//position: absolute;
//bottom: 4vh;

@media (min-width: 768px) {
    //display: none;
    
  }

`;


export const SpicyIcon = styled.div<imageSRCprops>`
background-image: url(${props => props.type});
background-repeat:no-repeat;
width: 7vw;
height:7vw;
margin-bottom:3vh;
margin-left: 2vw;
@media (min-width: 768px) {
    position: relative;
    margin-top:10vh; 
    //height:4vh;
    
    
  }
`;

export const PriceDiv = styled.div`
width: 30vw;
display : flex;
flex-direction: row;
align-items: left;
justify-content: flex-start;

margin-left: 2vw;
@media (min-width: 768px) {
    display: none;
    
  }

`;