import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Component } from 'react';

export class App extends Component {
   state = {
    good: 0,
    neutral: 0,
    bad: 0
   };
  
  onLeaveFeedback = (option) => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    })
  };
   
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const sum = this.state.good + this.state.neutral + this.state.bad;
    return Math.round(this.state.good / sum * 100);
  };
  
  render() {
     const { good, neutral, bad } = this.state; 

    return <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>

      <Section title='Statistics'>
        {this.countTotalFeedback() > 0 ?
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
          : <Notification message="There is no feedback"></Notification>
        }
      </Section>
    </>
  };
};
