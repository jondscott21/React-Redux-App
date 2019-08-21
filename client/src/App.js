import React, {useState} from 'react';
import './App.css';
import { connect, useSelector, useDispatch } from 'react-redux'
import {getData} from './actions'
import Question from './components/Question'
import jeopardy from './img/jeopardy-logo.png'

function App(props) {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [result, setResult] = useState(null);
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(getData())
    setResult(null)
  }
  // 'props' changed to state for hooks
  return (
    <div className="App">
      <img style={{margin: '0 auto'}} src={jeopardy} alt='jeopardy logo'  height='272' width='640'/>
      {state.quiz[0] && <Question quiz={state.quiz[0]} setResult={setResult} result={result} />}
      <button className='btn' onClick={handleClick}>Get A Question</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
  }
}

// export default connect(mapStateToProps, { getData })(App);
export default App;
