import React, { Component } from 'react'
import TodoListItem from './TodoListItem'

export class TodoList extends Component {
  render() {
    const { todos } = this.props

    return (
      <React.Fragment>
          <h3>TodoList ({todos.length})</h3>
          { todos.map(todo => (
              <TodoListItem key={todo.id} todo={todo} />
            ))
          }
      </React.Fragment>
    )
  }
}

export default TodoList