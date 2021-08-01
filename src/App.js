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
import './App.css';





function App() {
  const [video, setVideo] = useState([]);
  const [posts, setPosts] = useState([])

  useEffect(() => {

    async function getEntries() {
      try{
        client.getEntries()
        .then((response)=> {
            const data = response.items;
            const selectVideo = data.filter(item => item.sys.contentType.sys.id==="video");
            setVideo(selectVideo);
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
          <video id="background-video" loop autoPlay >
            <source src={videoBackground} type="video/mp4" />    
          </video>
        </Route>

        <Route path="/documental">
          <Documental/>
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
    </Router>
  );
}

export default App;
