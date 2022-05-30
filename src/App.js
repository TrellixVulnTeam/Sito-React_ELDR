import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import BackTop from './components/Pulsanti/backTop';
import Prod from "./components/Prodotti/Mete";

function App() {
  return (
        <Router>
        <div className="App">
            <Navigationbar />
            <BackTop/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path=''component={Prod} />
            </Switch>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
