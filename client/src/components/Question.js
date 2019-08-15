import React, {useState} from 'react';

export default function Question(props)  {
    const [answer, setAnswer] = useState('');
    
    console.log(props.quiz.answer)

    const handleChange = (event) => {
        setAnswer(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(answer)
        console.log(props.quiz.answer)
        if (props.quiz.answer.toLowerCase() === answer.toLowerCase()) {
            console.log(true)
            props.setResult(true)
            setAnswer('')
        } else {
            console.log(false)
            props.setResult(false)
            setAnswer('')
        }
    }

    return(
        <div className='quiz-wrapper'>
            <h1>{props.quiz.category.title.toUpperCase()}</h1>
            <h2>for {props.quiz.value}</h2>
            <h3>Question: {props.quiz.question}</h3>
            <p style={{fontStyle: 'italic', color: '#F6A31B'}}>aired in: {props.quiz.airdate.slice(0, 4)}</p>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor='answer'>What is:</label>
                <input type='text' name='answer'  value={answer} onChange={handleChange} id='answer'></input>
                <button className='btn'>Answer</button>
            </form>
            {props.result === null ? null : props.result === false ? <p className='wrong'>I'm sorry that's the wrong answer</p> : <p className='right'>That's Correct!</p> }
        </div>
    )
}