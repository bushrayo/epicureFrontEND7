import styled from 'styled-components';

interface imageSRCprops{
    srcImage?: string;
    }

export const Body = styled.div<imageSRCprops>`
display : flex;
flex-direction: column;
width: 100%;
margin: 0 auto;
align-items: center;
margin-bottom: 5vh;
background: #FAFAFA; 
//height: 95vh;   

@media (min-width: 768px) {
    //height: 40vw;  
    margin-bottom: 10vh;
  }
`;
export const IconsDiv = styled.div`
//height: 30vw;
width: 30vw;
display : flex;
flex-direction: column;
margin-top: 3%;
margin-bottom: 2%;
text-align: center;
align-items: center;
justify-items:center;

@media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    //height: 10vw;
    width: 90vw; 
    }
`;

export const EachIconsDiv = styled.div`
    display : flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 3%;


`;
export const Text=styled.h3`
    margin-top: 2%;
    width: 40%;
    display: block;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    letter-spacing: 1.97px;
    color: #000000;
    height: 2vh;
   
`;
export const Address=styled.h1`
margin-top: 2%;
margin-bottom: 4%;
`;

export const ImageDiv = styled.div<imageSRCprops>`

width: 40vw;
//height: 20vh;
margin: 0 auto;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
margin-bottom: 3%;
background-image: url(${props => props.srcImage});
background-repeat: no-repeat;
background-size:cover;
@media (min-width: 768px) {
    //height:15vw;
    width: 15vw;
  }
`;
export const IconImage = styled.img`
margin-bottom: 4%;
//width: 30vw;
`;