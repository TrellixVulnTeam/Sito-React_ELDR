import './Prodotti.css';
import viaggi from './../Immagini/aereo.png'
import mondo from './../Immagini/Mondo.png'
import tappa from './../Immagini/Tappa.png'
const Prodotti = () =>{
    return(
        <div id='container'>
            <h2 id='divisore'>Prodotti</h2>
            <div id='ImPro'>
            <figure><a href='./Voli.js'>
            <img id='immagine' src={viaggi} alt="Immagine 1"/>
            <figcaption><h3>Voli</h3></figcaption></a>
            </figure>
            <figure>
                <a  href='./Mete'><img id='immagine' src={mondo} alt="Immagine 2"/>
                <figcaption><h3 className="aFig">Mete</h3></figcaption></a>
            </figure>
            <figure>
                <a href='./Tappe.js'><img id='immagine' src={tappa} alt="Immagine 3"/>
                <figcaption><h3 className="aFig">Tappe</h3></figcaption></a>
            </figure>
            </div>
            <div id='ImPro'>
            <figure><a href='./Voli.js'>
            <img id='immagine' src={viaggi} alt="Immagine 1"/>
            <figcaption><h3 className="aFig">Voli</h3></figcaption></a>
            </figure>
            <figure><a href='/Mete.js'>
                <img id='immagine' src={mondo} alt="Immagine 2"/>
                <figcaption><h3 className="aFig">Mete</h3></figcaption></a>
            </figure>
            <figure><a href='./Tappe.js'>
                <img id='immagine' src={tappa} alt="Immagine 3"/>
                <figcaption><h3 className="aFig">Tappe</h3></figcaption></a>
            </figure>
            </div>
        </div>
    );
}
export default Prodotti;