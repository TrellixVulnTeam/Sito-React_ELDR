import { Carousel } from 'react-bootstrap';
import Immagine1 from './Immagini/Im1.jpg';
import Immagine2 from './Immagini/Im2.jpg';
import Immagine3 from './Immagini/Im3.jpg';

const Carosel = () => {
    return(
    <Carousel>
          <Carousel.Item interval = {1500}>
            <img className='d-block w-100 h-10' src={Immagine1} alt='Image-one' height={600}/>
            <Carousel.Caption>
            <h3>New york</h3>
            <h6>USA</h6>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100" src={Immagine2} alt="Image Two" height={600}
          />
          <Carousel.Caption>
          <h3>Puerto Vallarta</h3>
          <h6>Messico</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100" src={Immagine3} alt="Image Two" height={600}
          />
          <Carousel.Caption>
          <h3>Oakridge</h3>
          <h6>Oregon</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Carosel;