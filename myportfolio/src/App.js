import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, HashLink
} from 'react-router-dom'

import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar/>
         <main>
          <Route path="/" component={Home}/>
          <Route path="/" component={About}/>
          <Route path="/" component={Portfolio}/>          
          <Route path="/" component={Contact}/>
           </main>
           <Footer/> 
       </Router>
      </>
    </div>
  );
}

export default App;
