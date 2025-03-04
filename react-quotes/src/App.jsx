import { useEffect, useState } from 'react'
import quotesJSON from './data/quotesJSON.json'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState(quotesJSON);
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
    if(quotes.length > 0) {
      const randomIndex = Math.floor(Manth.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }
  }

  // retrieve from API as soon as page loads
  useEffect(() => {
    selectRandomQuote();
  }, [quotes])

  return (
    <>
      <h1>React Quotes</h1>
      <p>{quote?.content}</p>
    </>
  )
}

export default App
