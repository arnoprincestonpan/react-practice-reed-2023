import { useState } from 'react'
import './App.css'

function App() {
  const [accordions, setAccordions] = useState([
    {
      'question' : 'What are the two most common mobile operating systems?',
      'answer' : `Google has Android and Apple has the iOS.`,
      'button' : false,
    },
    {
      'question' : 'What are the most common desktop operating systems?',
      'answer' : `Google has Chrome OS, Microsoft has Windows, Apple has Mac OS, and there a tons of Linux distributions out there with Ubuntu being one of the most popular.`,
      'button' : false,
    },
    {
      'question' : 'Where are the task bars for the main operating systems?',
      'answer' : `Windows and Chrome OS is at the bottom. Apple has it at the top. Linux varies.`,
      'button' : false,
    },
    {
      'question' : 'What popular mobile operating systems once dominated the market?',
      'answer' : `The Blackberry OS by RIM (Blackberry), Nokia's Symbian OS, later Meego OS and after MS's acquried it Windows Mobile OS.`,
      'button' : false,
    },
    {
      'question' : 'What is the current most popular cellular generation?',
      'answer' : `The latest standard used as of 2025 is 5G. As for popularity it depends on which part of the world you may be from. 4G could be said is the most common.`,
      'button' : false,
    },
  ])

  return (
    <>
      <div className='container'>
        <h1>Accordions | FAQ for Operating Systems</h1>
        {
          accordions.map((accordion, index) => (
            <div className="card" key={index}>
              <div className="question">
                <h3>{(index + 1)}. {accordion.question}</h3>
                <button onClick={() => setAccordions((previousAccordions) => previousAccordions.map((a, i) => (
                  i === index ? {...a, button : !a.button} : a
                )))}>+</button>
              </div>
              {accordion.button && <p className='answer'>{accordion.answer}</p>}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
