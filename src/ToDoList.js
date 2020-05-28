import React from 'react';
import ReactDOM from 'react-dom';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ['eat', 'drink', 'be merry'],
      newTodo: '',
      open: false,
    }
  }

  // make a modal popup when you click a todo
  // idea could be to hide render div and show alterative one
  onOpen = (item) => {
    console.log(10, Object.assign({}, this.state, { open: true, clickedItem: item }))
    this.setState(Object.assign({}, this.state, { open: true, clickedItem: item }))
  }

  onClose = () => {
    this.setState(Object.assign({}, this.state, { open: false }))
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
          {toDoList.map((element, index) => <p key={index} onClick={() => this.onOpen(element)}>{element}</p>)}
        </div>
        <form>
          <label>Add to list</label>
          <input type="text" onChange={this.makeToDo} />
          <input type="button" onClick={this.handleSubmit} value="Add" />
          <Modal
            open={this.state.open}
            onClose={this.onClose}
            content={this.state.clickedItem}
          />
        </form>
      </div>
    )
  }

}

// put information outside the class
let node = null;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //static method example
  static getDerivedStateFromProps(next, prev) {
    // render since we are outside of our react tree
    node && ReactDOM.render(<ModalBox {...next} />, node)
    return next
  }

  componentDidMount() {
    // we have gone outside react to add this div to the body in 2 lines below
    // we are not in the react dom tree we are in regular js to append node 
    // so component is part of react tree but the actual implementation is found at the body level of real dom
    // how we can make the modal be on top of everything else
    node = document.createElement("div"); // native js here
    document.body.appendChild(node);
    // render since we are outside of our react tree
    ReactDOM.render(<ModalBox {...this.props} />, node);
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(node);
    node.parentNode && node.parentNode.removeChild(node);
  }

  render() {
    return <script /> //returns a placeholder that ignores css styles
  }

}

// why the child component?
// becuase we need to add the modal to the body 
// to be sure that the modal will be on top of other elements on the page
// ({ open, onClose, content }) is used to destructure prop data
const ModalBox = ({ open, onClose, content }) => {
  const className = open ? "click-catcher--open" : "click-catcher";
  return (
    <div className={className} onClick={onClose}>
      <div className="modal">{content}</div>
    </div>
  )
}
