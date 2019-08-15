import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import {getData} from './actions'

function App(props) {
  const handleClick = (e) => {
    e.preventDefault()
    props.getData()

  }
  console.log(props.art)
  return (
    <div className="App">
      <h1>{props.art && props.art.artistDisplayName}</h1>
      <button onClick={handleClick}>Get Art</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    art: state.art
  }
}

export default connect(mapStateToProps, { getData })(App);
