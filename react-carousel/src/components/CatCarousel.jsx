import {useState} from 'react';

function CatCarousel({images}) {
    const [imageIndex, setImageIndex] = useState(0);
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
        <div
            style={{ "display": "flex", "flexDirection": "row", 'justifyContent': 'space-between', 'alignItems': 'center' }}>
            <button
                onClick={() => handleImage(imageIndex - 1)}
            >
                Previous
            </button>
            <figure>
                <img
                    src={images[imageIndex].src}
                    alt={images[imageIndex].alt}
                    style={{ "maxWidth": "70%", "max-height": "360px", 'margin': '1rem' }}
                />
                <figcaption>
                    <b>"{images[imageIndex].alt}"</b> by {images[imageIndex].auth} from <a href="https:www.pexels.com">Pexels</a>. <br/>(Work Cited: <i>{images[imageIndex].cite}</i>)
                </figcaption>
            </figure>
            <button
                onClick={() => handleImage(imageIndex + 1)}>
                Next
            </button>
        </div>
    )
}

export default CatCarousel