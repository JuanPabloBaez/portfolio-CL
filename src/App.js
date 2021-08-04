import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {client} from './client';
import Nav from './components/nav';
import Documental from './components/documental';
import Video from './components/video';
import Fotografia from './components/fotografia';
import Grafica from './components/grafica';
import Sonoro from './components/sonoro';
import Talleres from './components/talleres';
import videoBackground from './images/video-background.mp4';
import Vimeo from './images/vimeo.svg';
import Instagram from './images/instagram.svg';
import './fonts/font.css'
import './App.css';


function App() {
  const [video, setVideo] = useState([]);
  const [documental, setDocumental] = useState([])
  const [posts, setPosts] = useState([])

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
            const selectPost = data.filter(item => item.sys.contentType.sys.id==="post")
            setPosts(selectPost)
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
            <video id="background-video" loop autoPlay muted >
              <source src={videoBackground} type="video/mp4" />    
            </video>
          </div>
        </Route>
        <Route path="/documental">
          <Documental documental={documental}/>
        </Route>
        <Route path="/video">
          <Video video={video}/>
        </Route>
        <Route path="/fotografia">
          <Fotografia/>
        </Route>
        <Route path="/grafica">
          <Grafica/>
        </Route>
        <Route path="/sonoro">
          <Sonoro/>
        </Route>
        <Route path="/talleres">
          <Talleres posts={posts}/>
        </Route>
      </Switch>
      <footer>
        <p>&copy; Carlos Lértora 2021</p>
        <div className="social">
          <p>carloslertora@gmail.com</p>
          <a href="https://vimeo.com/carloslertora" target="_blank" rel="noreferrer" ><img src={Vimeo} alt="video icon"></img></a>
          <a href="https://www.instagram.com/carlos_lertora/" target="_blank" rel="noreferrer"><img src={Instagram} alt="video icon"></img></a>
        </div>        
        <p>website:  <a href="http://jpbaez.com/" target="_blank" rel="noreferrer">Juan Pablo Baez</a></p>
      </footer>
    </Router>
  );
}

export default App;
