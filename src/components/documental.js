import React, {  useEffect, useState } from "react";
import ReactPlayer from 'react-player';


const Documental = ({documental, video, musical, talleres}) => {
    const [videoList, setVideoList] = useState([]);

    useEffect(() =>{
        setVideoList(documental);
        
        return
    },[documental])


   function handleDoculist () {
       setVideoList(documental)
   }
   function handleVideolist () {
        setVideoList(video)
   }
   function handleMusicalist () {
    setVideoList(musical)
}
function handleTallereslist () {
    setVideoList(talleres)
}
    
    
    return(
        <div className="documental-body">

            <div className="buttons">
                <button onClick={handleDoculist} className={videoList===documental ? "list-active": "list-off"} >DOCUMENTAL</button>/
                <button onClick={handleVideolist} className={videoList===video ? "list-active": "list-off"}>EXPERIMENTAL</button>/
                <button onClick={handleMusicalist} className={videoList===musical ? "list-active": "list-off"}>MUSICAL</button>/
                <button onClick={handleTallereslist} className={videoList===talleres ? "list-active": "list-off"}>TALLERES</button>     
            </div>
            
            { videoList===documental &&  
                <p className="patrocinio">El catalogo online completo disponible en <a href="http://beatkino.com/" rel="noreferrer" target="_blank">beatkino.com</a></p>
            }          
            {
                videoList.map((item, index) => {
                    if (item.fields.link) {
                        return(
                            <div className="video-container" key={index}>
                                <ReactPlayer 
                                className="page-video"
                                url={item.fields.link}
                                controls={true}
                                responsive="true"
                                width="100%"
                                height="50vh"
                                config={{
                                    youtube: {
                                        embedOptions: {  showinfo: 0 }
                                    }
                                  }}
                                /> 
                                <p className="video-title">{item.fields.title}</p>
                                <p className="video-description">{item.fields.description}</p>
                            </div>
                        )
                    } return null
                }) 
            }

           
        </div>
        
    )
}

export default Documental;