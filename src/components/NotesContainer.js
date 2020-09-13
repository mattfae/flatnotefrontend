import React, { Component } from 'react'
import { connect } from 'react-redux'
import Note from './Note'
import { fetchNotesSuccess } from '../actions/index'


class NoteContainer extends Component {
 
  componentDidMount() {

    const reqObj = {
      "method": 'GET',
      "headers": {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      }
    }

    fetch('http://localhost3000/notes', reqObj)
    .then(resp => resp.json())
    .then(notes => {
      console.log(notes)//this.props.fetchNotesSuccess(notes)
    })
  }

  // renderNotes = () => {
  //   return this.props.notes.map ( note => (
  //     <Note
  //       title={note.title}
  //       content={note.content}
  //     />
  //   ));
  // }

  render() {
    return (
        <div className="container">
          <h1>Your Notes</h1>
          <div className="container">
            Hi 
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = {
  fetchNotesSuccess
}

export default connect(null, mapDispatchToProps)(NoteContainer)
