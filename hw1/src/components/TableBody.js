import React, { Component } from 'react'

export class TableBody extends Component {
  render() {
    const { contacts } = this.props

    return (
      <tbody>
        { contacts.map((contact, index) => (
            <tr key={ index }>
              { Object.keys(contact).map((key, i) => (
                <td key={ i }>
                  { contact[key] }
                </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    )
  }
}

export default TableBody