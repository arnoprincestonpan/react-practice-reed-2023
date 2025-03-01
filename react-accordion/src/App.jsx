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
      'question' : 'What are the two most common mobile operating systems?',
      'answer' : `Google has Android and Apple has the iOS.`,
      'button' : false,
    },
    {
      'question' : 'What are the two most common mobile operating systems?',
      'answer' : `Google has Android and Apple has the iOS.`,
      'button' : false,
    },
    {
      'question' : 'What are the two most common mobile operating systems?',
      'answer' : `Google has Android and Apple has the iOS.`,
      'button' : false,
    },
  ])

  return (
    <>
      <div>
        <h1>Accordions</h1>
        {
          accordions.map((accordion, index) => (
            <div key={index} style={{'display' : 'flex', 'flexDirection' : 'column'}}>
              <div style={{'display:' : 'flex', "flexDirection" : 'row', 'justifyContent' : 'space-between', 'alignContent' : 'center'}}>
                <h2 style={{'textAlign' : 'start', 'margin' : '0'}}>{accordion.question}</h2>
                <button onClick={() => setAccordions((previousAccordions) => previousAccordions.map((a, i) => (
                  i === index ? {...a, button : !a.button} : a
                )))}>+</button>
              </div>
              {accordion.button && <p style={{'textAlign' : 'start'}}>{accordion.answer}</p>}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
