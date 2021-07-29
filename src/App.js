import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/nav.js';
import Documental from './components/documental.js';
import Video from './components/video.js';
import Fotografia from './components/fotografia.js';
import Grafica from './components/grafica.js';
import Sonoro from './components/sonoro.js';
import Talleres from './components/talleres.js'
import './App.css';





function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <div className="App">
          <h1>hi there!</h1>
          </div>
        </Route>
        <Route path="/documental">
          <Documental/>
        </Route>
        <Route path="/video">
          <Video/>
        </Route>
        <Route path="fotografia">
          <Fotografia/>
        </Route>
        <Route path="/grafica">
          <Grafica/>
        </Route>
        <Route path="/sonoro">
          <Sonoro/>
        </Route>
        <Route path="/talleres">
          <Talleres/>
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
