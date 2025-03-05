import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jsonFile, setJsonFile] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  // // // fetch handle
  const getQuotes = async () => {
    const port = 8000;
    const url = `http://localhost:${port}/api/quotes`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setJsonFile(data);
    } catch (error) {
      console.error("Error fetching quotes", error);
      return null;
    }
  };

  const selectRandomQuote = () => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }
  };

  // 1. Connect to the server, GET!
  useEffect(() => {
    getQuotes();
  }, []);

  // 2. If we detect a change in jsonFile we store the jsonFile.results into Quotes
  useEffect(() => {
    if (jsonFile) {
      setQuotes(jsonFile.results);
    }
  }, [jsonFile]);

  // 3. We select a random quote from the array of quotes; given not 0
  useEffect(() => {
    if(quotes.length > 0){
      selectRandomQuote();
    }
  }, [quotes])

  return (
    <>
      <h1>React Quotes</h1>
      {
        quote && (        
        <div>
          <h3>{quote.author || "No Author"}</h3>
          <p>"{quote.content || "No Quote"}"</p>
        </div>
        )
      }
      <button onClick={() => selectRandomQuote()}>Random Quote</button>
    </>
  );
}

export default App;
