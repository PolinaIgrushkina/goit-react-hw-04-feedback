import PropTypes from 'prop-types';
import { DivOfButtons, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ onLeaveFeedback, options }) {
  return (<DivOfButtons>
      {options.map((option) =>
        (< Button key={option} onClick={() => onLeaveFeedback(option)} type='button'>{option}</Button>)
    )}
    </DivOfButtons>)
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FeedbackOptions;