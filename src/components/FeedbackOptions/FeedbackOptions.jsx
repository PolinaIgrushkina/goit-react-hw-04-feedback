function FeedbackOptions({ onLeaveFeedback, options }) {
  return <>
      {options.map((option, index) =>
        (< button key={index} onClick={() => onLeaveFeedback(option)}>{option}</button>)
    )}
    </>
}

export default FeedbackOptions;