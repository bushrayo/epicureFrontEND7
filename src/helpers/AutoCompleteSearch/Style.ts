import styled from 'styled-components';

export const ResultTable = styled.table`
text-align: left;
`;
export const ResultTableTD = styled.td`
border: 1px solid #ddd;
padding: 8px;
`;

export const ResultTableTR = styled.tr`
&:nth-child(even){
    background-color: #f2f2f2;
}
&:hover {
    background-color: #ddd;
  }
text-align: left;
`;