import PropTypes from 'prop-types';
import { DivOfButtons, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ onLeaveFeedback, options }) {
  return <DivOfButtons>
      {options.map((option, index) =>
        (< Button key={index} onClick={() => onLeaveFeedback(option)} type='button'>{option}</Button>)
    )}
    </DivOfButtons>
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}

export default FeedbackOptions;