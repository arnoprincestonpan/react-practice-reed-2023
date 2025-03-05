import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, newItem])
  }

  const handleDelete = (itemIndex) => {
    const newItems = items.filter((_, index) => index !== itemIndex)
    setItems(newItems)
  }

  return (
    <>
      <h1>React Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addItem">
          <input
            name="addItem"
            text="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </label>
        <button type="submit">
          Add Item
        </button>
      </form>
      <p>Latest Item: {newItem}</p>
      {
        items.length > 0 &&
        (
          <ul>
            {items.map((item, index) => (
              <>
                <li key={index}>{item}</li>
                <button onClick={() => handleDelete(index) }>Delete Item</button>
              </>
            ))}
          </ul>
        )
      }
    </>
  )
}

export default App
