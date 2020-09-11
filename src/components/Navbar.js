import React from 'react';

class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="http://localhost:3000/notes">Flatnote</a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="http://localhost:3000/notes">New Note<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000/notes">Sign Out</a>
        </li>
      </ul>
      </nav>
    )
  }
}

export default NavBar;
