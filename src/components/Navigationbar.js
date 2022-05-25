import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navigationbar.css'
const Navigationbar = () => {
    return (
        <Navbar className="Navbar" collapseOnSelect expand="sm" bg="light">
            <Navbar.Brand id="logo" href="#home">Lycaon</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavLink id="textlink" eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink id="textlink" eventKey="2" as={Link} to="/about">Chi sono</NavLink>
                    <NavLink id="textlink" eventKey="3" as={Link} to="/contact">Contatti</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigationbar;