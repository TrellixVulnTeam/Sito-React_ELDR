
import ReactTypingEffect from 'react-typing-effect';
import "./Typing.css";
const TypingEffect = () =>{
    return(
        <div id='general'> 
        Rendi i viaggi
        <br/>
            <ReactTypingEffect id='type' 
            typingDelay={1000} 
            speed={100} 
            eraseSpeed={50} 
            text={["indimenticabili","unici","tuoi"]}
            />
        </div>
    );
}

export default TypingEffect;