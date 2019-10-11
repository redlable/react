import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    name: 'Alex',
    todos: [
      {
        id: 1,
        title: 'Todo 1',
      },
      {
        id: 2,
        title: 'Todo 2',
      },
      {
        id: 3,
        title: 'Todo 3',
      }
    ]
  }

  getHeading() {
    return 'React App'
  }

  onInputValueChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <header>{this.getHeading()}</header>
        <h1>Hellow, { this.state.name || 'Anonymus' }!</h1>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
