import BackToTop from "react-back-to-top-button";
import freccia from "./icons8-upward-arrow-64.png"
import "./backTop.css"
const BackTop = () => {
    return(
        <BackToTop
            scrollTo={1}
            showAt={100}
            speed={1500}

        >
            <img id="fre" src={freccia}/>
        </BackToTop>
    );
}
export default BackTop;