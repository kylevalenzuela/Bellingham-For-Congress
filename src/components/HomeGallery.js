import React from 'react'
import Carousel from 'react-grid-carousel';
import car1 from '../img/car1.jpg';
import car2 from '../img/car2.jpg';
import car3 from '../img/car3.jpg';

const HomeGallery = () => {
  return (
    <Carousel cols={1} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src={car1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={car2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={car3} />
      </Carousel.Item>
    </Carousel>
  )
}
export default HomeGallery;