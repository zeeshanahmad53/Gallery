import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/c1.jpg';
import img2 from '../images/c2.jpg';
import img3 from '../images/c3.jpg';
import Image from 'react-bootstrap/Image';
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className=''>
      <Carousel.Item>
      <Image src={img1}  height={"580px"} width={"100%"}/>
        <Carousel.Caption>

            <h2 className='text-primary'>SHARE PHOTO ALBUMS PRIVATELY</h2>
            <h3 className='text-warning'>Create a free online photo album. Make memories together!</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={img2}  height={"580px"} width={"100%"}/>
        <Carousel.Caption>
        <h2 className='text-info'>Save Your Memories</h2>
        <h3>Share and create your photo album.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={img3}  height={"580px"} width={"100%"}/>
        <Carousel.Caption>
          <h2 className='text-warning'>Free as a bird</h2>
          <h3 className='text-light'>
            Your home is a living space, not a stroage space
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;