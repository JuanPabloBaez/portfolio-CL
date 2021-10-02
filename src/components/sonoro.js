import React from "react";
import ReactPlayer from 'react-player';
import sonidoBackground from '../images/fondo_sonido.mp4';


const Sonoro = () => {
    return(
        <div className="sonoro-body">
        <video className="background-video" loop autoPlay muted playsInline >
              <source src={sonidoBackground} type="video/mp4" />    
            </video>
        <ReactPlayer
            className="sonoro-player"
            url="https://soundcloud.com/carloslertora/ojos-de-agua"
            responsive="true"
            width="80%"
            height="12vh"
            config={{
                soundcloud: {
                    options:{
                    download: false,
                    sharing: true,
                    show_artwork: false,
                    show_user: false,
                    color: "##36ff17"}
                }
            }}
        />
        <ReactPlayer
            className="sonoro-player"
            url="https://soundcloud.com/carloslertora/estados-de-la-materia"
            responsive="true"
            width="80%"
            height="12vh"
            config={{
                soundcloud: {
                    options:{
                    download: false,
                    sharing: true,
                    show_artwork: false,
                    show_user: false,
                    color: "##36ff17"}
                }
            }}
        />
        <ReactPlayer
            className="sonoro-player"
            url="https://soundcloud.com/carloslertora/sonadores-cosmicos-yerko-andrade"
            responsive="true"
            width="70%"
            height="12vh"
            config={{
                soundcloud: {
                    options:{
                    download: false,
                    sharing: true,
                    show_artwork: false,
                    show_user: false,
                    color: "##36ff17"}
                }
            }}
        />
        <ReactPlayer
            className="sonoro-player"
            url="https://soundcloud.com/carloslertora/el-retorno-a-la-aldea"
            responsive="true"
            width="80%"
            height="12vh"
            config={{
                soundcloud: {
                    options:{
                    download: false,
                    sharing: true,
                    show_artwork: false,
                    show_user: false,
                    color: "##36ff17"}
                }
            }}
        />
        </div>
        
    )
}

export default Sonoro;