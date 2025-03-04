import { useEffect, useState } from 'react'
import quotesJSON from './data/quotes.json'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  // // fetch handle
  // const getQuotes = async() => {

  // const URL = `https://api.quotable.io/quotes`;

  //   try {
  //     const response = await fetch(url);

  //     if(!response.ok){
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     } 

  //     const data = await response.json();
  //     setQuotes(data.results);

  //   } catch (error) {
  //     console.error('Error fetching quotes', error)
  //     return null;
  //   }
  // }

  const selectRandomQuote = () => {
    
  }

  // retrieve from API as soon as page loads
  useEffect(() => {

  }, [])

  return (
    <>
      <h1>React Quotes</h1>
      <p>{quote.content}</p>
    </>
  )
}

export default App
