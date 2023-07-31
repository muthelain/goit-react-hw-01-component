import styled from '@emotion/styled';

export const StatisticSection = styled.section`
width: 450px;
margin: auto;
`;

export const Title = styled.h2`
  font-size: 40px;
  padding: 30px;

  text-align: center;

  background-color: white;

  margin-block-start: 0em;
  margin-block-end: 0em;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-between;

  padding-inline-start: 0px;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

export const StatisticListItem = styled.li`
  display: flex;
align-items: : center;
justify-content: center;
  flex-direction: column;

  gap: 5px;
  padding: 20px;
  width: 50px;

  background-color: ${props => {
    return props.randomColor;
  }};
`;

export const StatisticLabel = styled.span`
  font-size: 20px;
  text-align: center;
  color: white;
`;

export const StatisticPercentage = styled.span`
  font-size: 25px;
  text-align: center;
  color: white;
`;