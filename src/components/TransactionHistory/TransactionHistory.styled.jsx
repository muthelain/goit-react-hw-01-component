import styled from '@emotion/styled';

export const TransactionTable = styled.table`
width: 900px;

margin: auto;

margin-block-start: 0em;
margin-block-end: 0em;
padding-inline-start: 0px;

border-spacing: 0;

box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
  0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const HeadT = styled.thead`

border-spacing: 0;

box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
  0px 2px 1px rgba(0, 0, 0, 0.2);`;
export const HeadUl = styled.tr`
background-color: #5eb8d1;
`;
export const HeadLi = styled.th`
  padding: 10px 5px;
  width: 200px;
  color: white;
  font-weight: 700;

`;


export const BodyT = styled.tbody`
border-spacing: 0;
`;
export const BodyUl = styled.tr`
padding: 10px;


text-align: center;

:nth-of-type(2n){
    background-color: #d4d4d4;
};
`;
export const BodyLi = styled.td`
padding: 10px 5px;
`;