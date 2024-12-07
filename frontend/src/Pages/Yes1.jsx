import React from 'react'
import img18 from '../Components/images/18.jpg'
import img17 from '../Components/images/17.jpg'
import img16 from '../Components/images/16.jpg'
import Carousel from 'react-bootstrap/Carousel';

const Yes1 = () => {
  return (
<>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img18}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First</h5>
          <p>Yes Entrepreneur Summit: Empowering Visionaries.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img17}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second</h5>
          <p>Yes Entrepreneur Summit: Empowering Visionaries.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img16}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third</h5>
          <p>
          Yes Entrepreneur Summit: Empowering Visionaries.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Yes1
