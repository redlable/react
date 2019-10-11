import React, { Component } from 'react';
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';

class App extends Component {
  state = {
    titles: ['First name', 'Last name', 'Age', 'Phone'],
    contacts: [
      {
        firstName: "Cummings",
        lastName: "Barton",
        age: 27,
        phone: "+1 (843) 415-3763"
      },
      {
        firstName: "Molina",
        lastName: "Baldwin",
        age: 42,
        phone: "+1 (906) 548-3470"
      },
      {
        firstName: "Mcleod",
        lastName: "Dawson",
        age: 68,
        phone: "+1 (994) 598-2114"
      },
      {
        firstName: "Pam",
        lastName: "Leonard",
        age: 48,
        phone: "+1 (913) 508-2993"
      },
      {
        firstName: "Althea",
        lastName: "Patrick",
        age: 29,
        phone: "+1 (955) 535-2406"
      }
    ]
  }

  render() {
    return (
      <table>
        <TableHead titles={ this.state.titles } />
        <TableBody contacts={ this.state.contacts }/>
      </table>
    )
  }
}

export default App;
