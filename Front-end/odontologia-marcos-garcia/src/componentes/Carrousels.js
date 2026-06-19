import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import placeholder1 from "../assets/placeholder 1.jpg"
import placeholder2 from "../assets/placeholder 2.jpg"
import placeholder3 from "../assets/placeholder 3.jpg"


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={placeholder1}  className="d-block w-100" alt='something'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={placeholder2}  className="d-block w-100" alt='something'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={placeholder3}  className="d-block w-100" alt='something'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;