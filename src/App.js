import React, { Component } from 'react';
import TodoList from './components/todoComponents/TodoList';
import TodoForm from './components/todoComponents/TodoForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          //nidhi
        }
      ],
      todo: ''
    };
  }
  render() {
    return (
      <div className="App">
        <h1>ToDo list</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm todos={this.state.todos} />
      </div>
    );
  }
}
export default App;
