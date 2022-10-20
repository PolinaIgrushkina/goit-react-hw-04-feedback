import PropTypes from 'prop-types';

function FeedbackOptions({ onLeaveFeedback, options }) {
  return <>
      {options.map((option, index) =>
        (< button key={index} onClick={() => onLeaveFeedback(option)} type='button'>{option}</button>)
    )}
    </>
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}

export default FeedbackOptions;