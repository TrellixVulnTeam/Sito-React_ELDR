import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import BackTop from './components/Pulsanti/backTop';

function App() {
  return (
    <div className="App">
    <BackTop/>
        <Router>
        
            <Navigationbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                
            </Switch>
            <Route path='/contact' component={Contact}/>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
