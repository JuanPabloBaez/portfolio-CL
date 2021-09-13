import React from "react";
import ReactPlayer from 'react-player';


const Sonoro = () => {
    return(
        <div className="sonoro-body">
        <ReactPlayer
            className="sonoro-player"
            url="https://soundcloud.com/carloslertora/ojos-de-agua"
            responsive="true"
            width="80%"
            height="15vh"
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
            height="15vh"
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
            width="80%"
            height="15vh"
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
            height="15vh"
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