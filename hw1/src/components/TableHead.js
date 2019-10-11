import React, { Component } from 'react'

export class TableHead extends Component {
  render() {
    const titles = this.props.titles

    return (
      <thead>
        <tr>
          { titles.map((title, index) => (
            <th key={ index }>
              { title }
            </th>
            ))
          }
        </tr>
      </thead>
    )
  }
}

export default TableHead