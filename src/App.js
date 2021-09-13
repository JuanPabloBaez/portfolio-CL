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
import videoBackground from './images/video-background.mp4';
import Instagram from './images/instagram.svg';
import './fonts/font.css'
import './App.css';


function App() {
  const [video, setVideo] = useState([]);
  const [documental, setDocumental] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    async function getEntries() {
      try{
        client.getEntries()
        .then((response)=> {
            const data = response.items;
            const selectVideo = data.filter(item => item.sys.contentType.sys.id==="video");
            setVideo(selectVideo);
            const selectDocumental = data.filter(item => item.sys.contentType.sys.id==="documental");
            setDocumental(selectDocumental);
            const selectImages = data.filter(item => item.sys.contentType.sys.id==="image")
            setImages(selectImages)
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
            <video id="background-video" loop autoPlay muted playsInline >
              <source src={videoBackground} type="video/mp4" />    
            </video>
          </div>
        </Route>
        <Route path="/documental">
          <Documental documental={documental} video={video}/>
        </Route>
        
        <Route path="/imagen">
          <Imagen images={images}/>
        </Route>

        <Route path="/sonido">
          <Sonoro/>
        </Route>

      </Switch>

      <footer>
        <p>&copy; Carlos Lértora 2021</p>
        <div className="social">
          <p>carloslertora@gmail.com</p>
          <a href="https://www.instagram.com/carlos_lertora/" target="_blank" rel="noreferrer"><img id="insta-logo" src={Instagram} alt="video icon"></img></a>
        </div>        
        <p>website:  <a href="http://jpbaez.com/" target="_blank" rel="noreferrer">Juan Pablo Baez</a></p>
      </footer>
    </Router>
  );
}

export default App;
