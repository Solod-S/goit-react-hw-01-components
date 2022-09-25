import styled from 'styled-components';
export const StatisticsCard = styled.section`
  margin-bottom: ${p => p.theme.space[5]}px;
  cursor: pointer;
  transition: transform 250ms linear;
  background-color: ${p => p.theme.colors.white};
  :hover {
    transform: scale(1.1);
  }
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const StatisticsTitle = styled.h2`
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const StatisticsList = styled.ul`
  display: flex;
`;
export const StatisticsItem = styled.li`
  text-align: center;
  width: 50px;
`;
export const StatisticsLabel = styled.p`
  font-weight: ${p => p.theme.fontWeight.bolt};
`;
export const StatisticsPercentage = styled.p`
  font-weight: ${p => p.theme.fontWeight.bolt};
`;
