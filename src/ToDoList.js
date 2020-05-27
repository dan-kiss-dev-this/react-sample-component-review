import React from 'react';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ['eat', 'drink', 'be merry'],
      newTodo: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ toDoList: [...this.state.toDoList, this.state.newTodo] })
    console.log(11, e.target.value)
  }

  makeToDo = (e) => this.setState({ newTodo: e.target.value })

  render() {
    const { toDoList } = this.state;
    return (
      <div>
        <p>To do list</p>
        <div>
          {toDoList.map((element, index) => <p key={index}>{element}</p>)}
        </div>
        <form>
          <label>Add to list</label>
          <input type="text" onChange={this.makeToDo} />
          <input type="button" onClick={this.handleSubmit} value="Add" />
        </form>
      </div>
    )
  }

}
