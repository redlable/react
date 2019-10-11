import React, { Component } from 'react'

export class TableBody extends Component {
  render() {
    const { contacts } = this.props

    return (
      <tbody>
        { contacts.map(contact => (
            <tr>
              { Object.keys(contact).map((key) => (
                <td>
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