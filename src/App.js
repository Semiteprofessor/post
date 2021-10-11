import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Post from './components/Posts';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/:post_id' component={Post}/>
      </Switch>
    </div>
  );
}

export default App;
