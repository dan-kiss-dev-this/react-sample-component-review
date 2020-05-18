import React from 'react';

// export default function MyChild(props) {
//   return (
//     <>
//       <div>hey whats up, the number is {props.number}</div>
//     </>
//   )
// }

export default class MyChild extends React.Component {
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
        <div onClick={this.props.setNumber}>hey whats up, the number is {this.props.number}</div>
        <div onClick={this.changeAnswer}>Answer is {answer}</div>
      </>
    );
  }
}