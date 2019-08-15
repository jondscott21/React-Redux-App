import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux'
import {getData} from './actions'
import Question from './components/Question'
import jeopardy from './img/jeopardy-logo.png'

function App(props) {
  const [result, setResult] = useState(null);
  const handleClick = (e) => {
    e.preventDefault()
    setResult(null)
    props.getData()

  }
  return (
    <div className="App">
      <img style={{margin: '0 auto'}} src={jeopardy} alt='jeopardy logo'  height='272' width='640'/>
      {props.quiz[0] && <Question quiz={props.quiz[0]} setResult={setResult} result={result} />}
      <button className='btn' onClick={handleClick}>Get Question</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
  }
}

export default connect(mapStateToProps, { getData })(App);
