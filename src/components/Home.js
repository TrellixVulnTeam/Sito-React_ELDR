import Carosel from './Carosello.js';
import TypingEffect from './Animazioni/Typing.js'; 
import Prodotti from './Prodotti/Prodotti.js';
import Divider from './Divider/Divider.js';
const Home = () => {
    return(
      <div>
     <Carosel/>
     <TypingEffect/>
     <Divider/>
     <Prodotti/>
     </div>
    );
}

export default Home;