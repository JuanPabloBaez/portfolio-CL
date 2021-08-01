import React from "react";
import ReactPlayer from 'react-player';


const Sonoro = () => {
    return(
        <div className="sonoro-body">
        <ReactPlayer
            className="sonoro-player"
            url="https://soundcloud.com/carloslertora"
            responsive="true"
            width="80%"
            height="60vh"
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