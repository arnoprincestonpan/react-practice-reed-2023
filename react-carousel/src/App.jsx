import { useState } from 'react';
import './App.css'

function App() {
const [imageIndex, setImageIndex] = useState(0);
const images = [
  { 
    "src" : "https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "alt" : "Playful Cat lying on a Carpet",
    "auth" : "Diana",
    "cite" : "https://www.pexels.com/@didsss/"
  },
  { 
    "src" : "https://images.pexels.com/photos/979247/pexels-photo-979247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "alt" : "Stretching White Cat",
    "auth" : "Tamba Budiasrsana",
    "cite" : "https://www.pexels.com/@tamba09/"
  },
  {
    "src" : "https://images.pexels.com/photos/1510543/pexels-photo-1510543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "alt" : "Black Cat Walking on Road",
    "auth" : "David Bartus",
    "cite" : "https://www.pexels.com/@david-bartus-43782/"
  },
  {
    "src" : "https://images.pexels.com/photos/479009/pexels-photo-479009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "alt" : "White and Black Kitten Lying on Tiles",
    "auth" : "Danielle Daniel",
    "cite" : "https://www.pexels.com/@danielle-daniel-93966/"
  },
  {
    "src" : "https://images.pexels.com/photos/1302290/pexels-photo-1302290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "alt" : "Shallow Focus Photography Of White Cat",
    "auth" : "Diana",
    "cite" : "https://www.pexels.com/@didsss/"
  }
];

const handleImage = (number) => {
  if(number >= images.length){
    setImageIndex(0);
  } else if (number < 0) {
    setImageIndex(images.length - 1)
  } else {
    setImageIndex(number);
  }
}

  return (
    <>
      <h1>Cat Carousel</h1>
      <div
        style={{"display" : "flex", "flexDirection" : "row", 'justifyContent' : 'space-between', 'alignItems' : 'center'}}
      >
        <button 
        onClick={() => handleImage(imageIndex - 1)}
        >
          Previous
        </button>
        <img
        src={images[imageIndex].src}
        style={{"maxWidth" : "70%", "max-height" : "360px", 'margin' : '1rem'}}
        />
        <button 
        onClick={() => handleImage(imageIndex + 1)}>
          Next
        </button>
      </div>
    </>
  )
}

export default App
