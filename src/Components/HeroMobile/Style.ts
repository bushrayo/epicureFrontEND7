import styled from 'styled-components';

interface imageSRCprops{
    srcImage?: string;
    searchIcon?: string;
}

export const Body = styled.div<imageSRCprops>`
display : flex;
flex-direction: column;
width: 100%;
//height: 25vh;
min-height: 25vh;
margin: 0 auto;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
margin-bottom: 10%;
border: 1px solid;
background-image: url(${props => props.srcImage});
background-repeat: no-repeat;
background-size:100vw;
@media (min-width: 768px) {
    min-height:60vh;
  }
`;
export const SearchBlock = styled.div`
//height: 70%;
width: 70%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1% 1%;
gap: 1%;
margin-top: 3%;
margin-bottom: 2%;
background: rgba(255, 255, 255, 0.88);
@media (min-width: 768px) {
    //height:15vh;
    width:40%;
  }
`;

export const TextHeader=styled.h1`
    margin-top: 2%;
    width: 80%;
    display: block;
    padding-top: 2%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
    color: #000000;
    @media (min-width: 768px) {
        //height:15vh;
        width:60%;
      }
`;
export const Input = styled.input<imageSRCprops>`
width: 90%;
height: 3vh;
margin-bottom: 3%;
border: 1px solid;
background-image: url(${props => props.searchIcon});
background-position:left ;   
background-repeat:no-repeat;
margin-top: 5%;   
@media (min-width: 768px) {
    width:70%;
    margin-top: 0%;
  }

`;
export const Result = styled.div`
margin-top: 5%;
border:px solid;
align-items: center;

`;
