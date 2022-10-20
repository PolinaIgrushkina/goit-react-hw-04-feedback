import PropTypes from 'prop-types';
import { List, ItemGood, ItemNeutral, ItemBad } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return <List>
        <ItemGood>Good: {good}</ItemGood>
        <ItemNeutral>Neutral: {neutral}</ItemNeutral>
        <ItemBad>Bad: {bad}</ItemBad>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage} %</li>
      </List>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;


