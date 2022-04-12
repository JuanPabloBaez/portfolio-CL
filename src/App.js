import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {client} from './client';
import Nav from './components/nav';
import Documental from './components/documental';
import Imagen from './components/imagen';
import Sonoro from './components/sonoro';
import Instagram from './images/instagram.svg';
import './fonts/font.css'
import './App.css';

function importAll(r) {
  return r.keys().map(r);
}
const fondos = importAll(require.context('./images/home', false, /,*\.mp4$/));


function App() {
  const [documental, setDocumental] = useState([])
  const [video, setVideo] = useState([]);
  const [musical, setMusical] = useState([]);
  const [talleres, setTalleres] = useState([]);
  const [images, setImages] = useState([])

  useEffect(() => {
    async function getEntries() {
      try{
        client.getEntries()
        .then((response)=> {
            const data = response.items;
            const selectDocumental = data.filter(item => item.sys.contentType.sys.id==="documental");
            setDocumental(selectDocumental);
            const selectVideo = data.filter(item => item.sys.contentType.sys.id==="video");
            setVideo(selectVideo);
            const selectMusical = data.filter(item => item.sys.contentType.sys.id==="musical");
            setMusical(selectMusical);
            const selectTalleres = data.filter(item => item.sys.contentType.sys.id==="talleres");
            setTalleres(selectTalleres);
            
            const selectImages = data.filter(item => item.sys.contentType.sys.id==="image");
            setImages(selectImages);
            
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
          <div className="home-body">
            <video className="background-video" loop autoPlay muted playsInline >
              <source src={fondos[(Math.floor(Math.random()*fondos.length))].default} type="video/mp4" />    
            </video>
          </div>
        </Route>
        <Route path="/documental">
          <Documental documental={documental} video={video} musical={musical} talleres={talleres}/>
        </Route>
        
        <Route path="/imagen">
          <Imagen images={images}/>
        </Route>

        <Route path="/sonido">
          <Sonoro/>
        </Route>

      </Switch>

      <footer>
        <p>&copy; Carlos Lértora  {new Date().getFullYear()}</p>
        <div className="social">
          <a href="mailto:carloslertora@gmail.com">carloslertora@gmail.com</a>
          <a href="https://www.instagram.com/carlos_lertora/" target="_blank" rel="noreferrer"><img id="insta-logo" src={Instagram} alt="video icon"></img></a>
        </div>        
        <p>website:  <a href="http://jpbaez.com/" target="_blank" rel="noreferrer">Juan Pablo Baez</a></p>
      </footer>
    </Router>
  );
}

export default App;
