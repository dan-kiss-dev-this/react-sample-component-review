import React from 'react';
export class MyChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: true }
    this.changeAnswer = this.changeAnswer.bind(this)
  }


  changeAnswer() {
    this.setState({ answer: !this.state.answer })
  }
  // remember in class based components use this.props to access props
  render() {
    const answer = this.state.answer.toString()
    return (
      <>
        <div onClick={this.props.setNumber}>hey whats up, the number is {this.props.number} click here to increase by 1</div>
        <div onClick={this.changeAnswer}>Answer is {answer}</div>
      </>
    );
  }
}

class GrandChild extends MyChild {
  constructor(props) {
    super(props);
    this.state = { answer: true }
  }

  render() {
    const answer = this.state.answer.toString()
    return (
      <>
        <div onClick={this.props.setNumber}>hey whats up, the number is {this.props.number}</div>
        <div onClick={this.changeAnswer}>Answer is {answer}</div>
      </>
    );
  }

}

export default GrandChild