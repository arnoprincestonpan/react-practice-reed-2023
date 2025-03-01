import './App.css'
import CatCarousel from './components/CatCarousel';

function App() {
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

  return (
    <>
      <h1>Cat Carousel</h1>
      <CatCarousel
      images={images}
      />
    </>
  )
}

export default App
