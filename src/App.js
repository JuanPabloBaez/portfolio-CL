import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {client} from './client';
import Nav from './components/nav.js';
import Documental from './components/documental.js';
import Video from './components/video.js';
import Fotografia from './components/fotografia.js';
import Grafica from './components/grafica.js';
import Sonoro from './components/sonoro.js';
import Talleres from './components/talleres.js'
import './App.css';





function App() {
  const [video, setVideo] = useState([]);

  useEffect(() => {

    async function getEntries() {
      try{
        client.getEntries()
        .then((response)=> {
            const data = response.items;
            const selectVideo = data.filter(item => item.sys.contentType.sys.id==="video");
            setVideo(selectVideo)
            console.log(selectVideo)
          return
        })
  
      }catch(error){
        console.log('fatal error')
      }
    }
  getEntries();

  }, []);




  


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
          <Video video={video}/>
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
