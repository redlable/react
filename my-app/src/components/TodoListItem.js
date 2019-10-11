import React, { Component } from 'react'

export class TodoListItem extends Component {
    render() {
        const { title } = this.props.todo
        
        return (
            <div>{title}</div>
        )
    }
}

export default TodoListItem