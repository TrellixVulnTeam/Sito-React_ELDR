import { Carousel } from 'react-bootstrap';
import Immagine1 from './../../Immagini/London.jpg';
import Immagine2 from './../../Immagini/Paris.jpeg';
import Immagine3 from './../../Immagini/Berlin.jpg';

const Carosello_dest = () => {
    return(
    <Carousel>
          <Carousel.Item interval = {1500}>
            <img className='d-block w-100 h-10' src={Immagine1} alt='Image-one' height={600}/>
            <Carousel.Caption>
            <h3>London</h3>
            <h6>England</h6>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100" src={Immagine2} alt="Image Two" height={600}
          />
          <Carousel.Caption>
          <h3>Paris</h3>
          <h6>France</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100" src={Immagine3} alt="Image Three" height={600}
          />
          <Carousel.Caption>
          <h3>Berlin</h3>
          <h6>Germany</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Carosello_dest;