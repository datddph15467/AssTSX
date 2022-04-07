import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


type Props = {}

function Slider({}: Props) {
  return (
    <div>
        
                    <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/assignment22/image/upload/v1648870009/Ass-reactjs/slider/slider_2_xsw2ee.webp"
                alt="First slide"
                />
 
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/assignment22/image/upload/v1648870005/Ass-reactjs/slider/slider_3_mrjmwk.webp"
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/assignment22/image/upload/v1648870006/Ass-reactjs/slider/slider_4_pf22mm.webp"
                alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/assignment22/image/upload/v1648870006/Ass-reactjs/slider/slider_1_pbrpgg.webp"
                alt="four slide"
                />

            </Carousel.Item>
            </Carousel>
                
    </div>
  )
}

export default Slider