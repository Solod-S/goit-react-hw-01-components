import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import {
  StatisticsCard,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';
export const Statisics = ({ title, data }) => {
  // const { id, label, percentage } = data;
  return (
    <StatisticsCard>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {data.map(({ id, label, percentage }) => (
          <Box bg={getRandomHexColor()} key={id}>
            <StatisticsItem>
              <StatisticsLabel>{label}</StatisticsLabel>
              <StatisticsPercentage>{percentage}%</StatisticsPercentage>
            </StatisticsItem>
          </Box>
        ))}
      </StatisticsList>
    </StatisticsCard>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statisics.prototypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
