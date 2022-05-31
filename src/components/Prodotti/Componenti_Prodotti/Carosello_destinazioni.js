import { Carousel } from 'react-bootstrap';
import Immagine1 from './../../Immagini/London.jpg';
import Immagine2 from './../../Immagini/Paris.jpeg';
import Immagine3 from './../../Immagini/Berlin.jpg';
import './Carosello_destinazione.css';

const Carosello_dest = () => {
    return(
      <section className='container_carosello'>
    <Carousel>
          <Carousel.Item interval = {1500}>
            <img className='d-block w-100 h-10' src={Immagine1} alt='Image-one'/>
            <Carousel.Caption>
            <h3>London</h3>
            <h6>England</h6>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100" src={Immagine2} alt="Image Two"/>
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
      </section>
    );
}

export default Carosello_dest;