import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import header1 from '../images/header1.webp'
import header2 from '../images/header2.webp'
import header3 from '../images/header3.jpg'
// import slider1 from 'https://picsum.photos/1800/850';
// https://picsum.photos/1800/700?softlandscape,hardlandscape
const Header = () => {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 himg"
          src={header1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Green Enviroment Co.</h1>
          <h3>Steel Buildings</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 himg"
          src={header2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1>Green Enviroment Co.</h1>
          <h3>Land Scapes</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 himg"
          src={header1}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1>Green Enviroment Co.</h1>
        <h1>
        </h1>
          <h3>Agricutural Products</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
    </>
  )
}

export default Header