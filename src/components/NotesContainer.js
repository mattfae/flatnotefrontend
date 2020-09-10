import React from 'react'


class NoteContainer extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/notes')
    .then(resp => resp.json())
    .then(notes => {
      console.log(notes)
    })
  }

  render() {
    return (
        <div className="notecontainer">
            <p>
              Hi
            </p>
        </div>
    )
  }
}

export default NoteContainer;
